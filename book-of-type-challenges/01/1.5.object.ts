/**
 * 1.5 object
 * Key-Value形式のデータ構造です
 * Keyにはnumber, string, symbol型の値を指定できる
 */

type ObjectType = {
  hoge: number;
  42: string;
};

// ある定数の値をKeyとする場合は[]で囲む
const k5 = 'hoge';
type OT = {
  [k5]: number;
};
// OT = {
//   hoge: number;
// }

// 空object型も定義できる
type EmptyObject = {};

// readonly修飾子をつけることでimmutableにできる
type ReadOnlyObject = {
  readonly hoge: number;
};

const ExROO: ReadOnlyObject = {
  hoge: 42,
};
// error
// ExROO.hoge = 3.14;

// optionalなプロパティをを含むobject型も定義できる
type WithOptional = {
  hoge: number;
  fuga?: string;
};

const t: WithOptional = {
  hoge: 42,
};

// keyof演算子を用いるとobject型のkeyをunion型で取得できる
type ExampleKeyof = {
  hoge: number;
  fuga?: string;
  3: boolean;
};

type KeyOf = keyof ExampleKeyof;
// KeyOf = "hoge" | "fuga" | 3
