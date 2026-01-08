// Day6：ループ（for / while）

// 回数が決まってる作業を、機械的に繰り返す人」

// 0〜2まで、合計3回やれ」

// 数字ベース

// 回数管理が必要なとき

// 昔からある基本ループ

// Step1｜for文 基本（20分）

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 何が起きてる？

// i = 0（スタート）

// i < 5 → true の間続く

// 1回ごとに i++
//i++ってなにをしてるの？

//i = i + 1;　←i++と同じ意味

// 例👇

// let i = 0;
// i++; // 1
// i++; // 2


// 📌 1回ループするごとに1ずつ増やすカウンター


// 出力👇

// 0
// 1
// 2
// 3
// 4

// Step2｜配列 × for（超重要）（30分）

const fruits = ["りんご","ばなな","みかん"];

    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }

// 📌 配列処理＝案件の8割


//Step3｜for...of（読みやすい）

const colors = ["赤","青","黄"] ;
    for(const color of colors) {
        console.log(color);
    }

//👉 インデックス不要ならこっちが楽

//Step4｜while文（条件型ループ）（20分）

let count = 0 ;

while (count < 3) {
    console.log(count);
    count++;
}

//📌 条件が満たされるまで繰り返す

//Step5｜break / continue（重要）（20分)

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; //3をスキップ
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if(i === 4) {
        break; //4で終了
    }
    console.log(i);
}

// ✏ ミニ課題
// 課題①

const numbers = [10,20,30,40];
    for(let i = 0 ; i <　numbers.length; i++){
        console.log(numbers[i]);
    }
    
//👉 全部console.log

//課題②👉 「〇〇は△△歳です」を出力
const users = [
    {name: "太郎",age: 20 },
    {name: "花子",age: 25 },
];

for(let i = 0 ; i <　users.length; i++){
    console.log(`${users[i].name}は${users[i].age}です。`);
    
}

// 課題③（重要）👉 70以上だけ表示
// （ヒント：if + for）

const scores = [45,78,92,60];
    
    for(let i = 0 ; i<　scores.length; i++){

        if (scores[i] >= 70){
            console.log(scores[i]);
        }
        
    }