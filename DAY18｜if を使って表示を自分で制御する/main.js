// DAY18｜if を使って表示を自分で制御する
// 🎯 今日のゴール（文章で説明できたらOK）

// class が「付いているかどうか」を自分で判定できる

// if を使って 表示 / 非表示 を切り替えられる

// 「JSで画面をコントロールしている」感覚を掴む

// Step1｜前提（HTML / CSS)

{/* <button id="toggleBtn">切り替え</button>
<p id="text" class="hidden">表示される文章</p>
css
コードをコピーする
.hidden {
  display: none;
} */}


// Step2｜コードを書く前に考える 🧠

// 入力は？
// → ボタンクリック

// 出力は？
// → 文章が 表示 / 非表示

// 中で何をする？
// →

// class が付いてるか調べる

// 付いてたら外す

// 付いてなかったら付ける

// Step3｜toggle を使わずに書く（重要）

const btn = document.getElementById("toggleBtn");
const text = document.getElementById("text");

btn.addEventListener("click",() =>{
  if(text.classList.contains("hidden")) {
    text.classList.remove("hidden");
  } else {
    text.classList.add("hidden");
  }
});



// 🧠 文章で説明してみよう（超重要）

// 👉 ボタンがクリックされたら、text に hidden クラスがあるかを調べる。
// あれば削除して表示し、なければ追加して非表示にする。

// これが言えたら合格 ✅

// Step4｜DAY17との違いを言語化
// DAY17（toggle）

// 短い

// 便利

// 中身はブラックボックス

// DAY18（if + contains）

// 少し長い

// 自分で制御できる

// 実務でデバッグしやすい

// 👉 中級以降は DAY18 の書き方が多い


// Step4｜DAY17との違いを言語化
// DAY17（toggle）

// 短い

// 便利

// 中身はブラックボックス

// DAY18（if + contains）

// 少し長い

// 自分で制御できる

// 実務でデバッグしやすい

// 👉 中級以降は DAY18 の書き方が多い