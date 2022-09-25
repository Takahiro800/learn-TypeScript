/**
 * 3.2 literal以外の型を用いたindex指定
 * オブジェクト型に対してliteralのunion型もインデックスとして指定できる。
 * この場合、指定した型に属す各literalで Index Access した結果のunion型が得られる
 */

type T_3_2 = {
  x: number;
  y: string;
};

type X_3_2 = T_3_2['x' | 'y'];
// X_3_2 = number | string

/** literalをキーとするオブジェクトの各プロパティの値の型を得るにはkeyofによりunion型をインデックスに指定する */
type T_22 = { x: number; y: string };
type X_22 = T_22[keyof T_22];
// X_22 = number | string

// 練習問題
// type X = IntersectionNumber<[1,2], [1,3]>
// X = 1

// type X = IntersectionNumber<[1,2], [1,2,3]>
// X = 1 | 2

type IntersectionNumber<T extends number[], U extends number[]> = T[number] & U[number];
