import { stringifyAcceptRanges } from "./stringify.ts";
import {
  assertEquals,
  assertIsError,
  assertThrows,
  describe,
  it,
} from "./_dev_deps.ts";

describe("stringifyAcceptRanges", () => {
  it("should return string if the input is valid string", () => {
    const table: string[] = ["bytes", "none"];

    table.forEach((input) => {
      assertEquals(stringifyAcceptRanges(input), input);
    });
  });

  it("should return string if the input is valid string of array", () => {
    const table: [[string, ...string[]], string][] = [
      [["bytes"], "bytes"],
      [["bytes", "unknown"], "bytes, unknown"],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(stringifyAcceptRanges(input), expected);
    });
  });

  it("should throw error if the input is invalid string", () => {
    const table: string[] = [
      "",
      " ",
      "bytes, none",
      "a ",
      " a",
      ",",
      " ,",
      `"a"`,
      `"a, b"`,
    ];

    table.forEach((input) => {
      assertThrows(() => stringifyAcceptRanges(input));
    });
  });

  it("should throw error if the array input has is invalid string", () => {
    const table: [string, ...string[]][] = [
      [""],
      ["", ""],
      ["", "", "", ""],
      ["", "ok"],
      ["ng", ","],
    ];

    table.forEach((input) => {
      assertThrows(() => stringifyAcceptRanges(input));
    });
  });

  it("should be error message", () => {
    let err;
    try {
      stringifyAcceptRanges("");
    } catch (e) {
      err = e;
    } finally {
      assertIsError(err, TypeError, `invalid <range-unit> syntax. ""`);
    }
  });
});
