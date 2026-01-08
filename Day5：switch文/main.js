// Day5：switch文


const fruits = "りんご";

switch (fruits) {
    case "りんご":
        console.log("赤い果物");
        break;

    case "バナナ":
        console.log("黄色い果物");
        break;
    
    case "みかん":
        console.log("オレンジの果物");
        break;

    default:
        console.log("知らない果物");
}

// 📌 ポイント

// case は === 比較

// break を忘れると下も実行される

// default は else 的存在

// Step2｜breakを忘れるとどうなる？（重要）

const num = 1 ;

switch (num) {
    case 1:
        console.log("1です");

    case 2 :
        console.log("2です");
    
    default:
        console.log("その他");
}

// 👉 出力👇

// 1です
// 2です
// その他


// 📌 breakは強制終了スイッチ

// Step3｜if文との使い分け（超重要）


// ・switch向き

// 値が「固定」

// メニュー

// ボタン番号

// selectのvalue


// ・if向き

// 範囲（>=, <=）

// 条件が複雑


// Step4｜実務例（よく出る）

const role = "admin";

switch (role) {
    case "admin":
        console.log("管理者画面");
        break;

    case "user":
        console.log("一般ユーザー画面");
        break;

    default:
        console.log("ゲスト画面");
    
}


// ✏ ミニ課題
// 課題①
// "月" → 平日
// "土" → 休日
// "日" → 休日
// その他 → 不明

const day = "土";

switch(day) {
    case "月":
        console.log("平日");
        break;

    case"土":
        console.log("休日");
        break;
        
    case"日":
        console.log("休日");
        break;

    default:
        console.log("不明")
}

// ワンランク上の書き方（豆知識）
// 同じ処理をまとめられる
// switch (day) {
//   case "土":
//   case "日":
//     console.log("休日");
//     break;

//   case "月":
//     console.log("平日");
//     break;

//   default:
//     console.log("不明");
// }


// 📌 実務ではよく使う書き方
// （条件が増えたときに強い）

// 課題②（重要）
// "赤" → 止まれ

// "黄" → 注意

// "青" → 進め

const signal = "赤";

    switch(signal){
        case"赤":
            console.log("止まれ");
            break;
        
        case"黄":
            console.log("注意");
            break;

        case"青":
            console.log("進め");
            break;
    }

// 課題③（応用）
// 1 → ホーム

// 2 → プロフィール

// 3 → 設定

// その他 → エラー

const menu = 2;
    switch(menu) {
        case 1:
            console.log("ホーム");
            break;

        case 2:
            console.log("プロフィール");
            break;

        case 3:
            console.log("設定");
            break;

        default:
            console.log("エラー");
    }