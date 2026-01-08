// 🟠 DAY30APIデータを配列として扱い、一覧表示を作れる
//DAY30はDAY29を変更するものなのでコピーして変更点だけ変える

// 🟡 DAY29 と DAY30 の関係（超重要）
// DAY29 ＝「設計」

// state にまとめる

// fetch + try/catch

// renderStatus / renderList 分離

// どう作るかの型

// DAY30 ＝「配列の扱いをレベルアップ」

// forEach / map を理解する

// 表示の書き方を変えてみる

// 中身の処理を強化する日

// 👉 仕組みは同じ、書き方だけ変える


// DAY30 で「触るのはここだけ」
// function renderList() {
//     ...
// }


// ❌ 触らない

// state

// fetchPosts

// renderStatus

// ✅ 一言でいうと

// forEach は「その場で何かする」
// map は「形を変えた新しい配列を作る」

// 🟡 forEach は「表示向き」
// 何をするもの？

// 配列の中身を 順番に取り出す

// 戻り値はない

// 「処理するだけ」

// イメージ

// 1件ずつ取り出して
// 👉 その場で画面に出す

// 例（表示）
// state.data.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item.title;
//     ul.appendChild(li);
// });

// 言葉で説明すると👇

// forEach は
// 「配列の中身を1個ずつ取り出して、
// その場でDOM操作やconsole.logなどの処理をするために使う」

// 👉 「結果を返さない」＝表示・副作用向き

// 🟠 map は「変換向き」
// 何をするもの？

// 配列の中身を 別の形に変換

// 必ず新しい配列を返す

// イメージ

// 元データ
// 👉 別の形のデータに作り直す

// 例（HTMLに変換）
// const items = state.data.map(item => {
//     return `<li>${item.title}</li>`;
// });


// 結果👇

// [
//   "<li>title1</li>",
//   "<li>title2</li>",
//   ...
// ]

// 言葉で説明すると👇

// map は
// 「配列の各要素を加工して、
// 新しい配列を作るために使う」

// 👉 「結果が欲しい」＝変換向き

// 🧠 超重要な違い（ここ言えたら完璧）
// 	forEach	map
// 目的	処理する	変換する
// 戻り値	なし	新しい配列
// 主な用途	表示・DOM操作	データ加工
// 実務	単純表示	大量描画・再利用

// 🎯 面接・実務レベルの説明（短文）

// forEach は副作用（表示など）を目的に使う
// map はデータを別の形に変換したい時に使う


//-----------------------------------------------

// 🟢 DAY29｜fetch + DOM「完成形ミニアプリ」

// ここからは**“動くサンプル”じゃなく“提出できる形”**を作る。

// 🎯 DAY29のゴール（案件基準）

// API通信がある

// ローディングが出る

// エラー時にちゃんと伝わる

// 成功時だけDOM描画

// 状態が破綻しない

// 👉 「とりあえずfetch」は卒業。

// 🧠 実務での考え方（超重要）
// 非同期処理は必ず「状態」を持つ

// 最低限この3つ👇

// loading   // 取得中
// error     // 失敗
// data      // 成功データ
// 案件では
// 「今どの状態か分からないUI」＝不具合。

// 🧩 今回作る最小アプリ（課題）
// 📌 テーマ例（おすすめ）
// APIデータ一覧表示アプリ

// 公開APIからデータ取得

// 取得中：Loading...

// 失敗時：エラーメッセージ

// 成功時：リスト表示

// 👉 APIはこれ使おう（安定しててシンプル）
// JSONPlaceholder（posts）

// arduino
// コードをコピーする
// https://jsonplaceholder.typicode.com/posts
// 🛠 実装ステップ（設計先行）
// ① HTML（最低限）

// <body>
//   <h1>Post List</h1>

//   <div id="status"></div>
//   <ul id="list"></ul>

//   <script src="main.js"></script>
// </body>


