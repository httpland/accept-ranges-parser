// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

export { isString } from "https://deno.land/x/isx@1.1.0/is_string.ts";

// TODO:(miyauci) Packaging and externalization this module.

/** Types for uppercase letter. */
export type UppercaseLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

/** Types for lowercase letter. */
export type LowercaseLetter = Lowercase<UppercaseLetter>;

/** Types for letter. */
export type Letter = UppercaseLetter | LowercaseLetter;

/** Types for digit. */
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Deserialize types. */
export type Stringify<
  T extends string | number | bigint | boolean | null | undefined,
> = `${T}`;

/** Representation of [`<DIGIT>`](https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1). */
export type DIGIT = Stringify<Digit>;

/** Representation of [`<ALPHA>`](https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1). */
export type ALPHA = Letter;

/** Representation of [`<tchar>`](https://www.rfc-editor.org/rfc/rfc9110#section-5.6.2-2). */
export type TChar =
  | "!"
  | "#"
  | "$"
  | "%"
  | "&"
  | "'"
  | "*"
  | "+"
  | "-"
  | "."
  | "^"
  | "_"
  | "`"
  | "|"
  | "~"
  | ALPHA
  | DIGIT;

/** Representation of [`<token>`](https://www.rfc-editor.org/rfc/rfc9110#section-5.6.2-2). */
export type Token = `${TChar}${string}`;
