// 🎯 今日のゴール

// async / await の型が書ける

// then / catch を使わずに非同期を書ける

// 「なぜ楽なのか」を言葉で説明できる

// Step1｜まず結論（5分）
// ❌ Promise（昨日まで）

// wait()
//     .then(result => {
//         console.log(result);

//     })
//     .catch(error => {
//         console.log(error);
//     });
    
// ⭕ async / await（今日）

// const result = await wait ();
// console.log(result);

//👉 見た目が同期処理みたいになる

// Step2｜最小構成を覚える（超重要）（15分）
// ✅ これが最小セット（暗記OK）

const wait = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("完了");
        },1000);
    });
};

const run = async() => {
    const result = await wait();
    console.log(result);
};

run();





// 📌 役割

// async → await を使える宣言

// await → Promiseの結果を待つ

// resolve の値 → await の結果になる

//Step3｜await は「resolve を待つ」（15分）

const test = async ()=>{
    const result = await Promise.resolve("OK");
    console.log(result);
};

test();

// 🧠 つまり👇

// await Promise
// ↓
// resolveの中身を受け取る

//Step4｜失敗（reject）は try / catch（20分）

const wait = () => {
    return new Promise ((resolve,reject) =>{
        const ok = false;

        if(ok){
            resolve("成功");
        } else {
            reject("失敗");
        }
    });
};

const run = async() =>{
    try{
        const result = await wait();
        console.log(result);
    } catch(error){
        console.log(error);
    }
};

run();

// 📌 対応関係
// Promise	async/await
// then	await
// catch	try / catch

//Step5｜実務イメージ（超重要）（10分）
const fetchData = async () => {
    const data = await fetch("/api/user");
    const result = await data.json();
    console.log(result);
};

// 👉 今後のAPI処理はほぼこれ

// ✏ ミニ課題（必須）
// 課題①：1秒後に「OK」と表示（見ながらOK）

const wait = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("完了");
        },1000);
    })
};

const run = async() => {
    const result = await Promise();
    console.log(result);
};

run();

//課題②：失敗したらエラー表示

const check = () =>{
    return new Promise ((resolve,reject) =>{
        reject("エラーです");
    });
};

const run = async() =>{
    try{
        const result = await check ();
        console.log(result); 
    }

    catch(error){
        console.log(error);
    }
};

run();

// 🧪 DAY25 セルフチェック（文章で）

// 見ずに答えて👇

// 1️⃣ async は何のため？
// → awaitを使えるようにするため

// 2️⃣ await は何を待つ？
// → Promiseのresolve

// 3️⃣ rejectされたらどこに行く？
// → catch / try-catch

// 4️⃣ なぜ async/await は実務で多い？
// → 同期処理みたいに読めて分かりやすい

// 🚦 今日の終了ライン

// ✅ async / await の型を1回書いた
// ✅ try / catch を見た
// ✅ 「楽になる理由」が言える

// 👉 今日はこれで100点