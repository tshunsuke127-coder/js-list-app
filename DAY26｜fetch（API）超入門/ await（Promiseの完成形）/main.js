// DAY26｜fetch（API）超入門

// 非同期の完成形（実務で一番使う）

// 🎯 DAY26のゴール

// fetch が「何をしてるか」を理解する

// Promise / async await とどう繋がるか分かる

// 書けなくてOK、読めて説明できれば合格

// ① fetchって何？（超重要）

// 一言でいうと👇

// 外部からデータを取りに行く非同期処理

// 例：

// 天気情報

// ユーザー一覧

// 商品データ

// 👉 全部 fetch

// ② 一番シンプルな fetch（読むだけ）

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>{
    console.log(data);
});

// ここで起きてる流れ（大事）

// 1️⃣ 外部URLにデータを取りに行く
// 2️⃣ すぐには返ってこない（非同期）
// 3️⃣ データが返ってきたら .then が動く
// 4️⃣ data に中身が入る

// ③ async / await 版（実務はこっち）

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

getUsers();


// 読み方（重要）

// await = 「ここで結果が返るまで待つ」

// でも 画面は止まらない（非同期）

// 👉 Promiseを人間が理解しやすく書いた形

// ④ DAY23〜25との繋がり（ここ超大事）
// 今まで	DAY26
// setTimeout	通信の代わり
// Promise	fetchの中身
// then / catch	成功・失敗
// async / await	実務用の書き方

// 👉 全部同じ話の続き

// 🧠 DAY26 セルフチェック（文章で）

// 見ずに答えて👇

// 1️⃣ fetch は何をする？
// 2️⃣ なぜ fetch は非同期？
// 3️⃣ await は何を待ってる？
// 4️⃣ then と await は何が違う？

// ※ 書けなくてもOK
// ※ 考えようとするのが目的

// 🚦 今日の終了ライン

// fetch のコードを 読めた

// 流れを 日本語で説明できそう

// 👉 書けなくて全く問題なし