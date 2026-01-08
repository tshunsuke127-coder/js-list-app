// DAY19｜表示状態を文字で伝える（中級）

// 🎯 今日のゴール（文章で言える？）

// 今「表示中」か「非表示中」かを判定できる

// 状態に応じて 別のテキストを表示 できる

// 「状態（state）」という考え方を理解する

// Step1｜HTML（最低限)

{/* <button id="toggleBtn">切り替え</button>
<p id="text" class="hidden">表示される文章</p>
<p id="status">現在：非表示</p>
css
コードをコピーする
.hidden {
  display: none;
}
Step2｜コードを書く前に考える 🧠 */}

// 入力は？
// → ボタンのクリック

// 出力は？
// →

// 文章：表示 / 非表示

// 状態テキスト：「表示中」「非表示中」

// 中で何が必要？
// →

// hidden が付いているかの判定

// 表示の切り替え

// status の文字変更

// Step3｜JS（DAY18＋α）

const toggleBtn = document.getElementById("toggleBtn");
const text = document.getElementById("text");
const status = document.getElementById("status");

toggleBtn.addEventListener("click",() => {
  if(text.classList.contains("hidden")){
    text.classList.remove("hidden");
    status.textContent = "現在：表示中";
  } else {
    text.classList.add("hidden");
    status.textContent ="非表示";
  }
});

// 文章で説明してみよう（必須）

// 👉
// ボタンがクリックされたら、text に hidden クラスがあるかを調べる。
// hidden があれば削除して表示し、「表示中」と表示する。
// なければ hidden を追加して非表示にし、「非表示」と表示する。

// これがスラスラ言えたら合格 ✅

// Step4｜ここが超重要（中級の考え方）
// 👀 今日やってることの正体

// text → 見た目

// status → 状態の説明

// hidden → 状態を表すフラグ

// 👉 「画面 = 状態の結果」

// Step5｜セルフチェック（文章）

// 1️⃣ なぜ status を更新する必要がある？
// 👉 ユーザーに今の状態を分かりやすく伝えるため

// 2️⃣ hidden は何の役割？
// 👉 表示状態を管理するための目印

// 3️⃣ if の条件は何を見てる？
// 👉 表示中か非表示中か
