// DAY11｜スコープ（超重要）
// 🎯 今日のゴール

// なぜ「値が取れない」のか分かる

// グローバル / ローカルの違いが説明できる

// バグの原因を自分で見抜ける

//function は何？
//「処理に名前をつけて、何度も使えるようにしたもの」
// 👉
// 「この一連の処理を renderStatus って呼ぶ」

// まとめ役

// 再利用

// 読みやすさUP

// 実務での本当の役割

// ❌ 処理を動かすため
// ⭕️ コードを理解しやすくするため

// Step1｜スコープとは？（10分）

// 👉 変数が「どこから見えるか」の範囲


const a = 10 ;

function test() {
    const b = 20;
    console.log(a)//OK
    console.log(b);//OK
}

test();

console.log(a);//OK
// console.log(b); ❌ エラー

//📌 b は 関数の中だけ




//Step2｜グローバル変数（20分）
const count = 0;

function increment() {
    console.log(count);
}

increment();

//📌 関数の外 → どこからでも見える

//⚠️ 実務では使いすぎ注意



//Step3｜ローカル変数（最重要）（30分）

function sample() {
    const message = "こんにちは";
    console.log(message); //ok
}

sample();
//console.log(message)//❌ エラー

//📌 関数内で作った変数は外に出られない



//Step4｜同じ名前でも別物（重要）（20分）

const value = 10 ; //2番目に表示

function test() {
    const value = 20 ;//1番目に表示
    console.log(value);
}

test();
console.log(value);

//👉 出力👇
//1番目に表示　20
//2番目に表示　10
//📌 内側が優先される



//Step5｜よくある実務エラー（30分）
//❌ パターン

function calc() {
    const result = 100;
}

//console.log(result); //❌エラー


//⭕ 正解

function calc() {
    return 100;
}

const result = calc();
console.log(result);

//📌 外で使いたいなら return

//✏ ミニ課題（必須）
//課題①

const x = 10;

function test() {
    const y = 20 ;
    //console.log(x); //なぜかここもエラーになる
    console.log(y);
}

test();
console.log(x);
//console.log(y);//どうなる？ エラー✖

//👉 y はどこでエラー？

//課題➁（超重要）
function getScore() {
    const score = 80 ;
}

const result2 = getScore();
console.log(result2);
//👉 なぜ undefined？
// 関数の中で完結させないといけないから？かな 
//理由（正確な答え）

//❌「関数の中で完結させないといけないから」
//⭕ return がないから

function getScore() {
    const score = 80;
    return score;
}

const result3 = getScore();
console.log(result3); // 80

//📌 関数は return しないと値を外に出せない
//📌 return がない関数は 自動で undefined を返す


//課題③

let count2 = 0;

function add() {
    count2++;
}

add();
add();
console.log(count2);

//👉 出力は？❌
//0
//1

// 正しい出力⭕
// 2

// なぜ？

// 初期値：0

// add() 1回目 → 1

// add() 2回目 → 2

// 👉 コメントの

// //0
// //1


// は 途中経過の勘違い