/**
 * 2.2 Generic Constraints
 * 『Generic Type F<T>にTはUのサブタイプでなければならない』という制約をかけることができる
 */

type GConst<T extends number> = [T, T];
// error: stringはnumberのサブタイプではないため
// type ExGConst = GConst<string>;

/** 他の引数を用いた制約を設けることもできる */
type G3<T, U extends T> = [T, U];
type Ex1 = G3<number, 42>;

// error: stringはnumberのサブタイプではないため
// type Ex2 = G3<number, 'hoge'>;

/** Generic Constraintsはnarrowingが効く利点がある */

// これはエラー： index[0]を持つとは限らないため
// type Err<T> = T[0];

type ExConst<T extends [number, string]> = T[0];
type X = ExConst<[42, 'hello']>;
// X = 42

// 練習問題
type Nullable2<T extends T[]> = T | null;
