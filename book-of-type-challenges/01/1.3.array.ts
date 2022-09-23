/**
 * 1.3 array
 * ある型に関する任意の長さの列（配列）を表す型
 */
const a3: number[] = [1, 1, 2, 3];
a3[0] = 0;

// 空の配列を代入することも可能
const b3: number[] = [];

// readonly修飾子をつけるとimmutableなarray型となる
const c3: readonly number[] = [1, 2, 3, 4];
// error
// c3[0] = 0;
