/**
 * 型の積であり A & B のように表される
 * intersection型 A & B は A の値でもあり Bの値でもあるような値のみ代⼊可能な型となります
 */

type Intersection = {
  x: number;
} & {
  y: string;
};

const ExIntersection: Intersection = {
  x: 42,
  y: 'hoge',
};

// A&Bに入力可能な値が存在しない場合、　never型となる
type Never = number & string;
// Never = never

/**
 * 共通プロパティを持つオブジェクト型のintersectionについて、共通プロパティの型はintersectionをとった型になる
 */
type IntersectionObject = {
  x: number | string;
} & {
  x: number | boolean;
};
// IntersectionObject = {x: number;} と同等の型
