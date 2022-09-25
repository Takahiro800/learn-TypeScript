/**
 * 第４章　Conditional Types
 * TypeScript では型Tが 型Sのサブタイプならば型X, そうでなければ型Yとなる型を定義できる
 */

type T_26 = 42;
type X_26 = T_26 extends number ? 'hoge' : 'fuga';
// X_26 = "hoge"

/** else ifのような条件を記述したい場合はConditional　Typesをネストさせる */
type T_26_2 = 'foo';
type X_26_2 = T_26_2 extends number ? 'hoge' : T_26_2 extends string ? 'fuga' : 'foo';
// X_26_2 = 'fuga'

/** AND条件もConditional Typesで表現できる */
type T_26_3 = 42;
type U_26_3 = 'foo';

type X_26_3 = T_26_3 extends number ? (U_26_3 extends string ? 'hoge' : 'fuga') : 'fuga';
// X_26_3 = 'hoge'
