import { isTokenFormat } from "./utils.ts";
import { assert, describe, it } from "./_dev_deps.ts";

describe("isTokenFormat", () => {
  it("should return true", () => {
    const table: string[] = [
      "a",
      "!",
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'*+.^`|~-",
    ];

    table.forEach((input) => {
      assert(isTokenFormat(input));
    });
  });

  it("should return false", () => {
    const table: string[] = [
      "",
      `"`,
      ",",
      " ",
      " abc",
      "abc ",
    ];

    table.forEach((input) => {
      assert(!isTokenFormat(input));
    });
  });
});
