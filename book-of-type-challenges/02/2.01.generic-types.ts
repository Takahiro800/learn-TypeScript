/**
 * 2.1 Generic Types
 * 型Tから型F(T)への写像FをGeneric Typeという
 * 『入力の型はどんな亜立ちでも良いが入力の型によって出力の型も決まる』が基本的なユースケース
 */

type F<T> = [T, T];
type ExF = F<number>;
// ExF = [number, number]

/** 複数の型パラメータを持つGeneric Typesも宣言できる */
type ExGenerics<T, U> = [T, U];
type ExFG = ExGenerics<number, string>;
// ExFG = [number, string]

/** Generic typeの定義式にGeneric Typeを使うこともできる */
type G1<T> = [T, T];
type G2<T> = [G1<T>, G1<T>];
type ExG = G2<number>;
// ExG = [[number, number], [number, number]]

/** Generic Typeを引数とするGeneric Typeは定義できない */
// type Apply<F, T> = F<T>;
// error

// 練習問題
type Nullable<T> = T | null;
