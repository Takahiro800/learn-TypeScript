/**
 * 4.2 Infering Within Conditional Types
 * Conditional Typesの条件式に inferを付与した変数を含めるとパターンマッチのように真の場合の式でその変数を使用できる
 */

type T_29 = [1, 2];
type X_29 = T_29 extends [infer A, infer B] ? [B, A] : never;

/** 特に配列に対して先頭要素とその他の要素に分割させる技法はよく使う */
type T_29_2 = [1, 2, 3];
type X_29_2 = T_29_2 extends [infer A, ...infer B] ? [A, B] : never;
// X_29_2 = [1, [2,3]]

/** Generic Typeの再帰と相性が良い */
type F_29<T extends any[]> = T extends [infer A, ...infer B] ? [A, A, ...F_29<B>] : [];
type X_29_3 = F_29<[1, 2, 3]>;
// X_29_3 = [1,1,2,2,3,3]

/** 特定の型のサブタイプである場合のみinferさせることもできる
 * nerrowingも効く
 */

// type X_29_4 = [1, 2] extends [infer A, infer B] ? [1, 2, 3][A] : never;
// error: Aがインデックスとして使えるか不明

type X_29_4 = [1, 2] extends [infer A extends number, infer B] ? [1, 2, 3][A] : never;
// Y = 2 : Aはnumberであることが確定するのでerrorにならない

type Z_29 = ['hoge', 2] extends [infer A extends number, infer B] ? [1, 2, 3][A] : never;
// Z = never
