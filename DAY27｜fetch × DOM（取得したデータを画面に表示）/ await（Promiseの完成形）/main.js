// DAY27｜fetch × DOM（取得したデータを画面に表示）

// 今日は
// 👉「非同期でデータ取得 → DOMで表示」
// を1本につなげる日。

// 🧭 DAY27 ゴール

// fetch の結果を 画面に表示できる

// async / await の流れが頭で追える

// 「あ、実務っぽい」と感じる

// Step1｜全体の流れを先に理解（超重要）
// ① ボタンを押す
// ② fetchでデータ取得（非同期）
// ③ awaitで待つ
// ④ データを取り出す
// ⑤ DOMに表示


// 👉 今日は この順番を壊さずに理解できれば勝ち

// Step2｜HTML（想定）
// <button id="loadBtn">データ取得</button>
// <p id="result">まだデータはありません</p>

// Step3｜JS（まずは読むだけ）

const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", async() =>{
    result.textContent = "読み込み中...";

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();

    result.textContent = data.title;
});

// Step4｜1行ずつ超かみ砕き
// 🔹 async () => { }

// 👉 この中で await が使える合図

// 🔹 result.textContent = "読み込み中..."

// 👉 fetch が終わる前に表示
// 👉 ユーザー体験向上（実務超重要）

// 🔹 await fetch(...)

// 👉 ネット通信が終わるまで待つ
// 👉 待ってる間も画面は固まらない

// 🔹 await response.json()

// 👉 取得したデータを 使える形に変換

// 🔹 result.textContent = data.title

// 👉 取ってきたデータを画面に表示

// 🧠 今日の核心（これだけ覚えればOK）

const response = await fetch(URL);
const data = await response.json();

// 🧪 セルフチェック（文章で答えて）

// 見ずに答えて👇

// 1️⃣ なぜ btn.addEventListener の中で async を使う？
//非同期にするため、asyncを記述してawaitを使えるようにするため
// 2️⃣ 「読み込み中…」を先に表示する理由は？
//ユーザーが読み込み中と表示されることで理解度が増すから
// 3️⃣ await が2回ある理由は？
//非同期にさせてその間ユーザが快適にWEBページを見てもらうため
// 4️⃣ fetch → json → DOM の流れを文章で説明して
//fetchで外部からデータを取得する→取得してきたデータをjsonで使える形に変換→DOMでHTMLをJSから変更することができる

// ⏱ 目安時間

// 理解：20〜30分

// セルフチェック：10分

// 👉 今日は書けなくてもOK
// 👉 流れが言葉で説明できたら合格

// 🧪 セルフチェック フィードバック
// 1️⃣ なぜ btn.addEventListener の中で async を使う？

// あなたの回答

// 非同期にするため、asyncを記述してawaitを使えるようにするため

// 判定：△（半分正解）

// 修正した完成形👇

// ボタンを押した後の処理の中で
// fetch などの非同期処理を 順番通りに書くため、
// そのために async を付けて await を使えるようにする。

// 👉 「順番通りに書くため」が抜けてた
// （ここが実務で超重要）

// 2️⃣ 「読み込み中…」を先に表示する理由は？

// あなたの回答

// ユーザーが読み込み中と表示されることで理解度が増すから

// 判定：○（ほぼ正解）

// より実務っぽく言うと👇

// 非同期処理は時間がかかるため、
// 何も表示されないとユーザーが止まったと勘違いするので、
// 「今処理中だ」と伝えるため。

// 👉 UX（ユーザー体験）意識できてて◎

// 3️⃣ await が2回ある理由は？

// あなたの回答

// 非同期にさせてその間ユーザが快適にWEBページを見てもらうため

// 判定：×（ここが一番のズレ）

// 正解👇

// fetch と response.json() が
// それぞれ別の非同期処理だから。

// 超重要ポイント

// await は
// 👉「快適にするため」ではなく
// 👉「その処理が終わるのを待つため」

// 覚え方

// await の数 ＝ 待たないと次に進めない処理の数

// 4️⃣ fetch → json → DOM の流れ

// あなたの回答

// fetchで外部からデータを取得する→取得してきたデータをjsonで使える形に変換→DOMでHTMLをJSから変更することができる

// 判定：◎（正解）

// 文章も自然だし、流れも完璧。

const btn = document.getElementById("loadBtn");
const result = document.getElementById("result");

btn.addEventListener("click", async() =>{
    result.textContent ="読み込み中";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        
        result.textContent = data.name;
    } catch(error) {
        result.textContent= "エラーが発生しました";
    }

});


