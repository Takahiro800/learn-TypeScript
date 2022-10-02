/**
 * 4.5 T extends U が真となる細かなケース
 */

/** never は任意の型のサブタイプとして判定される */
type X_35 = never extends number ? true : false;
// X_35 = true;

type Y_36 = never extends { hoge: boolean } ? true : false;
// Y_36 = true;

type Z_36 = never extends () => void ? true : false;
// Z_36 = true;

/** Generics Typeのパラメータにneverを指定した場合、 真偽の式に関わらずneverになる */
type F_36<T> = T extends any ? true : false;
type X_36 = F_36<never>;
// X_36 = never;

/** anyは任意の型のスーパータイプとして判定される */
type X_36_2 = never extends any ? true : false;
// X_36_2: true;

type Y_36_2 = { hoge: boolean } extends any ? true : false;
// Y_36_2: true;

type Z_36_2 = (() => void) extends any ? true : false;
// Z_36_2: true

/** any[]はneverを除く任意の配列のサブタイプとして判定される。
 * any[] extends T[] は真だが、any[]に代入できる値が T[]に代入できない可能性もあるので注意する
 */

type X_36_3 = any[] extends number[] ? true : false;
// X_36_3: true;

type Y_36_3 = any[] extends any[][] ? true : false;
// Y_36_3: true;

type Z_36_3 = any[] extends never[] ? true : false;
// Z_36_3: false;

/** anyを要素とするタプルについても同様 */
type X_37 = [any, any] extends [number, string] ? true : false;
// X_37: true;

type Y_tupple_37 = [any] extends [never] ? true : false;
// Y_tupple_37: false;

/** any型のプロパティを持つobject型についても同様 */
type X_37_2_object = { hoge: any } extends { hoge: number } ? true : false;
// X_37_2_object: true;

type Y_37_2_object = { hoge: any } extends { hoge: never } ? true : false;
// Y_37_2_object: false;

/** anyを戻り値とするfunction型についても同様 */
type X_38_function = (() => any) extends () => number ? true : false;
// X_38_function: true;

type Y_38_function = (() => any) extends () => never ? true : false;
// Y_38_function: false;

/** ジェネリックなfunction型はそれを具象化した関数のサブタイプとなる */
type F_39_generic = <T>(x: T) => T;
type G_39_generic = (x: number) => number;
type X_39_generic = F_39_generic extends G_39_generic ? true : false;
// X_39_generic: true;

/** 戻り値の型が conditional type であるようなジェネリックなfunctnion型について、それらの条件式と真/偽の場合の式は同一である場合に限りサブタイプとして扱われます */
type F_39_generic_function = <T>(x: T) => T extends number ? 1 : 0;
type G_39_generic_function = <T>(x: T) => T extends number ? 1 : 0;
type X_39_generic_function = F_39_generic_function extends G_39_generic_function ? true : false;
// X_39_generic_function: true;

/** 条件式が異なるとサブタイプとしては扱われない */
type F_39_2 = <T>(x: T) => T extends 42 ? 1 : 0;
type G_39_2 = <T>(x: T) => T extends number ? 1 : 0;
type X_39_2 = F_39_2 extends G_39_2 ? true : false;
// X_39_2: false

/** 真の場合の式が異なるとサブタイプとして扱われない */
type F_39_3 = <T>(x: T) => T extends number ? 1 : 0;
type G_39_3 = <T>(x: T) => T extends number ? 2 : 0;
type X_39_3 = F_39_3 extends G_39_3 ? true : false;
// X_39_3: false;

/** function型 Fの戻り値の型がfunction型Gの戻り値の型のサブタイプであり、引数の型が一致する場合、FはGのサブタイプであると言える
 * このような性質を共変性という
 */
type X_40 = (() => 42) extends () => number ? true : false;
// X_40: true;

type Y_40 = (() => number) extends () => 42 ? true : false;
// Y_40: false;

/**
 * funciton型Fの各引数の型がfunction型Gの各引数の型のスーパータイプであり戻り値の型が同一である場合、、FはGのサブタイプとなる.
 * このような性質を反変性という
 */
type X_40_1 = ((x: number) => void) extends (x: 42) => void ? true : false;
// X_40_1: true;

type Y_40_1 = ((x: 42) => void) extends (x: number) => void ? true : false;
// Y_40_1: false;

/** 引数がany型の関数については反変性の例外となる */
type X_40_2 = ((x: number) => void) extends (x: any) => void ? true : false;
// X_40_2: true;

/** function型Fの戻り値の型が function型Gの戻り値の型のサブタイプ、かつ、Fの各引数の型がGの各引数の型のスーパータイプの場合もFはGのサブタイプとなる */
type X_41 = ((x: number) => 42) extends (x: 42) => number ? true : false;
