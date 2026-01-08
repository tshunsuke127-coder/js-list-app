// DAY20 全体構成（2時間想定）
// ① 導入（10分）

// やること

// 「状態とは何か」を言葉で理解

// 理解するだけでOK

// 状態 = 今どうなっているか
// （開いてる？閉じてる？ON？OFF？）


// ❌ 表示 = 状態 ではない
// ⭕ 状態 → 表示が決まる

// ② 最小コードを書く（30分）

// これだけ書く

// <button id="btn">切り替え</button>
// <p id="text">OFF</p>

const btn = document.getElementById("btn");
const text = document.getElementById("text");

let isOn = false;

btn.addEventListener("click", () => {
  if (isOn) {
    text.textContent = "OFF";
  } else {
    text.textContent = "ON";
  }

  isOn = !isOn;
});


// 💡 ここで止まってOK

// 完璧に理解しようとしない

// 「あ、変数が記憶してるな」だけ感じればOK

// ③ 超重要：文章で説明する（20分）

// コードを見ながら、これを書く（口でもOK）

// isOn は今の状態を覚えるための変数
// クリックされたら
// 今の状態を if で判定して
// 表示を変えて
// 最後に状態を反転させている

// 👉 言えたら勝ち

// ④ ダメな例を見る（10分）

// 比較するだけ


// // ❌ 状態管理してない例
// btn.addEventListener("click", () => {
//   if (text.textContent === "ON") {
//     text.textContent = "OFF";
//   } else {
//     text.textContent = "ON";
//   }
// });


// なぜダメ？

// 表示が変わったら壊れる

// 文言変更に弱い

// 実務で事故る

// 👉 「怖いな」でOK

// ⑤ ミニ演習（30分）

// 同じ構造で1個作る

// 課題例

// 「表示 / 非表示」

// 「ログイン中 / ログアウト」

let isVisible = true;

btn.addEventListener("click", () => {
  if(isVisible){
    text.style.display= "none";
  }else{
    text.style.ddisplay= "block";
  }

  isVisible = !isVisible

});

// 👉 書けなくても写してOK
// 👉 構造が同じなのを感じるのが目的

// ⑥ 最後に文章チェック（20分）

// 見ずに答える

// 状態って何？
//現在、表示されてるかされていないかを判断するもの
//状態→表示されているか判断する
// なぜ変数で持つ？
//表示したりしなかったりして変わるので変数にする

// if は何を判定してる？
//条件分岐でクリックした際にisVisibleが表示されているかいないか判定

// DOM は何のため？
//JSからHTMLを操作するためにHTMLからidを一つだけ取得できる

// これが言えたら DAY20クリア。

// ⑥ 文章チェック｜添削＆完成版
// ① 状態って何？

// あなたの答え

// 現在、表示されてるかされていないかを判断するもの

// ⬇ 少し整えるとこうなる👇

// 完成形

// 状態とは「今どういう状況か」を表す情報で、
// 表示されているか／いないか、ONかOFFかなどを表すもの。
// 状態をもとに表示が決まる。

// 💡 重要ポイント

// ❌ 表示そのもの

// ⭕ 表示を決める元データ

// → この理解ができてるのが 中級の証拠

// ② なぜ変数で持つ？

// あなたの答え

// 表示したりしなかったりして変わるので変数にする

// ⬇ 実務表現にすると👇

// 完成形

// 状態はユーザー操作によって変わるため、
// 前回の状態を覚えておく必要がある。
// そのため変数で管理する。

// 👉 「覚えておく」が言えたら満点。

// ③ if は何を判定してる？

// あなたの答え

// クリックした際にisVisibleが表示されているかいないか判定

// ⬇ ほぼ完璧。こう言うとさらに◎👇

// 完成形

// if文は、今の状態（isVisibleがtrueかfalseか）を判定して、
// 次にどの処理をするかを分けている。

// ④ DOM は何のため？

// あなたの答え

// JSからHTMLを操作するためにHTMLからidを一つだけ取得できる

// ⬇ 概念を少し広げよう👇

// 完成形

// DOMは、JavaScriptからHTMLの要素を取得・変更するための仕組み。
// 表示内容やスタイルを動的に変えるために使う。

// ※ getElementById は「DOM操作の1つの方法」

// 状態って何？
// 今の状態を把握して次に表示が変わる　状態→表示

// なぜ変数？
// 現在の状態を把握してクリックをしたら内容を変えたい為、変数にしている

// ifは何を見ている？
// 現状の状態はどうなっているかを確認している

// DOMは何のため？
// JSからHTMLを動かすためにidを一つだけ取得することができる

const btn2 = document.getElementById(btn);
const text2 = document.getElementById(text);

let inOpen = false

btn.addEventListener("click", () => {
  if(isOpen){
    text.textContent = "表示されていません"
  }else {
    text.textContent = "表示されています"
  }
isOpen = !isOpen;

});

// 思考テンプレ（これを覚えて）
// 状態を変えたい？
// → 変数を作る

// クリックした？
// → addEventListener

// 今どうなってる？
// → if (状態)

// 画面変えたい？
// → DOM操作

// 最後に？
// → 状態を反転


const btn = document.getElementById("btn");
const text = document.getElementById("text");

let isOpen = false

btn.addEventListener("clisck",() => {
  if(isOpen){
    text.textContent = "閉じています"
  }else {
    text.textContent = "開きました"
  }

  isOpen = !isOpen;

});

