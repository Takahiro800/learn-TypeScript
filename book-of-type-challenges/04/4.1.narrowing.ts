/**
 * 4.1 Narrowing
 * Generics Constraintsが設けられていない型パラメータTは配列型やタプル型のインデックスとして指定できない
 */

type A_27 = [number, string];
// error
// type F<T> = A_27[T];

/**  Generics Constraintsを設けることで配列型のインデックスとして指定できる */
type A_28 = [number, string];
type F<T extends number> = A_28[T];
// type F<T extends 0 | 1> = A_28[T];
type X_28 = F<1>;
// X_28 = string

//
// type X_28 = F<2>; => undefined

/** Conditional Typeの真の場合の式についてもnarrowingが適用される */
type A_28_2 = [number, string];
type F_28<T> = T extends number ? A_28_2[T] : 'hoge';
type X_28_2 = F_28<1>;

/** [T, U] = [number, string]のようにタプルを用いた条件式の場合はnarrowingは適用されない */
/** Generic Typeについても同様 */
