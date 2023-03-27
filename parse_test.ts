import { parseAcceptRanges } from "./parse.ts";
import type { AcceptRanges } from "./types.ts";
import {
  assertEquals,
  assertIsError,
  assertThrows,
  describe,
  it,
} from "./_dev_deps.ts";

describe("parseAcceptRanges", () => {
  it("should throw error if the input is invalid Accept-Ranges", () => {
    const table: string[] = [
      "",
      " ",
      " , ",
      " ,",
      ",",
      ",,,",
      ", , ,",
      "a,",
      "a, , a",
      "あ",
      "a, あ",
      `""`,
      `","`,
      `"a,b"`,
    ];

    table.forEach((input) => {
      assertThrows(() => parseAcceptRanges(input));
    });
  });

  it("should return accept ranges if the input is valid", () => {
    const table: [string, AcceptRanges][] = [
      ["abc", ["abc"]],
      [" abc ", ["abc"]],
      ["abc, def", ["abc", "def"]],
      ["bytes,none", ["bytes", "none"]],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(parseAcceptRanges(input), expected);
    });
  });

  it("should be error message if the accept ranges is invalid", () => {
    const table: string[] = [
      "",
      "a, あ, b",
      `""`,
    ];

    table.forEach((input) => {
      let err;
      try {
        parseAcceptRanges(input);
      } catch (e) {
        err = e;
      } finally {
        assertIsError(
          err,
          SyntaxError,
          `invalid <Accept-Ranges> syntax. "${input}"`,
        );
      }
    });
  });
});
