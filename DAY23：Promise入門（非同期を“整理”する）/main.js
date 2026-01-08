// 🎯 今日のゴール

// Promise が 何のためにあるかを説明できる

// setTimeout を Promiseで包める

// 「成功 / 失敗」を分けて考えられるようになる

// Step1｜Promiseが必要な理由（考え方）【10分】
// いままで（DAY22）

// いままで（DAY22）
// setTimeout(() => {
//   console.log("完了");
// }, 1000);


// ❓ これの問題点は？

// 終わったかどうかが分からない

// 成功・失敗を表現できない

// 次の処理をつなげにくい

// 👉 「終わったよ」「失敗したよ」を伝える仕組みが欲しい
// それが Promise

// Step2｜Promiseの正体【15分】
// 最小構成

// const promise = new Promise((resolve, reject) =>{
//   resolve("成功！");
// });

// console.log(promise);



// 何が起きてる？

// new Promise → 非同期の箱を作る

// resolve → 成功

// reject → 失敗

// 👉 Promiseは 未来の結果が入る箱

//Step3｜thenで結果を受け取る【15分】

// const promise = new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//     resolve("完了しました");
//   },1000);
// });

// promise.then(reslut =>{
//   console.log(reslut);
// });

// 流れ（超重要）

// ① Promise作成
// ② setTimeout 実行中（まだ結果はない）
// ③ resolve("完了しました") が呼ばれる
// ④ then が反応して実行される



//.thenは何をしてる？
//👉 Promiseが「成功したあと」に実行される処理を書く場所

// promise.then(result => {
//   console.log(result);
// });
// これはこういう意味👇

// 「この Promise が resolve されたら、
// そのときの結果（result）を受け取って、この中を実行してね」

// 📌 then は自分から動かない
// 👉 Promise側で resolve された瞬間に「呼ばれる」

// よくある勘違い

// ❌ then = 非同期処理をする
// ⭕ then = 非同期処理の結果を受け取る


// Step4｜失敗を扱う（reject / catch）【15分】

const promise = new Promise((resolve,reject)=>{
  const ok = false;
  
  if(ok){
    resolve("成功");
  } else {
    reject("失敗");
  }
});

promise
  .then(result =>{
    console.log(result);
  })

  .catch(error =>{
    console.log(error);
  });


  //👉 成功と失敗を分けて考えるのがPromiseの核心

  //.thenと.catchの違いは？
//   「.then と .catch の違いは？」

// Promise
//  ├─ resolve → then → 　成功したとき
//  └─ reject  → catch　→  失敗したとき
// 👉 どちらか一方しか実行されない

// Step5｜Promise化の型（超重要）【15分】
// setTimeout を Promise にする定番パターン

const wait = ms =>{
  return new Promise(resolve => {
    setTimeout(() =>{
      resolve();
    },ms);
  });
};

wait(1000)
  .then(() =>{
    console.log("1秒経過");
  });

//Step6｜文章セルフチェック【10分】

// 見ずに答えて👇

// 1️⃣ Promiseは何のための仕組み？

// あなたの答え

// setTimeoutだけでは成功しているのかいないのかわからないためPromiseのボックスを使い判定するため

// 評価：△（惜しい）
// 修正するとこうなる👇

// 👉 非同期処理が「成功したか」「失敗したか」をあとから受け取るための仕組み

// 📌 setTimeout専用ではない
// 👉 API通信・ファイル読み込み・重い処理 全部対象

// 模範文

// Promiseは、非同期処理の結果（成功・失敗）を後から受け取るための仕組み。

// 2️⃣ resolve と reject の違いは？

// あなたの答え

// resolveは成功（true）rejectは失敗(false)

// 評価：△（ほぼOK）
// 直すポイント

// ❌ true / false ではない
// ⭕ 成功ルート / 失敗ルート

// 模範文

// resolve は処理が成功したときに呼ばれ、then が実行される。
// reject は処理が失敗したときに呼ばれ、catch が実行される。

// 3️⃣ then はいつ実行される？

// あなたの答え

// promiseの情報が整理されてから最後に実行される

// 評価：△（イメージは合ってる）
// 正確には👇

// 👉 Promise が resolve された瞬間

// 模範文

// then は Promise が resolve されたあとに実行される。

// 4️⃣ Promiseを使うと何が嬉しい？

// あなたの答え

// 成功しているかいないかが目に見えてわかる？

// 評価：○（方向は正しい）
// レベルアップすると👇

// 成功と失敗を分けて書ける

// 非同期の流れが読みやすくなる

// コールバック地獄を防げる

// 模範文

// Promiseを使うと、非同期処理の成功と失敗を分けて分かりやすく書ける。


// 🚦 今日の終了ライン

// then / catch の役割を言葉で言える

// setTimeout を Promiseで包める