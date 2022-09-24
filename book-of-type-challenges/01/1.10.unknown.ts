/**
 * 1.10
 * 任意の型を表すが、any型とは異なりunknown型の値はいかなる型の値としても扱えない
 * anyは型チェックをしないが、unknownは行う
 */

// const exUnknown = (x: unknown) => 2 * x;
// error

/**
 * unknown型と型TのintersectionはTとなる
 */
type UnknownInter = unknown & number;
// UnknownInter = number

/**
 * unknownと, anyを除く型Tとのunionはunknownとなる
 */
type UnknownUnion = unknown | number;
// UnknownUnion = unknown

/**
 * unknownとanyのunionはanyとなる
 */
type UnkownUnionAny = unknown | any;
// UnkownUnionAny = any
