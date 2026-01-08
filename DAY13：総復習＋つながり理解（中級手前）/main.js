// DAY13：総復習＋つながり理解（中級手前）
// 🎯 今日のゴール

// DAY8〜DAY12が バラバラじゃなく一本でつながる

// 「何を書けばいいか分からない」を卒業

// 関数・条件・return・オブジェクトが自然に出てくる

// Step1｜コードを書く前に考える癖（20分）
// ❓ 問題

// 点数を渡したら
// 結果とメッセージを返したい

// ❌ ありがちな書き方

// いきなり if 書き始める

// ⭕ 正解の思考順

// 入力は？ → score

// 出力は？ → 結果（文字 or オブジェクト）

// 処理は？ → 条件分岐

// 👉 これを毎回やるだけで迷子にならない

// Step2｜最小構成で書く（超重要）（20分）

// まずは 最低限動く形

const judge = score => {
    return score>= 70
};

console.log(judge(80));//true
console.log(judge(60))//false

//📌 いきなり完璧を狙わない
//動く → 進化させる


//Step3｜結果を文字に進化（20分）
const judge2 = score =>{
    if(score>=70){
        return "合格";
    } else{
        return"不合格";
    }
};

console.log(judge2(80))
console.log(judge2(60))


// ここで大事👇

// return は 必ずどちらの道にもある

// return した瞬間、関数は終了


//Step4｜オブジェクトで返す（中級入口）（30分）

const judge3 = score => {
    if(score >=70){
        return {
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

const res =judge3(80);
console.log(res.result);
console.log(res.message);

// 💡 実務ではほぼこれ

// 画面表示

// APIレスポンス

// 判定ロジック

//Step5｜ランク判定（DAY12完成形）（30分）

const judgeScore = score => {
    if(score>=90){
        return{rank:"S",message:"完璧"};
    }else if(score>=80){
        return{rank:"A",message:"とても良い"};
    }else if(score >= 70){
        return{rank:"B",message:"合格"};
    }else if(score >=60){
        return{rank:"C",message:"再挑戦"};
    }
};

console.log(judgeScore(95));
console.log(judgeScore(82));
console.log(judgeScore(71));
console.log(judgeScore(60));


// ❌ 問題点

// 「60未満」のケースがない

// 条件に漏れがある

// ⭕ 正解形

// const judgeScore = score => {
//     if (score >= 90) {
//         return { rank: "S", message: "完璧" };
//     } else if (score >= 80) {
//         return { rank: "A", message: "とても良い" };
//     } else if (score >= 70) {
//         return { rank: "B", message: "合格" };
//     } else {
//         return { rank: "C", message: "再挑戦" };
//     }
// };


// 📌 最後は必ず else で受け止める
// → 実務の鉄則

// Step6｜セルフチェック（必須）

// 次を見ずに答えられる？

// 1️⃣ なぜ age じゃなく score を使う？
//ageは年齢の時に使うから
// 2️⃣ return がないと何が起きる？
// undefinedが出る
// 3️⃣ if の中で return したらその後は？
//その後コード書いても反映されない
// 4️⃣ なぜオブジェクトで返すと便利？
//見やすいから？
// （全部言語化できたら完璧）

// 🧠 セルフチェックの言語化を強化しよう
// 1️⃣ なぜ age じゃなく score を使う？

// ⭕ 改善版：

// この関数は「点数判定」が目的だから。
// 変数名は 役割を表す必要がある。

// 👉 実務ではここ超重要（読みやすさ）

// 2️⃣ return がないと何が起きる？

// ⭕ 完璧：

// undefined が返る

// 補足すると👇

// 関数は 必ず何かを返す。
// return がなければ自動で undefined。

// 3️⃣ if の中で return したらその後は？

// ⭕ 正解：

// 関数がその場で終了する
// 以降のコードは一切実行されない

// 4️⃣ なぜオブジェクトで返すと便利？

// ⭕ 今の答え：

// 見やすいから

// 👉 中級者の答えにすると👇

// 複数の情報をひとまとめで返せるから。
// 表示・判定・メッセージを分けて使える。

// res.rank
// res.message
// これができる＝実務レベル