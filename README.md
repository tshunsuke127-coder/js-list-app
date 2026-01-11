# DAY53 JavaScript 一覧表示アプリ

## 概要
外部APIから取得したデータを一覧表示し、
検索・フィルター・並び替えができるシンプルなWebアプリです。

**Fetch API・状態管理（state）・描画分離を意識したミニアプリ**として作成しました。

## 使用技術
- HTML
- CSS
- JavaScript（Vanilla JS）
- Fetch API

## 機能一覧
- APIからデータ取得
- ローディング表示
- エラー表示
- 一覧表示
- キーワード検索
- 並び替え（昇順 / 降順）

## 工夫した点
- stateを使って状態管理を行い、UIとロジックを分離
- state → render の一方向データフローを意識
- loading / error / data の状態を明確に分けて実装

## 学んだこと
- 非同期処理（fetch）の基本的な流れ
- 状態を元にUIを再描画する考え方
- DOM操作を最小限にする設計

## 起動方法
1. このリポジトリをクローン
2. `index.html` をブラウザで開く



# JavaScript 一覧表示アプリ 簡易設計書

## 1. 目的
外部データ（または localStorage）を元に、
一覧表示・追加・編集・削除ができるアプリを作成する。

## 2. 構成
- Store（state）
  - アプリの状態を管理する
  - items の追加・更新・削除を担当

- API
  - データの保存・取得を担当
  - localStorage を使用

- UI
  - 画面描画のみを担当
  - state の内容を元に表示を更新する

## 3. データの流れ
ユーザー操作
  ↓
UIイベント
  ↓
Store を更新
  ↓
render 実行
  ↓
UI に反映

## 4. 主要処理

### 一覧表示
1. Store から items を取得
2. UI.render(items) を実行
3. 一覧として画面に表示

### 追加
1. 入力フォームから値を取得
2. Store.add() を実行
3. state 更新後に render

### 編集
1. 対象IDを取得
2. Store.update() を実行
3. state 更新後に render

### 削除
1. 対象IDを取得
2. Store.delete() を実行
3. state 更新後に render
