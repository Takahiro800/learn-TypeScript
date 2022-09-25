/**
 * 3.1 literal型を用いたindex指定
 */

/** オブジェクト型TのプロパティFの型はT["F"]で参照できる */
type T31 = { hoge: number; fuga: string };
type X31 = T31['hoge'];
// X31 = number

/** string literal型K = "P" を用いてT[K]のように参照することもできる */
type T312 = { hoge: number; fuga: string };
type K312 = 'hoge';
type X312 = T312[K312];
// X312 = number

/** オブジェクト型TがプロパティPを持たない場合、T["P"]はエラーになる */
type T313 = { hoge: number; fuga: String };
// type X313 = T313['foo'];
// error

/** 配列型・タプル型Aの I番目の要素の型はA[I]で参照できる */
type A311 = [number, string];
type X311 = A311[0];
// X311 = number
