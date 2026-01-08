// Day9：アロー関数（() => {}）
// 🎯 今日のゴール

// function を アロー関数に書き換えられる

// return の省略パターンが分かる

// DAY8の関数を全部アローで書ける

// Step1｜アロー関数とは？（20分）
// 通常の関数（DAY8）

// function add(a,b){
//     return a + b ;
// }

//アロー関数
// const add = (a, b) => {
//   return a + b;
// };

// function add(a,b) {
//     return a+b ;
// }

// const add = (a,b) => {
//     return a + b ;
// };

// 📌 ポイント

// function が消える

// => が出てくる

// 変数に代入する形



// Step2｜超重要：return省略（30分）


// ① 処理が1行なら return 省略できる

const add = (a,b) => a+b ;
console.log(add(3,5)); //8



// 📌 {} を消すと returnも自動


//② 引数が1つなら () も省略OK

const double = num => num * 2;

console.log(double(5));//10



//❌ よくあるミス
// const add = (a, b) => {
//   a + b;   // return してない
// };

//👉 undefinedになる


//Step3｜DAY8の関数を書き換え（40分）
//① 挨拶関数
const sayHello = () => {
    console.log("こんにちは");
};

sayHello();



//② 合計
const add2 = (a,b) => a + b ;

console.log(add2(3,5));

//③ 2倍
const double2 = num=> num*2;

console.log(double2(3));

//④ 大人判定

const isAdult = age => age >= 18;

console.log(isAdult(20)); //true
console.log(isAdult(15)); //false

//Step4｜条件付き return（重要）（20分）

const checkScore = score => {
    if(score >= 70) {
        return"合格";
    } else{
        return"不合格";
    }
};

console.log(checkScore(75));
console.log(checkScore(60));

//📌 三項演算子版（中級者っぽい）↑を省略したもの

const checkScore2 = score => score >= 70 ? "合格" : "不合格";

//✏ ミニ課題（必須）
//課題①：平方（2乗）

const square = num => num * num ;
console.log(square(3)); //9

// 課題②：合計と平均

const calc = (a,b) => {
    const sum = a + b ;
    const avg = sum / 2 ;
    return {sum,avg};
};

console.log(calc(10,20));

//課題③：偶数判定（超重要）

const isEven = num => num % 2 === 0 ;

console.log(isEven(4)); //true
console.log(isEven(5)); //false


//今日やるべき「仕上げ」10分
//これを何も見ずに書けたらDAY9完全クリア👇
const calcPrice = (price,tax) => price * tax ;
const isAdult = age => age>= 18 ;
const judge = judge => judge >= 70 ? "合格":"不合格"; 