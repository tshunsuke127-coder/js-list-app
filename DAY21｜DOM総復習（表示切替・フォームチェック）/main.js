// DAY21：DOM総復習（表示切替・フォームチェック）

// 🎯 ゴール

// DOM操作を一通りつなげて書ける

// 「何を取って、何を見て、何を変えるか」を説明できる

// Step1｜表示切替（状態管理つき）【20分】
// 要件

// ボタンを押すたびに

// 表示 ↔ 非表示 を切り替える

// 状態は変数で管理

// HTML（想定）

// HTML（想定）
// <button id="toggleBtn">切替</button>
// <p id="message">表示中</p>

const btn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

let isOn = true;

btn.addEventListener("click",() =>{
  if(isOn){
    message.style.display = "none";
  }else {
    message.style.display = "block";
  }

  isOn = !isOn ;

});


// Step2｜classListで切替（実務寄り）【20分】
// HTML
// <button id="btn2">切替</button>
// <p id="text2" class="active2">テキスト</p>

//CSS
const btn2 = document.getElementById("btn2");
const text2 = document.getElementById("text2");

btn2.addEventListener("click",() => {
  
    text2.classList.toggle("hidden");
  
});

// 🧠 ポイント

// toggle は if + add/remove の省略形
//👉 toggle 自体が「状態を見る＋切替」をやってくれる

// 実務ではこっちが多い



// Step3｜フォーム入力チェック【30分】
// HTML

{/* <form id="form">
  <input id="name" type="text">
  <button>送信</button>
  <p id="error"></p>
</form>
JS */}

const form = document.getElementById("form");
const nameInput =document.getElementById("name");
const error = document.getElementById("error");



form.addEventListener("submit", (e) =>{ 
  e.preventDefault();


  if(nameInput.value === ""){ 
    error.textContent = "名前を入力してください";
  }else {
    error.textContent = "送信しました";
  }

});

//submit,(e)の意味は？

// submit
// 👉 フォームが送信される瞬間のイベント

// (e)
// 👉 イベントオブジェクト

// 何が起きたかの情報が入ってる

  //e.preventDefault()これは何を意味してる？
  //👉 ブラウザのデフォルト動作を止める

  // フォームは本来：

  // ページを再読み込み

  // サーバーに送信

  // ⬇
  // それを JSで制御したいから止める

  // 👉 「JSでチェックしたいから一旦止める」

  //nameInput.valueは何をしてる？
//   👉 input に入力された中身を取得

// 空文字 "" → 何も入力されてない

// "山田" → 入力あり


// Step4｜総まとめ（最重要）【10分】
// DOM操作の型（これ覚えればOK）
// ① 要素を取る
// ② イベントを取る
// ③ 状態 or 値を見る
// ④ DOMを書き換える

// 🧪 セルフチェック（文章で答えて）

// 1️⃣ なぜ状態を変数で持つ？
//表示状態と非表示状態で切替したいので変数にする
// 2️⃣ classList.toggle のメリットは？
//addとremoveを書かなくて良くなりコードの省略ができる
// 3️⃣ submit で preventDefault が必要な理由は？
//フォーム送信時のページ再読み込みを防ぎ、
//JavaScriptで入力チェックや表示処理を行うため

// （答えられたら完全クリア）