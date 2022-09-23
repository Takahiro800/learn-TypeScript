// 1.1 primitive型
const a: number = 42;
const b: number = 3.14;

// const c: number = '9';
// error

/**
 * string
 */
const d: string = 'hoge';
const e: string = '%1';
const f: string = '';

// const g: string = 10;
// error

/**
 * booleanは真偽値true, falseを返す
 */
const h: boolean = true;
const i: boolean = false;

/**
 * symbolはシンボル値を表す型。
 * object型のキーとして使える型の一つです（他は、string, numberのみ）
 */
const j: symbol = Symbol('a');
const k: symbol = Symbol(3);

/**
 * undefinedはundefinedに対応する型
 */
const o: undefined = undefined;

// const p: undefined = null;
// error
