// 🎯 今日のゴール

// 引数を複数使える

// 戻り値を「1つ」「複数（オブジェクト）」で返せる

// 計算系ロジックを関数にできる

// Step1｜複数引数（20分）
// 基本形

const add = (a,b) => a+b ;

console.log(add(3,5));

//📌 引数は カンマ区切りでいくつでもOK

//実務っぽい例

const calcPrice = (price, taxRate) => price * taxRate;

console.log(calcPrice(1000,1.1));//1100

//👉 金額計算・APIレスポンス加工で超使う


//Step2｜returnは1つだけ（でも工夫できる）（20分）

//❌ ダメな例
// return sum;
// return avg; // ここは実行されない
// 👉 returnは1回しか実行されない

//Step3｜複数の値を返す方法（超重要）（30分）
//方法① オブジェクトで返す（最重要）

//Step3｜複数の値を返す方法（超重要）（30分）
//方法① オブジェクトで返す（最重要）

const calc = (a,b) => {
    const sum = a + b ;
    const avg = sum / 2;

    return {
        sum: sum,
        avg: avg
    };
};

console.log(calc(10,20));


//📌 実務はほぼこれ

//ES6省略版（覚えられたら）
//return { sum, avg };


//Step4｜配列で返す（補足）（10分）

const calc2 = (a,b ) =>{
    const sum = a+b;
    const avg = sum / 2 ;
    return[sum,avg];
};

const result =(calc2(10,20));

console.log(result[0]);
console.log(result[1]);

//📌 順番依存 → 実務では非推奨

//Step5｜実務パターン（30分）
//合格判定＋メッセージ

const judgeScore = score =>{
    if(score > 70){
        return{
            result:"合格",
            message:"よくできました"
        };
    }else {
        return{
            result:"不合格",
            message:"再挑戦しましょう"
        };
    }
};

console.log(judgeScore(80));

//👉 APIレスポンスの形そのまま

//✏ ミニ課題（必須）
//課題① 合計と平均

const calc3 = (a,b,c) => {
    const sum = a+b+c ;
    const avg = sum / 3 ;
    return {sum,avg};
};

console.log(calc3(10,20,30));

//課題② 商品合計金額

const calcTotal = (price, quantity, taxRate) => {
    const total = price * quantity * taxRate ;
    return total;
};

console.log(calcTotal(1000,2,1.1));


//課題③ 判定＋数値を返す（重要）

const checkAge = age => {
    return {
        age: age,
        isAdult: age >= 18
    };
};

console.log(checkAge(20));


// 🧠 今日の超重要まとめ（これ覚えたら勝ち）

// 引数は何個でもOK

// returnは1回

// 複数値はオブジェクトで返す

// 関数 = 実務ロジックの塊

//Q1
const add4 = (a,b) => a + b ;
console.log(add(4,6));

//Q2
const double = (num) => num * 2 ;
console.log(double(7));

//Q3
const test = () => {
    return [10,20];
}

//Q4
const calc4 = (a,b) => {
    const sum = a+b ;
    const avg = sum / 2 ;
    return{sum,avg};
};

console.log(calc(10,20))

//Q5




const calc5 = (a,b,c) => {
    const sum = a+b+c;
    const avg = sum/3 ;
    return{sum,avg};
};

console.log(calc5(10,20,30));

const calcTotal2 = (price,quantity,taxRate) => {
    return (price*quantity*taxRate)
};

console.log(calcTotal2(1000,1,1.1));