// ② 状態を1箇所にまとめる
//画面の状態を１つのオブジェクト（state）で管理する
//今　「読み込み中か」「エラーがあるか」「表示するデータ」をまとめて持つ
const state = {
    loading: false,//true:読み込み中→Loading表示
    error:null,//エラー発生時のメッセージ（なければnull）
    data:[]//正常時に表示するAPIから取得した一覧データ
};

// ③ UI描画関数（分離）

//function 処理に名前つけて　renderStatus関数＝処理のまとまりを作る
// 画面上のステータス表示（Loading / Error）を更新する関数
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
    // LoadingでもErrorでもない場合は、ステータス表示を消す
    status.textContent = "" ;
}


//state.data に入っているデータを画面の一覧として表示し直す
function renderList() {
    // 一覧を表示する ul 要素list idを取得
    const ul = document.getElementById("list");

// DAY29(forEach版　表示向き)    
//・処理しながら表示
//・中間データなし
//-------------------------------------------------------------

    // ul内の表示を一度リセットする（前の表示が残ると二重表示になるから）
    ul.innerHTML = "";
    //data 配列を一件ずつ取り出して処理する
    //dataの中身を１個ずつitemとして取り出す
    state.data.forEach(item =>{
         // li要素を新しく作成
        const li = document.createElement("li");
        // 取得したデータの title を表示
        li.textContent = item.title;
        // ulの中にliを追加する
        ul.appendChild(li);
    });
//----------------------------------------------------------


//DAY30（map版変換向き）変更点
//・一度「HTMLの配列」を作る
//・最後にまとめて表示
//👉 map は「新しい配列を作る」
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
    
    const items = state.data.map(item => {
        return `<li>${item.title}</li>`;
    });
    // ul内の表示を一度リセットする（前の表示が残ると二重表示になるから）
    ul.innerHTML = items.join("");
}
//-------------------------------------------------------------

// 🧠 比較するとこうなる
// 	DAY29	DAY30
// 配列処理	forEach	map
// DOM操作	1個ずつ	まとめて
// 難易度	やさしい	少し難しい
// 実務	よく使う	大量表示向き
// 🔥 今日の正しいゴール

// 「DAY30を完成させる」じゃない

// 「DAY29と何が違うか言える」

// たとえば👇

// DAY29は1件ずつliを作ってた
// DAY30は配列をHTMLに変換して一気に表示してる

//------------------------------------------------------------------

//
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
async function fetchPosts(){
    // ① ローディング開始（通信前）
    state.loading = true;
    //② エラー初期化 前回のエラーをリセット
    state.error = null;
    //③ ステータス表示更新(状態に応じて)
    renderStatus();

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
        renderList();
        
    } catch(err){
        //// エラーが発生した場合は、エラーメッセージをstateに保存
        state.error = err.message;
    } finally {
        // 成功・失敗に関わらず、ローディング終了
        state.loading = false ;
        // 最終的な状態に応じてステータス表示を更新
        renderStatus();
    }
    //なぜ finally に loading = false がある？

    // 👉 成功でも失敗でも必ずローディングを終わらせたいから

    // try：成功ルート

    // catch：失敗ルート

    // finally：どっちでも通る

    // ＝ UIが壊れない

}

fetchPosts();

// 🧪 DAY29チェックリスト

// 動いたら必ず自分で確認👇

//  通信中に Loading が出る

//  API URLを壊すとエラーが表示される

//  エラー後に Loading が消える

//  成功時だけリストが出る

//  再読み込みしても破綻しない

// 🚨 よくある詰まりポイント

// renderList() を loading 中に呼ぶ

// state が複数箇所でバラバラ

// try の中で UI を直接いじる
//UI とは？
//人間とアプリがやり取りする“見た目と操作部分”

// 👉 非同期は「状態 → 描画」だけ覚えればOK

// 次のアクション

// 上の内容で DAY29ミニアプリを作る

// 分からない／詰まったら

// エラー内容

// 自分のコード（貼れる範囲）
// をそのまま投げてOK

// 終わったら
// 👉 「DAY29できた」＋詰まった点 or 感想 を送って。

// ここから一気に実務ゾーン入るぞ 🔥


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

