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

##### webpack.config.jsの作成
1. エントリファイルを指定
2. 最終的なバンドルの出力先を指定

##### JSXをコンパイルするためにBabelをインストールする
```js
//   webpack.config.jsに追記
  module: {
    rules: [{ test: /\.js%/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
```
1. babel-loaderの設定値のみを記述している
2. testには、処理対象となるファイルと正規表現で指定。全ての.js
3. excludeで処理の対象外を指定。`node_module`配下は無視

##### Babelの振る舞いを変えるために設定ファイルを用意・.bablerc
- `yarn add @babel/preset-env @babel/preset-react --dev`
ES.nextの構文とJSXを、ブラウザが解釈できるコードに変換する
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

### 5.3.3
依存モジュールを単一のファイルにビルドすることによるデメリットもある。
- ブラウザでのデバッグが困難になる
これを解決するのが**ソースマップ**

webpack.config.jsに以下を追加
```js
  devtool: 'source-map', // ソースマップ
```

# 6. ステート
Reactのコンポーネントが持つデータはプロパティだけではなく、ステートもある
プロパティ
- Read-Only コンポーネントが描画されると変更されない

ステート
- コンポーネントの描画後に変更されるデータをステートと呼ぶ

## React Appを一から作ってみる
1. ディレクトリ作成
2. 複数のコンポーネントに分割して異なるファイルに記述する
3. アプリケーションをwebpackでビルドできるようになる

- yarn init -y
- yarn add react react-dom --serve

ファイルを作成
`yarn add webpack webpack-cli --dev`

`webpack.config.js`を作成

`yarn add babel-loader @babel/core --dev`

プリセットをインストール
`yarn add @babel/preset-env @babel/preset-react --dev`

Babelの設定ファイルを作成
`touch .babelrc`

### 6.3.2 制御されたコンポーネント
- onSubmitプロパティを追加
- Click時の挙動は `const submit` で定義
```js
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title ..."
        required
      />
      <input value={color} onChange={(event) => setColor(event.target.value)} type="color" required />
      <button>ADD</button>
    </form>
```

### 6.3.3 カスタムフック
-　上記のように、inputタグごとに
```js
	<input value={} onChange={}>
```
は不適切。『重複したコードは関数として切り出して抽象化すべきである』

### 6.4 Reactコンテキスト
- 中間のコンポーネントに都度コードを書いていくのは手間
- データの受け渡しを、定義する箇所と利用するコンポーネントのみに記述する技術がコンテキスト

定義する側
- `Context.Provider`で定義
```js
export const ColorContext = createContext();

render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
  document.getElementById('root')
);

```

### 6.4.3 コンテキストとステートの併用
親コンポーネントでステートを保持して、その値をProviderコンポーネントに設定する。ステートが更新されると、親コンポーネントが再描画され、結果的にProviderの配下のコンポーネントツリーが新しいデータで再描画される


**カスタムプロバイダー**
ステートを保持するコンポーネントでコンテキストプロバイダーを描画すること

# 07 フック
画面描画後に実行したい場合、`useEffect`フックを使う

### 7.1.1 依存配列
-　複数のuseEffectを同一のコンポーネントに定義すると、いずれかが更新されて、再描画される度に全てのuseEffectが実行されてしまう
- それを解決するために、**依存配列** を使う。useEffectの二つ目の引数に配列を渡すことで副作用が実行される条件を指定できる
- 依存配列は、複数の値を持たせることや空にする（初回描画時のみ、副作用を実行）ことも可能
- コールバック関数（引数として渡される関数）は、戻り値を返すことも可能。戻り値として関数を登録した場合、コンポーネントがツリーからアンマウントされた時にその関数が実行されます

### 7.2 useLayoutEffect
1. コンポーネントの描画関数が呼び出される
2. useLayoutEffectで設定した副作用関数が呼び出される
3. ブラウザのPaint処理によりコンポーネントの描画結果が画面に反映される
4. useEffectで設定した副作用関数が呼び出される


### 7.3 useReducer
現在のステート値を受け取って新しいステート値を返す関数のことを `リデューサー`と呼ぶ
useReducerについて
引数：　リデューサーの関数とステートの初期値
戻り値：　ステート値、リデューサーを実施するための関数（dispatch関数）

リデューサー関数は二つの引数を取ることができる
1. 現在のステート値
2. 入力値

### 7.3.1 useReducerを使った複雑なステート管理
- 誤った実装（adminカラムだけでなく、他のカラムは空に）
```js
	<button
	onClick={() => {
		setUser({ admin: true });
	}}
	>
```

- スプレッド構文を用いて更新する
```js
	<button
	onClick={() => {
		setUser({ ...user, admin: true });
	}}
	>
```
これだと、`setUser`を使っている箇所全てにおいてスプレッド構文を追記する必要がある。


元のステート値を活用して更新するので、リデューサーを活用するのが良い
```js
  const [user, setUser] = useReducer((user, newDetails) => ({ ...user, ...newDetails }));
        <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
```




参考記事
[JavaScript｜パッケージマネージャー「Yarn」の使い方 - わくわくBank](https://www.wakuwakubank.com/posts/307-javascript-yarn/)
