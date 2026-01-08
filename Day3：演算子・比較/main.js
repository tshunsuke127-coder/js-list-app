// Day3：演算子・比較

const a = 10;
const b = 3;

console.log(a + b); //足し算
console.log(a - b); //引き算
console.log(a * b); //掛け算
console.log(a / b); //割り算
console.log(a % b); //余り

// 📌 % は案件でも意外と使う（偶数判定など）
//余りはどういう計算方法？
// a % b

// これは
// 👉 a ÷ b をしたときの「余り」

// 例👇

// 10 % 3

// 10 ÷ 3 = 3 あまり 1
// → 結果は 1

// 偶数判定の仕組み
// 6 % 2 // 0 → 偶数
// 7 % 2 // 1 → 奇数


// Step2｜代入演算子

let count = 0;

count += 1;
count -= 1;
count *= 2;

console.log(count);


// Step3｜比較演算子

console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 <= 9); //false

//どういう根拠でtrueとfalseがconsoleに表示されてる？
// 例
// console.log(10 > 5);


// これは内部で👇こう評価される

// 「10は5より大きいか？」
// → YES → true

// console.log(10 < 5);


// 「10は5より小さいか？」
// → NO → false

// 👉 比較演算子は“質問”だと思うと理解しやすい



// Step4｜等価・厳密等価（超重要）

console.log(5 == "5"); //true
console.log(5 === "5"); //false

// 📌 原則：=== だけ使う
// 質問③ == と === の違い
// console.log(5 == "5");   // true

// なぜ true？

// JSが勝手にこうする👇

// "5" → 5 に変換してから比較


// 👉 型を無視して比較するのが ==

// console.log(5 === "5"); // false

// なぜ false？
// 5      → 数値
// "5"    → 文字列


// 型が違う → 即 false

// 👉 値も型も同じじゃないと true にならない

// 「原則 === だけ使う」とは？
// 理由
// 0 == false     // true（意味不明）
// "" == false    // true（事故る）
// null == undefined // true（地雷）


// 👉 バグの原因になる

// だから
// ✔ プロは === だけ使う
// ✔ == は使わない（封印）

// Step5｜論理演算子（30分）
const age = 20;
const isMember = true;

console.log(age >= 18 && isMember); //両方trueじゃないとtrueにならない
// age >= 18 && isMember
// これは👇こう考える

// age >= 18 → true

// isMember → true

// text
// コードをコピーする
// true && true → true

console.log(age >= 18 || isMember); //どちらかtrueであればtrue表示

// age >= 18 || isMember
// どちらか1つでもtrueならOK
// 👉 保険

console.log(!isMember);  //否定 true→否定でfalse false→否定でtrue

// !isMember
// true → false
// false → true

// 👉 反転スイッチ


// ✏ ミニ課題
// 課題①10より大きいか判定
const x = 15;

console.log( x > 10);

//課題②70以上なら true
const score = 80;
console.log(score > 70);

//課題③（重要）偶数か判定（ヒント：%）
const num = 6;

console.log(num % 2 ===0);

//わからない