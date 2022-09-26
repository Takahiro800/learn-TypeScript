// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>
];

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;

/** メモ
 * Conditional Typesの真または偽の場合の式にパラメータの型を指定すると、元のunion型ではなく評価している型として扱われる
 * T | never = T
 */
