/**
 * 1.6 union
 * 型の積であり　A&Bで表す
 */

const union1: number | string = 42;
const union2: number | string = 'hoge';

/**
 * true | false はboolean型となる
 */
type bool = true | false;
// bool = boolean;

/**
 * サブタイプであるような型とのunionはまとめられる
 */

type sub = 42 | number;
// type = number;
