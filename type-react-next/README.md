# TypeScriptとReact/Next.jsで作る実践Webアプリケーション開発

p.98~100
- `useCallback`を使って関数をメモ化することで、値に変化があってもコンポーネントの再描画は起きない

- `useEffect`
  - 副作用を実行するためのフック。
  - 副作用とは何か？

### useRef
refの役割は大きく２つ
1. データの保存
	- 他に`useState`や`useReducer`があるが、どちらも描画に関するもの。状態を更新する度に再描画が起きる。refは更新されても再描画は起きない
2. DOMの参照

## 3.8.4 / getStaticPathを使った複数ページのSSG
- 投稿ページなどの表示するデータのみが異なるページが複数あるケースに対応するために、動的ルーティング(Dynamic Routing)機能が役立つ。

### 動的ルーティングを構成する２要素
1. [パラメータ].tsxのような `[]`で囲んだ特別なファイル名
	- `pages/posts/[id].tsx`
2. `getStaticProps`と合わせて `getStaticPaths`を利用する

```tsx
export async function getStaticPaths() {
	return {
		paths: [
			{params: {...}}
		],
		fallback: false // trueもしくは `blocking`を指定できる
	}
}
```

## 4.3.1 Storybookの導入
```bash
cd next-sample
npx sb@latest init # storybookの初期化

yarn storybook # npm run storybook
```