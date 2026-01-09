//1. state（アプリの設計図）
// 状態管理（state）
//画面の状態を１つのオブジェクト（state）で管理する

const state = {
    loading: false,//true:読み込み中→Loading表示
    error:null,//エラー発生時のメッセージ（なければnull）
    data:[],//正常時に表示するAPIから取得した一覧データ
    filter: {
        keyword: "",//検索
        userId: null//Id1フィルター
    },
    sortOrder:"asc" //追加 "asc"=昇順　"desc"=降順
};

// 2. render()（司令塔）
function render() {
    //状態に応じて画面全体を再描画する司令塔
    renderStatus();
    renderList();
}


// 3. renderStatus（状態表示）
// UI描画関数（状態に応じて画面上のステータス表示を切り替える）
function renderStatus(){

    //statusを作成してDOMでJSからHTMLを変更できるようにidを取得する
    const status = document.getElementById("status");
//if文で条件分岐する

//state.loading→読み込み中の場合は、Loadingメッセージを表示する
    if(state.loading) {
        //stateがtrueならLoading中HTMLへの表示を変えるためtextContentを使ってLoading表示
        status.textContent = "Loading...";
        //Loadingの記述を表示できるようにするためreturnでHTMLのstatusへ返す
        return;// これ以上下の判定をしない
    }
    //stateがエラーがある場合は、エラーメッセージを表示するHTMLへの表示を変えるためtextContentを使ってerror表示
    if(state.error) {
        status.textContent = state.error;
        //errorの記述を表示できるようにするためreturnでHTMLのstatusへ返す
        return;// これ以上下の判定をしない
    }


    //データが取れてエラーもなくローディングも終わってるけど、中身が空
    //表示なしから「データなし」と「データあり」に分けることができるようになった
    if(state.data.length === 0) {
        status.textContent = "データがありません";
        return;
    }


    // LoadingでもErrorでもない場合は、ステータス表示を消す
     status.textContent = "";
}

// 4. renderList（投稿一覧組み立て）
// state.data に入っているデータを画面の一覧として表示し直す関数
function renderList() {
    // 一覧を表示する ul 要素list idを取得
    const ul = document.getElementById("list");
    // ul内の表示を一度リセットする（前の表示が残ると二重表示になるから）
    ul.innerHTML = "";

    let result = state.data;

    //フィルター
    if(state.filter.keyword) {
        result = result.filter(post =>
            post.title.includes(state.filter.keyword)
        );
    }

    if(state.filter.userId !== null) {
        result = result.filter(post=>
            post.userId === state.filter.userId
        );
    }

    //並び替える
    result = sortPosts(result);


    //表示
    //filteredしたものをforEachで配列の中を1個ずつ処理する
    result.forEach(post =>{
        //ulのliへ追加する
        ul.appendChild(createPostItem(post));
    });

}

// 5. 部品系関数（createPostItem / sortPosts）

// li作成を関数に切り出す
    function createPostItem(post) {
        //li部品生成
        const li = document.createElement("li");
        //liの中をpost.titleに置き換え
        li.textContent = post.title;
        return li;
    }

// ボタンUIも1つ関数化
function createButton(text,onClick) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click",onClick);
    return btn ;
}

// 6. イベントハンドラ（addEventListener）
// イベントは「状態変更だけ」を行い、UIはrenderに任せる
//input が変わったら検索する
//JSでHTML要素を動かすためDOMでid取得
document.getElementById("searchInput")

    .addEventListener("input",(e) => {
            state.filter.keyword = e.target.value;// 状態更新

        render();// UI再描画
     });


//ボタンを押したらフィルター表示
document.getElementById("filterBtn").addEventListener("click",()=>{
    state.filter.userId = 1; // 例（本当は別stateが理想）
  render();
});

//ボタン押したらフィルター解除
document.getElementById("resetBtn")
    .addEventListener("click",() =>{
        state.filter.keyword = "";
        state.filter.userId = null;
        render();
    });


// 並び替えロジックを作る（超重要）
function sortPosts(posts) {

    return posts
        .slice()// 元配列を壊さないコピー
        .sort((a,b) =>{
        if(state.sortOrder === "asc") {
            return a.title.localeCompare(b.title);
        } else{
            return b.title.localeCompare(a.title);
        }
    });
}

//流れの説明
// sortPostsというfunctionファイルはpostsを.slice（元配列を壊さないコピー）にしてaとbをsort（1組ずつ比較して、順番を決める）する
// 並び替えの内容は(a,b)
// もしstate.sortOrderがasc(昇順)だった場合はa.titleをlocalCompare（文字列の正しい比較方法）をb.titleと比較する
// もしstate.sortOrderがasc(昇順)じゃなかった場合はb.titleをlocalCompare（文字列の正しい比較方法）a.titleと比較する


