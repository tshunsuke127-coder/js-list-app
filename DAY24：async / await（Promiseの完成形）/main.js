// 🎯 今日のゴール

// Promise を 読みやすく書けるようになる

// 非同期を 同期っぽく考えられる

// 「何が起きてるか」を文章で説明できる

// Step1｜async / await とは？【10分】
// 一言でいうと👇

// Promiseを人間が読みやすく書くための書き方

// Promise（DAY23）

// promise.then(result =>{
//   console.log(result);
// })

// async / await

// const result = await promise;
// console.log(result);

// 👉 同じ意味
// 👉 await =「終わるまで待つ」

//Step2｜async の基本ルール【10分】

async function test() {
  return "OK";
}

test().then(result => {
  console.log(result);
});

// ポイント

// async を付けた関数は
// 👉 必ず Promise を返す

// return "OK"
// 👉 実際は resolve("OK")

// Step3｜await の役割（最重要）【20分】
// ❌ awaitなし（Promiseのまま）

// async function test(){
//   const result = fetchData();
//   console.log(result);
// }

//⭕ awaitあり（結果が入る）
// async function test() {
//   const result = await fetchData();
//   console.log(result);
// }

// await は何をしてる？

// Promise が終わるまで 一時停止

// resolve の中身を result に入れる

// ⚠️ await は async関数の中でしか使えない



//Step4｜setTimeout を async / await で書く【20分】

function wait() {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve("完了");
    },1000);
  });
}

async function run() {
  const result = await wait();
  console.log(result);
}

run();
//なんでここにrun()記述するの？

// 実行の流れ（超重要）

// run() 呼ばれる

// await wait() → 待つ

// 1秒後 resolve

// result に "完了"

// console.log 実行

// Step5｜エラー処理（try / catch）【20分】
// Promise版

promise
  .then(result =>{})
  .catch(error=>{});

// async / await版（実務はこれ）

async function run(){
  try {
    const result = await promise;
    console.log(result);
  } catch(error) {
    console.log(error);
  }
}

// 対応関係
// Promise	async/await
// then	    await
// catch	  try/catch


// Step6｜文章セルフチェック【10分】

// 見ずに答えて👇

// 1️⃣ async を付けると何が起きる？

// 関数が Promise を返す

// 2️⃣ await は何を待つ？

// Promise が resolve / reject されるのを待つ

// 3️⃣ await はどこでも使える？

// ❌ async関数の中だけ

// 4️⃣ try / catch は何の代わり？

// Promise の then / catch

// 🧠 今日の理解が浅くてもOK

// DAY24は👇
// 100%理解する日じゃない

// 「await は待つ」

// 「then が消えて読みやすい」

// これが分かれば合格。

