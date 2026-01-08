// DAY15｜DOM取得（getElementById / querySelector）
// 🎯 今日のゴール

// DOMって何かを言葉で説明できる

// HTML要素をJSで取得できる

// どっちを使うべきか判断できる

// Step1｜DOMとは何か？（文章で理解）（10分）
// DOMとは？

// 👉 HTMLをJavaScriptから操作できるようにした仕組み

// イメージ👇

// HTML：設計図

// DOM：JSが触れる「実体」


//<p id= "text">こんにちは</p>

// JSから見ると👇
// 「id="text" を持つ要素オブジェクト」

// Step2｜getElementById（最優先で覚える）（20分）


// HTML
//<p id="message">未表示</p>

//JS
const message = document.getElementById("message");
console.log(message);

// ポイント（文章で）

// idは1ページに1つ

// 一番シンプルで速い

// 迷ったらこれ


//Step3｜textContentを書き換える（20分）

message.textContent = "表示されました。"

// 👉 これで
// JS → DOM → 画面が変わる

// 📌 実務で死ぬほど使う



// Step4｜querySelector（柔軟だが少し難しい）（30分）

// HTML
//<p class="info">情報</p>

const info = document.querySelector(".info");
info.textContent = "変更完了";


// 書き方ルール
// "#id名"
// ".class名"
// "タグ名"

// 文章での違い

// getElementById：id専用

// querySelector：CSSセレクタ全部OK



// Step5｜どっちを使う？（重要）（10分）
// 状況

// 状況	使うもの
// idがある	getElementById
// class / 複雑	querySelector
// 迷った	getElementById

// 👉 実務は8割 getElementById

// ✏ ミニ課題（必須）
// HTML

//<h1 id="title">初期表示</h1>
//<p class="desc">説明</p>

const title = document.getElementById("title");
console.log(title)

title.textContent = "変更後の表示";

const desc = document.querySelector(".desc");
console.log(desc);

desc.textContent = "説明が表示されました。";


// 🧠 DAY15 セルフチェック（文章で）

// 見ずに答えて👇

// 1️⃣ DOMとは何？
// 👉 JSがHTMLを操作するための仕組み

// 2️⃣ getElementByIdは何を取る？
// 👉 idを持つ要素1つ

// 3️⃣ querySelectorの強みは？
// 👉 CSSセレクタが使える

// 4️⃣ textContentは何をする？
// 👉 要素の中身の文字を書き換える