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


##### ビルド環境の構築(p.99)
`npm install --save-dev webpack webpack-cli`
`yarn add webpack webpack-cli --dev`

モジュールに分割されたアプリケーションを単一のファイルに結合するためには、webpackに対して結合手順を教える必要がある。そのために、プロジェクトごとに設定ファイルを記述する必要があります。
- `webpack.config.js`という名前でプロジェクトのルートディレクトリに配置する必要がある


参考記事
[JavaScript｜パッケージマネージャー「Yarn」の使い方 - わくわくBank](https://www.wakuwakubank.com/posts/307-javascript-yarn/)
