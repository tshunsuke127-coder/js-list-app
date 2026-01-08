// 🟡 DAY12｜if + 関数

// 🎯 今日のゴール

// if を関数の中で使える

// 「判定＋結果」を return できる

// 実務でよくあるロジックを自力で書ける

// Step1｜一番基本の形（20分）

const checkAge = age => {
    if(age >= 18) {
        return "大人";
    } else{
        return "未成年";
    }
};

console.log(checkAge(20));
console.log(checkAge(15));

//📌 関数 = 判断機械


//Step2｜条件を分ける（30分）
const checkScore = score =>{
    if(score >= 90) {
        return "A";
    } else if(score >= 70) {
        return "B";
    }else{
        return"C";
    }
};

console.log(checkScore(95));
console.log(checkScore(75));
console.log(checkScore(60));

//📌 上から順に判定される


//Step3｜boolean を返す（超重要）（20分）

const isEven = num => {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
};

console.log(isEven(6));
console.log(isEven(7));

//省略版（実務）
//const isEven = num => num % 2 === 0;

//👉 条件式そのものが true / false

//Step4｜実務でよくある形（30分）
//複数情報を返す

const judgeScore = score => {
    if(score >= 70) {
        return {
            result:"合格",
            score:score
        };
    }else {
        return{
            result:"不合格",
            score:score
        };
    }
};

console.log(judgeScore(80));
console.log(judgeScore(60));

//📌 APIレスポンスそのもの


//Step5｜ミニ演習（必須）（40分）
//課題① 年齢判定

//20以上 →成人
//それ以外　→　未成年

const checkAge2 = age => {
    if( age >= 20 ){
        return "成人";
    }else {
        return"未成年";
    }
};

console.log(checkAge2(25));
console.log(checkAge2(18));


//課題② 点数判定
// 90以上 → S
// 80以上 → A
// 70以上 → B
// それ以外 → C

const checkScore3= score =>{
    if( score >= 90){
        return {rank:"S",message: "素晴らしい"};
    }else if(score >= 80){
        return {rank:"A",message: "よくできました"};
    }else if(score >= 70){
        return {rank:"B",message: "合格です"};
    } else {
        return {rank:"C",message: "再挑戦"};
    }
};

console.log(checkScore3(95));
console.log(checkScore3(85));


//課題③（重要）結果＋メッセージ

// 90以上 → S
// 80以上 → A
// 70以上 → B
// それ以外 → C

const judgeScore2 = score => {
    if( score >= 70 ){
        return{
            result:"合格",
            message:"おめでとう"
        };
    }else{
        return{
            result:"不合格",
            message:"再挑戦"
        };
    }
};

console.log(judgeScore2(80));
console.log(judgeScore2(60));

