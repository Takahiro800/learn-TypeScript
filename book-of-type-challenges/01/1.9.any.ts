/**
 * 1.9 any
 * 任意の型を表す型
 */

const any1: any = 42;
const any2: any = 'hoge';
const any3: any = [42, 'hoge'];

/**
 * 任意の配列をany[]で表せる
 */
const any_array: any[] = [42, 'hoge', false];

/**
 * anyとのintersection型はanyになることに注意
 */
type AnyInter = number & any;
// AnyInter = any
// AnyInter = numberではない
