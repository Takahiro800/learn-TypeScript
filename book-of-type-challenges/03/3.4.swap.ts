/**
 * 3.4 問題
 * ペア型　 T= [A,B]に対して [B,A]を返すGeneric Type, Swap<T>を実装する
 */

type Swap<T extends [any, any]> = [T[1], T[0]];
