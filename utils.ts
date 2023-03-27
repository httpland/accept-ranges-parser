// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { Token } from "./deps.ts";

const ReToken = /^[\w!#$%&'*+.^`|~-]+$/;

/** Whether the input is {@link Token} format or not.
 *
 * @example
 * ```ts
 * import { isTokenFormat } from "https://deno.land/x/accept_ranges_parser@$VERSION/utils.ts";
 * import { assert } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isTokenFormat("bytes"));
 * assert(!isTokenFormat(""));
 * ```
 */
export function isTokenFormat(input: string): input is Token {
  return ReToken.test(input);
}
