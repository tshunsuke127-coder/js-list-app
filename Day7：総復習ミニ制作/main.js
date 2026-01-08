//Step2｜JSで要素を取得（10分）

const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

//📌 DOM操作＝Web制作の核

//Step3｜クリックイベント

button.addEventListener("click", function(){
    result.textContent = 'クリックされました';
});

//👉 押した瞬間に動く

//Step4｜配列＋条件（30分）

const scores = [45,78,92,60];

button.addEventListener("click",function() {
    result.textContent = "";

    for(let i = 0; i < scores.length; i++){
        if (scores[i] >= 70 ){
            result.textContent += scores[i] + "";
        }
    }
});

button.addEventListener("click", function(){
    let output = "";

    for (let i = 0; i < scores.length; i++) {
        if(scores[i] >= 70) {
            output += scores[i] + "点";
        }
    }
    result.textContent = output ||"70点以上はいません";
});

// ✏ 仕上げ課題（重要）
// 以下を完成させてみよう👇

// ボタンを押したら
// 👉 偶数だけ表示
// （ヒント：% + if + ループ）

const numbers = [10,25,30,42];

button.addEventListener("click", function(){
    let output = "";
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            output += numbers[i] + "点";
        }
    }
    result.textContent = output ||"偶数はありません";
});


// 📌 実務では1ボタン＝1イベントが基本