// ボタン操作 → 状態変更 → render
//ボタンクリックしてasc（昇順）のものをrender()の中に入れる
document.getElementById("sortAsc").addEventListener("click",()=>{
    state.sortOrder = "asc";
    render();
});

//ボタンクリックしてdesc（降順）のものをrender()の中に入れる
document.getElementById("sortDesc").addEventListener("click",()=>{
    state.sortOrder = "desc";
    render();
});


//7. fetchPosts（外部との通信）state.dataの取得元
async function fetchPosts(){
    // ① ローディング開始（通信前）
    state.loading = true;
    //② エラー初期化 前回のエラーをリセット
    state.error = null;
    //③ ステータス表示更新(状態に応じて)
    render();

    try{
        // APIにリクエストを送る
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        //// resがokじゃなかった場合、HTTPエラーの場合はエラーとして扱う
        if(!res.ok){
            throw new Error("通信に失敗しました");
        }
        // レスポンスをJSONに変換
        const data = await res.json();
        // 取得したデータをstateに保存
        state.data = data;
        // データ取得後、一覧表示を更新
        render();
        
    } catch(err){
        //// エラーが発生した場合は、エラーメッセージをstateに保存
        state.error = err.message;
    } finally {
        // 成功・失敗に関わらず、ローディング終了
        state.loading = false ;
        // 最終的な状態に応じてステータス表示を更新
        render();
    }
    //なぜ finally に loading = false がある？

    // 👉 成功でも失敗でも必ずローディングを終わらせたいから

    // try：成功ルート

    // catch：失敗ルート

    // finally：どっちでも通る

    // ＝ UIが壊れない

}
// 8. 初期実行（fetchPosts()）
fetchPosts();



//データを取得して、状態を更新して、UIを再描画する
//※ UIそのものは描かない👉 状態を変える司令塔
// fetchPosts() 全体の流れ（日本語）
// ① ローディング開始
// ② エラー初期化
// ③ ステータス表示更新
// ④ API通信
// ⑤ 成功 → データ保存＆一覧表示
// ⑥ 失敗 → エラー保存
// ⑦ 最後にローディング終了＆表示更新

//APIから投稿データを取得し、状態とUIを更新する非同期関数


// 🧠 全体構造（まず俯瞰）
// ┌───────────────┐
// │ fetchPosts()  │   ← データ取得・判断（ロジック）
// └───────┬───────┘
//         │
//         ▼
// ┌────────────────┐
// │     state       │   ← 今の画面の状態
// │ ────────────── │
// │ loading : true/false
// │ error   : null / message
// │ data    : [] / posts
// └───────┬────────┘
//         │
//         ▼
// ┌────────────────────────┐
// │      UI描画関数         │
// │  ┌───────────────┐     │
// │  │ renderStatus() │     │
// │  │  ・Loading     │     │
// │  │  ・Error       │     │
// │  └───────────────┘     │
// │  ┌───────────────┐     │
// │  │ renderList()   │     │
// │  │  ・一覧表示    │     │
// │  └───────────────┘     │
// └────────────────────────┘

// 🔍 renderStatus と renderList の役割分担
// renderStatus()
// state.loading === true
//         ↓
// 「Loading...」表示

// state.error がある
//         ↓
// エラーメッセージ表示

// どちらでもない
//         ↓
// 何も表示しない


// 👉 「今の状態」を文章で伝えるUI

// renderList()
// state.data にデータが入る
//         ↓
// ul を空にする
//         ↓
// 1件ずつ li を作る
//         ↓
// 一覧として表示

// 👉 「データそのもの」を見せるUI

// 🧩 2つの関係（超重要）
// ❌ やってないこと

// renderStatus は data を見ない

// renderList は loading / error を見ない

// 👉 お互いの領域に干渉しない

// ⭕ 正しい関係
//         state
//        /     \
//       ▼       ▼
// renderStatus  renderList


// 👉 共通のstateを見るだけ

// 🔁 時系列で見ると（超理解しやすい）
// ① fetch開始
// state.loading = true
// state.error = null

// renderStatus() → 「Loading...」
// renderList()   → まだ呼ばれない

// ② 成功時
// state.data = data
// state.loading = false

// renderList()   → 一覧表示
// renderStatus() → 表示クリア

// ③ 失敗時
// state.error = "通信に失敗しました"
// state.loading = false

// renderStatus() → エラー表示
// renderList()   → 呼ばれない

// 🧠 一言で言うと

// fetchPosts：司令塔

// state：掲示板

// renderStatus：状況説明係

// renderList：結果表示係

