/**
 * 1.8 function
 * 関数を表す型であり、 引数と戻り値の型で特徴づけられる
 */

type ExFunction = (x: string) => number;
const f: ExFunction = (x: string) => x.length;

/**
 * function型に代入する関数の引数名は型定義と異なっていても構わない
 */
type Ex2Func = (x: string) => number;
const f2: Ex2Func = (y: string) => y.length;

/**
 * 引数に？をつけると Optional Parameterとなる
 */
type OptionalParameter = (x: string, y?: boolean) => number;

/**
 * 引数名に...を付与するとRest Parameterになる
 */
type RestParameter = (x: String, ...r: boolean[]) => number;

/**
 * 引数は、Required, Optional, Restの順序で定義しなければならない
 */
type Arrgument = (x: String, y?: number, ...r: boolean[]) => number;
