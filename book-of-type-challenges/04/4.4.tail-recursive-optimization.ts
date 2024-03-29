/**
 * 4.4 末尾再帰最適化
 */

/** tuple T の要素を全て1に変換したtupleを得る　Generic Typeは次のように定義できる */
type F_33<T extends any[]> = T extends [any, ...infer A] ? [1, ...F_33<A>] : [];

// 長さ50のタプルを渡すとエラーになる　=> 再帰が深いため

/** 次の型定義だとエラーにならない */
type G_33<T extends any[], R extends any[] = []> = T extends [any, ...infer A] ? G_33<A, [...R, 1]> : R;

/**
 * F,Gの本質的な差は、再帰する箇所の式がそのGeneric Typeのみ用いて定義されているかどうか
 * F: Fを再帰した結果に１を結合している
 * G: Gを再帰した結果をそのまま返している
 * 再帰が深くなりそうであれば G のように途中の計算結果を型パラメータに押し込んで末尾再帰の形に持ち込むとよい
 */

type Y_33 = G_33<
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
>;

/** 練習問題 */
type One<N extends number, R extends any[] = []> = R['length'] extends N ? R : One<N, [1, ...R]>;
// type X = One<3>; X = [1,1,1]
// type Y = One<0>; Y = []
