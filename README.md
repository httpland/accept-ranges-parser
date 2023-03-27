# accept-ranges-parser

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/accept_ranges_parser)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/accept_ranges_parser/mod.ts)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/httpland/accept-ranges-parser)](https://github.com/httpland/accept-ranges-parser/releases)
[![codecov](https://codecov.io/gh/httpland/accept-ranges-parser/branch/main/graph/badge.svg)](https://codecov.io/gh/httpland/accept-ranges-parser)
[![GitHub](https://img.shields.io/github/license/httpland/accept-ranges-parser)](https://github.com/httpland/accept-ranges-parser/blob/main/LICENSE)

[![test](https://github.com/httpland/accept-ranges-parser/actions/workflows/test.yaml/badge.svg)](https://github.com/httpland/accept-ranges-parser/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@httpland/accept-ranges-parser.png?mini=true)](https://nodei.co/npm/@httpland/accept-ranges-parser/)

HTTP Accept-Ranges header field parser.

Compliant with
[RFC 9110, 14.3. Accept-Ranges](https://www.rfc-editor.org/rfc/rfc9110#section-14.3).

## Deserialization

Parses string into [AcceptRanges](#acceptranges).

```ts
import { parseAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/parse.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(parseAcceptRanges(`none`), ["none"]);
assertEquals(parseAcceptRanges(`bytes, unknown`), ["bytes", "unknown"]);
```

### Throwing error

Throws `SyntaxError` if the input is invalid
[`<Accept-Ranges>`](https://www.rfc-editor.org/rfc/rfc9110#section-14.3-2)
syntax.

```ts
import { parseAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/parse.ts";
import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

assertThrows(() => parseAcceptRanges("<invalid>"));
```

## Serialization

Serialize string of array into string.

```ts
import { stringifyAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/stringify.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(stringifyAcceptRanges(["bytes"]), "bytes");
```

### Throwing error

Throws `TypeError` if the element contains invalid
[`<range-unit>`](https://www.rfc-editor.org/rfc/rfc9110#section-14.1-3) syntax.

```ts
import { stringifyAcceptRanges } from "https://deno.land/x/accept_ranges_parser@$VERSION/stringify.ts";
import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

assertThrows(() => stringifyAcceptRanges(["<invalid>", "none"]));
```

## AcceptRanges

`AcceptRanges` is a subtype of array with the following characteristics.

- It has one or more elements.
- The elements are [Token](#token).

### Token

Represents a character set that compliant with
[RFC 9110, 5.6.2. Tokens](https://www.rfc-editor.org/rfc/rfc9110#section-5.6.2)
as much as possible.

## API

All APIs can be found in the
[deno doc](https://doc.deno.land/https/deno.land/x/accept_ranges_parser/mod.ts).

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license
