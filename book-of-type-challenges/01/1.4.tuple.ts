/**
 * 1.4 tuple
 * 固定長の長さの列を表す型。列に含まれる要素の型は異なっても良い
 */
const a4: [number, string] = [42, 'hoge'];
a4[0] = 3.14;

// 単一の要素のtuple型も定義できる
const b4: [number] = [42];

// 空tupleも用意できる
const c4: [] = [];

// readonly修飾子をつけるとimmutableになる
const d4: readonly [number, string] = [42, 'hoge'];
// eroor
// d4[0] = 12;

// optionalな要素を含むこともできる
const e4: [number, string?] = [42, 'hoge'];
const f4: [number, string?] = [42];

// optionalな要素の後ろにrequiredな要素を持たせることはできない
// type T = [number, string?, string];

// 他のtuple型を展開
type T = [number, string];
type U = [...T, boolean];
// U = [number, string, boolean];
