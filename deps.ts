// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

// TODO:(miyauci) Packaging and externalization this module.

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
export type LowercaseLetter = Lowercase<UppercaseLetter>;

export type Letter = UppercaseLetter | LowercaseLetter;

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Stringify<
  T extends string | number | bigint | boolean | null | undefined,
> = `${T}`;

export type DIGIT = Stringify<Digit>;
export type ALPHA = Letter;
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
