# React × API 一覧管理アプリ

既存案件の修正・機能追加を想定したフロントエンドアプリ

アプリ概要
APIからデータを取得し、一覧表示・削除・フォーム送信などを行うReactアプリです。
実務で多い修正案件を想定し、状態管理・エラー処理を意識して構成しています。

## 主な機能
- APIから一覧データを取得
- ローディング / エラー表示
- データ一覧表示
- 削除ボタン処理
- フォーム送信処理
- コンポーネント分割

## 技術スタック
- React（Vite）
- JavaScript（ES6）
- fetch API
- CSS（flexbox）

## ディレクトリ構成
src/
 ├─ App.jsx（state管理・API取得）
 ├─ components/
 │   ├─ ItemList.jsx
 │   ├─ Item.jsx
 │   ├─ Loading.jsx
 │   └─ ErrorMessage.jsx


 ## 工夫した点
- stateはApp.jsxで一元管理
- 表示用コンポーネントとロジックを分離
- APIエラー時でも画面が落ちないよう制御
- 修正・追加しやすい構成を意識
