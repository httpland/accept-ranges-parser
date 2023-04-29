// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isNotEmpty, isToken, parseListFields } from "./deps.ts";
import { Msg } from "./constants.ts";
import type { AcceptRanges } from "./types.ts";

/** Parses string into {@link AcceptRanges}.
 *
 * @example
 * ```ts
 * import { parseAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/parse.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(parseAcceptRanges(`none`), ["none"]);
 * assertEquals(parseAcceptRanges(`bytes, unknown`), ["bytes", "unknown"]);
 * ```
 * @throws {SyntaxError} If the input is invalid [`<Accept-Ranges>`](https://www.rfc-editor.org/rfc/rfc9110.html#section-14.3-2) syntax.
 */
export function parseAcceptRanges(input: string): AcceptRanges {
  const acceptableRanges = parseListFields(input);
  const msg = `${Msg.InvalidSyntax} "${input}"`;

  if (!isNotEmpty(acceptableRanges)) throw new SyntaxError(msg);

  acceptableRanges.forEach((token) => {
    if (!isToken(token)) throw new SyntaxError(msg);
  });

  return acceptableRanges as AcceptRanges;
}
