// DAY16｜イベント（addEventListener）
// 🎯 今日のゴール

// イベントとは何かを言葉で説明できる

// クリックで処理を実行できる

// なぜこの書き方になるか理解する

// Step1｜イベントとは？（文章で理解）（10分）
// イベントとは？

// 👉 ユーザーの行動をきっかけに処理を実行する仕組み

// 例：

// クリック

// 入力

// 送信

// 📌 JSは
// 「何か起きたら、これをして」と予約しているだけ

// Step2｜基本形（最重要）（20分）
// HTML
// <button id="btn">クリック</button>
// <p id="result">未実行</p>

// JS
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  result.textContent = "クリックされました";
});

// 文章で説明すると👇

// btn：操作される対象

// "click"：きっかけ（イベント）

// function(){}：起きた後にやる処理

// 👉 「クリックされたら、この関数を実行してね」

// Step3｜なぜこの形？（重要）（15分）

// btn.addEventListener("click", function(){
//     処理
// })

// 理由

// 今は実行しない

// あとで実行する処理を渡している

// ❌ ダメな例

// btn.addEventListener("click", sayHello());


// 👉 すぐ実行されてしまう

// Step4｜アロー関数版（20分）

btn.addEventListener("click",()=>{
    result.textContent="クリック!";
});

// ✔ 実務ではこっちが多い

// Step5｜イベントの実務イメージ（文章）（10分）

// ボタン → 送信

// 入力 → チェック

// スクロール → 表示

// 👉 全部イベント

// ✏ ミニ課題（必須）
// HTML
{/* <button id="changeBtn">変更</button>
<h1 id="title">初期表示</h1>
やること
ボタンを押したら

h1の文字を変える

解答例（見ずに書く) */}

const changeBtn = document.getElementById("changeBtn");
const title = document.getElementById("title");

changeBtn.addEventListener("click", () => {
    title.textContent="変更しました。";
});


// 🧠 DAY16 セルフチェック（文章で）

// 見ずに答えて👇

// 1️⃣ イベントとは？
// 👉 ユーザー操作をきっかけに処理を実行する仕組み

// 2️⃣ なぜ function / () => を渡す？
// 👉 後で実行するため

// 3️⃣ addEventListenerの3要素は？
// 👉 対象 / イベント名 / 処理

// 4️⃣ click以外に何がある？
// 👉 input / submit / change など

// 📌 今日の到達点

// JSが「待つ」理由が分かった

// DOM × イベント がつながった

// 案件の入口に立った


