// Day8：関数宣言（function / return）


//Step1｜関数とは何か？（10分）
//👉 処理をひとまとめにしたもの


function sayHello(){
    console.log("こんにちは");
}

sayHello();//呼び出し

// 📌
// function = 設計図
// () = 実行スイッチ

// Step2｜returnの役割（超重要）（30分）


function add(a,b) {
    return a + b ;
}

const result = add(3,5);
console.log(result); //8


// returnとは？

// 関数の外に値を返す

// returnした瞬間に関数は終了

function test() {
  return 10;
  console.log("ここは実行されない");
}

console.log("ここは実行される");


// Step3｜引数を使う（30分）
// 👉 引数 = 関数に渡す材料

function double(num) {
    return num * 2;
}

console.log(double(5)); //num(5)*2=10が表示される


// Step4｜関数を使う理由（実務目線）
// ❌ 同じ処理を何度も書く
// ⭕ 関数にまとめて使い回す

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(20)); //true
console.log(isAdult(15)); //false


// ✏ ミニ課題
// 課題① 数値を渡して計算

function square(num) {
    //numを2乗して返す

    //✖これは2乗ではなく2倍になってる
    // return num * 2;
    //〇これは2乗はこうする
    return num * num;
}

console.log(square(2));


// 課題② 合計を返す関数

function sum(c,d) {
    return c + d ;
}

const result1 = sum(2,3);
console.log(result1);//2+3=5


// 課題③ 条件付きreturn（重要）

function checkScore(score) {
    
    //70以上なら合格
    //それ以外は不合格

    // ❌ 「合格 / 不合格」になっていない
    // return score > 70 ;

    //🔴正解
     if(score >= 70) {
        return"合格"
    }else{
        return"不合格"
    }
}

const result2 = checkScore(75);
console.log(result2);//合格



// 復習用

// レベルA（即答できるべき）
// Q1｜変数

let a = 10;
a = 20;

console.log(a);

const b =5

//aは20になっている　b=5を変更してもただbだけが変わるだけ


// Q2｜テンプレートリテラル
const name = "Shun";
const age = 28;

console.log(`${name}は${age}です`);

// 👉「Shunは28歳です」と出力

// Q3｜配列
const fruits = ["りんご", "ばなな", "みかん"];

console.log(fruits[1]);

// 👉「ばなな」を表示

// Q4｜オブジェクト
const user = {
  name: "太郎",
  age: 20
};

console.log(user.name);

// 👉 名前を表示

// Q5｜for文
    for(let i = 0 ; i < 4; i++){
        console.log(i);
    }

// 👉 0〜4 を順に表示

//Q6｜配列 × for

const scores = [20,22,25,27];

for(let i = 0 ; i< scores.length; i++){
    console.log(scores[i]);
}

// 👉 全部表示

//Q7｜条件分岐
const score = 60;
   if(score > 70){
    console.log("合格");
   } else {
    console.log("不合格");
   }


// 👉 70以上なら「合格」
// 👉 それ以外は「不合格」

//Q8｜偶数判定（超重要）
const num =6;
console.log(num % 2 === 0);

//Q10｜配列 + 条件
const scores3 = [100,78,92,60];
    for(let i = 0 ; i < scores3.length; i++){
        if(scores3[i] > 80){
            console.log(scores3[i]);
        }
    }


//Q11｜配列 + オブジェクト
const users = [
  { name: "太郎", age: 20 },
  { name: "花子", age: 25 }
];

for(let i = 0 ; i< users.length; i++){
    console.log(`${users[i].name}は${users[i].age}歳です`);
}


// 👉 「〇〇は△△歳です」

//Q12｜DOM操作（最重要）

const btn =document.getElementById("btn");
const result3 =document.getElementById("result3");

btn.addEventListener("click" , function (){
    result3.textContent = "クリックされました";
});


// 👉 ボタンを押したら「クリックされました」

// 👉 偶数なら true

// ✅ できてる

// Q2 テンプレートリテラル

// Q3 配列アクセス

// Q4 オブジェクト
// → 基礎の感覚はちゃんとある

// ⚠️ 勘違い or あやふや

// Q1 constの説明

// Q7 if文の書き方

// Q8 偶数判定

// Q11 配列＋オブジェクト

// ❌ 思い出せなかった

// Q5 for文

// Q6 配列×for

// Q10 配列＋条件

// Q12 DOM