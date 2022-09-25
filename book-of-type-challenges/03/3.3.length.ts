/**
 * 3.3 length
 * 配列型はlengthプロパティを持っていて、["length"]で参照できる。
 * コンパイル時に確定していないのでnumber型が得られる
 */
type A_23 = string[];
type X_23 = A_23['length'];
// X_23 = number

/** タプル型もlengthを持っている。コンパイル時に確定するのでnumber literal型を返す */
type A_23_2 = [1, 2, 3];
type X_23_2 = A_23_2['length'];
// X_23_2 = 3

/** optionalな要素を含むタプルの場合、取り得る長さのnumber literalのunion型 */
type A_23_3 = [number, number?];
type X_23_3 = A_23_3['length'];
// X_23_3 = 1 | 2

/** Generic Typeの配列型パラメータにタプル型を渡した場合もコンパイル時に長さを確定できるので number literal型が得られる */
type F_23<A extends any[]> = A['length'];
type X_23_F = F_23<[1, 2, 3]>;
// X_23_F = 3
