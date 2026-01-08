// DAY17｜class操作で表示を切り替える（超重要）
// 🎯 今日のゴール（文章で）

// classList が何をしてるか説明できる

// 「表示／非表示」を自分で切り替えられる

// JSで画面を操作してる実感を持つ

// Step1｜HTMLを確認（見るだけ）

// Step2｜考える（コード書く前）

// 入力は？
// → ボタンクリック

// 出力は？
// → 文字が 表示 / 非表示 になる

// 中で何する？
// → class を つける / 外す

// Step3｜最小構成で書く

const btn = document.getElementById("toggleBtn");
const text = document.getElementById("text")

btn.addEventListener("click",() => {
  text.classList.toggle("hidden");
});

// 🧠 文章で説明できる？

// 👉 ボタンがクリックされたら、text に付いている hidden クラスを切り替える

// Step4｜セルフチェック（文章）

// 1️⃣ なぜ classList を使う？
// 👉 CSSの見た目をJSから操作するため

// 2️⃣ toggle は何をする？
// 👉 あれば消す、なければ付ける

// 3️⃣ if を使わずに書ける理由は？
// 👉 toggle が判定を内部でやってくれるから

// 🎯 今日の位置づけ

// DAY17は
// 🟢 「暗記」じゃなく「感覚を作る日」

// だから

// 関数うろ覚え → OK

// 書きながら理解 → 正解

// 何回も戻る → むしろ推奨