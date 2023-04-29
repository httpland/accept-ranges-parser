import { isString, isToken } from "./deps.ts";
import { Msg } from "./constants.ts";

/** Serialize string of array into string.
 *
 * @example
 * ```ts
 * import { stringifyAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/stringify.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(stringifyAcceptRanges(["bytes"]), "bytes");
 * ```
 *
 * @throws {TypeError} If the input is invalid [`<range-unit>`](https://www.rfc-editor.org/rfc/rfc9110#section-14.1-3) format.
 */
export function stringifyAcceptRanges(
  acceptRanges: string | readonly [string, ...string[]],
): string {
  const targets = isString(acceptRanges) ? [acceptRanges] : acceptRanges;

  targets.forEach((rangeUnit) => {
    if (!isToken(rangeUnit)) {
      throw TypeError(`${Msg.InvalidRangeUnit} "${rangeUnit}"`);
    }
  });

  return targets.join(", ");
}
