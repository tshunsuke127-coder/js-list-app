// 配列（Array）基礎


//配列とは？ 👉データの箱を並べたもの
const fruits = ["りんご","バナナ","みかん"];

console.log(fruits);
console.log(fruits[0]);//りんご
console.log(fruits[1]);//ばなな
console.log(fruits[2])//みかん

//番号は０から始まる


//Step2｜配列の操作
const numbers = [10,20,30];

numbers.push(40); //追加
numbers.pop(); //最後を削除

console.log(numbers);

//push　追加
//pop　最後を削除

//Step3｜for文 × 配列

const colors = ["赤","青","黄"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//legth =要素の数
//↓どういうこと？
//0だと赤、青、黄色
//1だと青、黄色
//2だと黄色
//3だとなし

// i = 0 → colors[0] → 赤
// i = 1 → colors[1] → 青
// i = 2 → colors[2] → 黄
// i = 3 → ループ終了（lengthは3）

//Step4｜オブジェクト

//オブジェクトとは？👉 名前付きのデータ

const user ={
    name:"Shun",
    age:28,
    job:"エンジニア"
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.job);

//Step5｜配列＋オブジェクト

const users = [
    { name:"太郎",age:20},
    { name:"花子",age:25},
    { name:"次郎",age:30}
];

for(let i = 0 ; i < users.length; i++){
    console.log(`${users[i].name}は${users[i].age}歳です`);
}

// ✏ ミニ課題（超重要）
// 課題① 配列

const foods =["カレー","ラーメン","寿司"];

console.log(foods);

//課題② オブジェクト
const myProfile = {
    name:"あなたの名前",
    age:28,
    hobby:"趣味"
};

console.log(myProfile);
console.log(myProfile.name);
console.log(myProfile.hobby);

//課題③ 応用（余裕あれば)

const people = [
    {name: "A", age: 20 },
    {name: "B", age: 30 },
];

for(let i = 0 ; i < people.length; i++){
    console.log(`${people[i].name}は${people[i].age}歳です`);
}
