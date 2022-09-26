/**
 * 4.3 Distributive Conditional Types
 * Generic かつ Conditionalな型のパラメータにunion型Uを指定し条件が U extends <cond> の場合、
 * Uの各型についてConditional　Typesを適用した結果のunion型になる。
 * これを　Distributive Conditional Types という
 */

type F_31<U> = U extends number ? 1 : 2;
type X_31 = F_31<42 | 'hoge'>;

/** パラメータのunion型をそのままConditional Typesで評価したい場合は[]でラップし単一のタプル型とする */
type F_31_2<U> = [U] extends [number] ? 1 : 2;
// これは number型ではなく 42 | 'hoge'型なので、elseの方が評価される
type X_31_2 = F_31_2<42 | 'hoge'>;

/** Conditional Typesの真または偽の場合の式にパラメータの型を指定すると、元のunion型ではなく評価している型として扱われる */
type F_32<U> = U extends number ? [U, U] : [U];
type X_32 = F_32<42 | 'hoge'>;
// X_32 = [42,42] | ['hoge']

/** 元のunion型を真または偽の場合の式で指定したい場合はGenericの型パラメータを別に用意しそちらに束縛しておく */
type F_32_2<T, U = T> = T extends any ? [T, U] : never;
type X_32_2 = F_32_2<42 | 'hoge'>;

/** inferで束縛した型パラメータに関しても Distributive Conditional Typesは適用される */
type F_32_3<T> = T extends (infer U)[] ? (U extends number ? [U, U] : [U]) : never;
type X_32_3 = F_32_3<(42 | 'hoge')[]>;
