/**
 * 2.3 Generic parameter defaults
 * Genric Typeのパラメータにもデフォルト型を指定できる
 */

type GTD<T = number> = [T, T];
type ExGTD = GTD;
// ExGTD = [number, number]

/** Generic Constraintsとデフォルト型を同時に指定することもできる */
type GnericConstraintsAndDefault<T extends number = 42> = [T, T];
type ExGCAD = GnericConstraintsAndDefault;
// ExGCAD = [42,42]
type Ex2 = GnericConstraintsAndDefault<3.14>;
// Ex2 = [3.14, 3.14]

// error
// type Ex3 = GnericConstraintsAndDefault<'hoge'>;
