### 4.2.1
`React.createElement("h1", {id: "recipe-0"}, "Baked Salmon" }`

# 5章　ReactとJSX
4章では`createElement`で要素を作成したが、実際の開発では滅多に使わない。代わりに`JSX`を使う

### 5.2.1 Reactフラグメント
- Reactでは２つ以上の要素をコンポーネントの戻り値として返すことはできない　
- `React.Fragment` を使う

### 5.3.1 プロジェクトの作成
npmの場合
- `npm init -y`
- `npm install react react-dom serve`

yarnの場合
- `yarn init -y`
- `yarn add react react-dom serve`

参考記事
[JavaScript｜パッケージマネージャー「Yarn」の使い方 - わくわくBank](https://www.wakuwakubank.com/posts/307-javascript-yarn/)