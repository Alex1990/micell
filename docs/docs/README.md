---
sidebar: auto
---
# Docs

## char

### isAlphabetic

```js
isAlphabetic(ch)
```

Detect a character whether it is one of a-z or A-Z.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isAlphabetic('a');
// => true

isAlphabetic('1');
// => false
```

### isAlphanumeric

```js
isAlphanumeric(ch)
```

Detect a character whether it is one of a-z or A-Z or 0-9.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isAlphanumeric('a');
// => true

isAlphanumeric('1');
// => true

isAlphanumeric('*');
// => false
```

### isASCII

```js
isASCII(ch)
```

Detect a character whether it is an ASCII character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isASCII('a');
// => true

isASCII('1');
// => true

isASCII('你');
// => false
```

### isCJK

```js
isCJK(ch)
```

Detect a character whether it is a CJK (Chinese, Japanese and Korean) character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isCJK('你');
// => true

isCJK('の');
// => true
```

### isControl

```js
isControl(ch)
```

Detect a character whether it is a [control character](https://en.wikipedia.org/wiki/Control_character).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isControl('\t');
// => true

isControl('\r');
// => true
```

### isDigit

```js
isDigit(ch)
```

Detect a character whether it is a decimal digit (0-9).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isDigit('0');
// => true

isDigit('1');
// => true
```

### isGraph

```js
isGraph(ch)
```

Detect a character whether it is a [graphic character](https://en.wikipedia.org/wiki/Graphic_character).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isGraph('0');
// => true

isGraph('a');
// => true
```

### isHexadecimal

```js
isHexadecimal(ch)
```

Detect a character whether it is a hexadecimal character (0-9, a-f, A-F).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isHexadecimal('0');
// => true

isHexadecimal('a');
// => true

isHexadecimal('A');
// => true
```

### isLower

```js
isLower(ch)
```

Detect a character whether it is a lower-case character (a-z).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isLower('a');
// => true
```

### isPrint

```js
isPrint(ch)
```

Detect a character whether it is a [printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isPrint('a');
// => true
```

### isPunctuation

```js
isPunctuation(ch)
```

Detect a character whether it is a punctuation character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isPunctuation(',');
// => true
```

### isSpace

```js
isSpace(ch)
```

Detect a character whether it is a space character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isSpace(' ');
// => true
```

### isUpper

```js
isUpper(ch)
```

Detect a character whether it is a upper-case character (A-Z).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Return**

* **(Boolean)**

**Example**

```js
isUpper('a');
// => true
```

## cookie

### get

```js
get(key)
```

**Arguments**

* **key (String)**

**Return**

* **(String)**

### getAll

```js
getAll()
```

**Return**

* **(Object)**

### getJson

```
getJson(key)
```

**Arguments**

* **key (String)**

**Return**

* **(String)**

### getRaw

```
getRaw(key)
```

**Arguments**

* **key (String)**

**Return**

* **(String)**

### isEnabled

```js
isEnabled()
```

**Return**

* **(Boolean)**

### remove

```js
remove(key, options)
```

**Arguments**

* **key (String)**
* **options (Object)**

### set

```js
set(key, value, options)
```

**Arguments**

* **key (String)**
* **value (String)**
* **options (Object)**

### setJson

```js
set(key, value, options)
```

**Arguments**

* **key (String)**
* **value (Any)**
* **options (Object)**

### setRaw

```js
set(key, value, options)
```

**Arguments**

* **key (String)**
* **value (String)**
* **options (Object)**

## date

### diff

```js
diff(date1, date2, unit, roundFunc)
```

Compute the difference of the specified period unit between two dates.

**Arguments**

* **date1 (Number|Date|String)**: A timestamp number, a Date object or a parsable date string.
* **date2 (Number|Date|String)**: A timestamp number, a Date object or a parsable date string.
* **unit (String)**: A string specifies the peroid unit, default is `"ms"`. See unit table.
* **roundFunc (Function)**: A round function, default is `Math.round`.

**Return**

* **(Number)**

**Unit table**

| Unit value | Representation |
| ---------- | -------------- |
| Y | Years |
| M | Months |
| D | Days |
| h | hours |
| m | minutes |
| s | seconds |
| ms | milliseconds |

**Example

```js
const date1 = new Date(2019, 1, 10, 0, 0, 0);
const date2 = '2019-01-01 00:00:00';
diff(date1, date2);
// => 3456000000
diff(date1, date2, 'D')
// => 40
```

### format

```js
format(date, format, isUTC)
```

**Arguments**

* **date (Date|Number)**: A Date object or a timestamp number.
* **format (String)**: A string of tokens, which is subset of the [moment format tokens](http://momentjs.com/docs/#/displaying/format/). see below table.
* **isUTC (Boolean)**: Use the UTC time, default is `false`.

**Return**

* **(String)**

**Format tokens**

| Token | Output |
| ----- | ------ |
| YY | 70 71 ... 18 19 |
| YYYY | 1970 1971 ... 2018 2019 |
| M | 1 2 ... 11 12 |
| MM | 01 02 ... 11 12 |
| D | 1 2 ... 30 31 |
| DD | 01 02 ... 30 31 |
| H | 0 1 ... 22 23 |
| HH | 00 01 ... 22 23 |
| h | 1 2 ... 11 12 |
| hh | 01 02 ... 11 12 |
| m | 1 2 ... 58 59 |
| mm | 01 02 ... 58 59 |
| s | 1 2 ... 58 59 |
| ss | 01 02 ... 58 59 |

**Example**

```js
const date = new Date(1970, 0, 1, 13, 1, 1);
format(date, 'YYYY-MM-DD HH:mm:ss');
// => "1970-01-01 13:01:01"
format(date, 'YYYY-M-D h:m:s');
// => "1970-1-1 1:1:1"
```

### timeAgo

```js
timeAgo.format(date, locale, nowDate)
```

**Arguments**

* **date (Number|Date|String)**: A timestamp, a Date object or a parsable date string.
* **locale (String)**: the locale, "en_US" (default) and "zh_CN" are builtins supported.
* **nowDate (Date)**: The base date.

**Return**

* **(String)**

**Example**

```js
const d = new Date();
d.setMinutes(d.getMinutes() - 10);
timeAgo.format(d);
// => "10 minutes ago"

timeAgo.format(d, 'zh_CN');
// => "10 分钟前"
```

## dom

### clientX

```js
clientX(elem)
```

Get the difference between the left edge of an element and the left edge of viewport.

**Arguments**

* **elem (Element)**: An element.

**Return**

* **(Number)**

**Example**

```js
const el = document.getElementById('el');
const x = clientX(el);
// x => 100
```

### clientY

```js
clientY(elem)
```

Get the difference between the top edge of an element and the top edge of viewport.

**Arguments**

* **elem (Element)**: An element.

**Return**

* **(Number)**

**Example**

```js
const el = document.getElementById('el');
const y = clientY(el);
// y => 100
```

### createEvent

```js
createEvent(type, options)
```

Create a custom event.

**Arguments**

* **type (String)**: The event type.
* **options (String)**: The event options.
  + **options.bubbles (Boolean)**:
  + **options.cancelable (Boolean)**:
  + **options.detail (Any)**

**Return**

* **(Event)**

**Example**

```js
const btn = document.getElementById('btn');
const event = createEvent('click');

btn.dispatchEvent(event);
```

## domReady

```js
domReady(callback)
```

Defer the execution of the `callback`, which will be executed in `DOMContentLoaded` event.
If the `DOMContentLoaded` has triggered, then the `callback` will be executed in next event loop.

**Arguments**

* **callback (Function)**

**Example**

```js
domReady(function () {
  // ...
});

// You can use it multiple times.
domReady(function () {
  // other callback
});
```


### insertScript

```js
insertScript(url, props)
```

Insert a `<script>` to document.

**Arguments**

* **url (String)**: The `script.src` string.
* **props (Object)**: The `<script>` element properties.

### isElement

```js
isElement(obj)
```

Check if the argument is an element.

**Arguments**

* **obj (Any)**: Any value.

**Return**

* **(Boolean)**

### isInViewport

```js
isInViewport(el)
```

Check if an element is in the viewport.

**Arguments**

* **el (Element)**: An element.

**Return**

* **(Boolean)**

### isWindow

```js
isWindow(obj)
```

Check if a value is window object.

**Arguments**

* **obj (Any)**: Any value.

**Return**

* **(Boolean)**

### pageX

```js
pageX(el)
```

Return the horizontal distance of an element to the left edge of the page.

**Arguments**

* **el (Element)**

**Return**

* **(Number)**

**Example**

```js
const el = document.getElementById('el')
pageX(el)
```

### pageY

```js
pageY(el)
```

Return the vertical distance of an element to the left edge of the page.

**Arguments**

* **el (Element)**

**Return**

* **(Number)**

**Example**

```js
const el = document.getElementById('el')
pageY(el)
```

### scrollX

```js
scrollX(elOrWindow)
```

Get the horizontal scroll distance of an element or a window.

**Arguments**

* **elOrWindow (Element | Window)**: An element or a window.

**Return**

* **(Number)**

**Example**

```js
// Return the window scrollX if no argument is passed
scrollX();

const el = document.getElementById('el')
scrollX(el);
```

### scrolY

```js
scrollY(elOrWindow)
```

Get the horizontal scroll distance of an element or a window.

**Arguments**

* **elOrWindow (Element | Window)**: An element or a window.

**Return**

* **(Number)**

**Example**

```js
// Return the window scrollY if no argument is passed
scrollY();

const el = document.getElementById('el')
scrollY(el);
```

### viewport

```js
viewport(elOrWindow)
```

Get the width and height of the viewport of an element or a window.

**Arguments**

* **elOrWindow (Element | Window)**: An element or a window.

**Return**

* **(Object)**

**Example**

```js
viewport();
// => { width: 1920, height: 900 }
```

## lang

### isArray

```js
isArray(value)
```

Check if a value is an Array.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isArray([]);
// => true
```

### isBoolean

```js
isBoolean(value)
```

Check if a value is a Boolean.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isBoolean(true);
// => true
```

### isDate

```js
isDate(value)
```

Check if a value is a Date object.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isDate([]);
// => true
```

### isError

```js
isError(value)
```

Check if a value is an Error object.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isError(new Error('error message'));
// => true
```

### isFunction

```js
isFunction(value)
```

Check if a value is a function, including generator function and async function.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isFunction(function () {});
// => true

isFunction(function* () {});
// => true
```

### isNil

```js
isNil(value)
```

Check if a value is `null` or `undefined`.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isNil(null);
// => true
isNil(undefined);
// => true
```

### isNull

```js
isNull(value)
```

Check if a value is `null`

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isNull(null);
// => true
```

### isNumber

```js
isNumber(value)
```

Check if a value is a Number.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isNumber(1);
// => true
```

### isObject

```js
isObject(value)
```

Check if a value is an Object.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isObject({});
// => true
isObject(null);
// => false
```

### isRegExp

```js
isRegExp(value)
```

Check if a value is a RegExp object.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isRegExp(/\s+/);
// => true
```

### isString

```js
isString(value)
```

Check if a value is a String.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isString('hello world');
// => true
```

### isUndefined

```js
isUndefined(value)
```

Check if a value is `undefined`.

**Arguments**

* **value (any)**

**Return**

* **(Boolean)**

**Example**

```js
isUndefined(void 0);
// => true
```

## path

### basename

```js
basename(str)
```
Return the last part of the path string.

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
basename('/foo/bar');
// => "bar"
```

### dirname

```js
dirname(str)
```

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
dirname('/foo/bar');
// => "/foo"
```

### extname

```js
extname(str)
```

Return the extension name of the path.

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
extname('/foo/bar.txt');
// => ".txt"
```

## qs

### get

```js
get(name)
```

**Arguments**

* **name (String)**

**Return**

* **(String|Array\<String\>)**

**Example**

```js
// location.search = '?hello=world'
getQuery('hello');
// => "world"


// location.search = '?fruits=apple&fruits=orange'
getQuery('fruits');
// => ["apple", "orange"]
```

### parse

```js
parse(search)
```

**Arguments**

* **search (String)**

**Return**

* **(Object)**

### stringify

```js
stringify(query)
```

**Arguments**

* **query (Object)**

**Return**

* **(String)**

## regex

### isAscii

```js
isAscii(str)
```

Check if a string contains the ASCII characters only.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isAscii('hello world');
// => true
```

### isDecimal

```js
isDecimal(str)
```

Check if a string is a decimal number.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isDecimal('1');
// => true
isDecimal('3.14');
// => true
```

### isDigit

```js
isDigit(str)
```

Check if a string contains the digits (0-9) only.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isDigit('0123');
// => true
```

### isDomain

```js
isDomain(str)
```

Check if a string is an http(s) domain.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isDomain('https://example.com');
// => true
```

### isEmail

```js
isEmail(str)
```

Check if a string is an email address.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isEmail('alexchao1990@gmail.com');
// => true

isEmail('alexchao1990+github@gmail.com');
// => true
```

### isHexColor

```js
isHexColor(str)
```

Check if a string is an hex color value.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isHexColor('#f50');
// => true

isHexColor('#ff5500');
// => true

isHexColor('#FF5500');
// => true
```

### isHsl

```js
isHsl(str)
```

Check if a string is an HSL value.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isHsl('hsl(100, 50, 50)');
// => true

isHsl('HSL(100, 50, 50)');
// => true
```

### isHsla

```js
isHsla(str)
```

Check if a string is an HSLA value.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isHsla('hsla(100, 50, 50, 0.5)');
// => true

isHsla('HSLA(100, 50, 50, 0.5)');
// => true
```

### isInteger

```js
isInteger(str)
```

Same as `isDigit`. Check if a string contains the digits only.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isInteger('0123');
// => true
```

### isIP

```js
isIP(str)
```

Check if a string is an IP (v4 or v6) address.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isIP('192.0.0.1');
// => true

isIP('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

### isIPv4

```js
isIPv4(str)
```

Check if a string is an IP (v4) address.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isIPv4('192.0.0.1');
// => true
```

### isIPv6

```js
isIPv6(str)
```

Check if a string is an IP (v4) address.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isIPv6('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

### isQQ

```js
isQQ(str)
```

Check if a string is a QQ id.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isQQ('10000');
// => true
```

### isRealNumber

```js
isRealNumber(str)
```

Check if a string is a real number.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isRealNumber('0.12');
// => true

isRealNumber('1.2e10');
// => true

isRealNumber('1.2e-10');
// => true
```

### isRgb

```js
isRgb(str)
```

Check if a string is a RGB value.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isRgb('rgb(255, 255, 255)');
// => true

isRgb('RGB(255, 255, 255)');
// => true
```

### isRgba

```js
isRgba(str)
```

Check if a string is a RGBA value.

**Arguments**

* **str (string)**

**Return**

* **(Boolean)**

**Example**

```js
isRgb('rgba(255, 255, 255, 0.5)');
// => true

isRgb('RGBA(255, 255, 255, 0.5)');
// => true
```

## string

### countLines

```js
countLines(str)
```

Count the number of lines separated by `"\n"`.

**Arguments**

* **str (String)**

**Return**

* **(Number)**

**Example**

```js
const str = `hello
world
1`;
countLines(str);
// => 3
```

### escapeRegexp

```js
escapeRegexp(str)
```

Escape the special characters in regular expression.

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
escapeRegexp('a-z');
// => "a\-z"
```

### firstChar

```js
firstChar(str)
```

Return the first character of a string.

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
firstChar('hello');
// => "h"
```

### isValidJSON

```js
isValidJSON(str)
```

Check if a string is a valid JSON string.

**Arguments**

* **str (String)**

**Return**

* **(Boolean)**

**Example**

```js
isValidJSON('{"name": "Alex Chao"}');
// => true

isValidJSON('""');
// => true
```

### lastChar

```js
lastChar(str)
```

Return the last character of a string.

**Arguments**

* **str (String)**

**Return**

* **(String)**

**Example**

```js
lastChar('hello');
// => "o"
```

### truncate

```js
truncate([str = ''], [options = {}])
```

Return a truncated string end with the specified omission.

**Arguments**

* **[str = ''] (String)**: The string to be truncated.
* **[options = {}] (Object)**: The options object.
  + **[length] (Number)**: The maxmium string length. It is the `str` length by default.
  + **[omission = '...'] (String)**: The omission string.
  + **[countType = 0] (Number)**: How to count the half width and full width characters.
    - `0`: Count 1 for each character.
    - `1`: Count 1 for half width and count 2 for full width.
    - `2`: Count 0.5 for half width and count 1 for full width.

**Return**

* **(String)**

**Example**

```js
const str = 'hello, 你好，world!世界！';
truncate(str);
truncate(str, { length: 10 });
truncate(str, { omission: '***' });
truncate(str, { length: 10, countType: 1 });
```

## ua

### isWindows

```js
isWindows()
```

Check if the os is Windows.

**Return**

* **(Boolean)**

### isMacOS

```js
isMacOS()
```

Check if the os is macOS.

**Return**

* **(Boolean)**

### isLinux

```js
isLinux()
```

Check if the os is Linux.

**Return**

* **(Boolean)**

### isAndroid

```js
isAndroid()
```

Check if the os is Android.

**Return**

* **(Boolean)**

### isIOS

```js
isIOS()
```

Check if the os is iOS.

**Return**

* **(Boolean)**

### isMobile

```js
isMobile()
```

Check if the os is a mobile system.

**Return**

* **(Boolean)**

### isTablet

```js
isTablet()
```

Check if the os is a tablet system.

**Return**

* **(Boolean)**

### isWechat

```js
isWechat()
```

Check if the environment is Wechat.

**Return**

* **(Boolean)**

### isIPhone

```js
isIPhone()
```

Check if the environment is iPhone.

**Return**

* **(Boolean)**

### isIPad

```js
isIPad()
```

Check if the environment is iPad.

**Return**

* **(Boolean)**

## ajax

```js
ajax(url, options)
```

**Arguments**

* **url (String)**
* **options (Object)**
  + **options.async (Boolean)**
  + **options.beforeSend (Function)**
  + **options.data (String | Object)**
  + **options.headers (Object)**
  + **options.method (String)**
  + **options.responseType (String)**
  + **options.timeout (Number)**

**Return**

* **(Promise)**

## css

```js
css(el, prop)
```

**Arguments**

* **el (Element)**
* **prop (String)**

**Return**

* **(String | Object)**

## delay

```js
delay(duration)
```

**Arguments**

* **duration (Number)**

**Return**

* **(Promise)**

## jsonp

```js
jsonp(url, options)
```

**Arguments**

* **url (String)**
* **options (Object)**
  + **options.callback (String)**
  + **options.responseType (String)**
  + **options.timeout (Number)**

**Return**

* **(Promise)**

## noop

```js
noop()
```

## numberFormat

```js
numberFormat(number, digits, dot, sep)
```

**Arguments**

* **number (Number)**
* **digits (Number)**
* **dot (String)**
* **sep (String)**

**Return**

* **(String)**

## randomString

```js
randomString(len, chars)
```

Return a random string which consists of the characters specified by `chars`.

**Arguments**

* **len (Number)**: The length of random string, default is `32`.
* **chars (String)**: The character set, default is lower letters, upper letters and digits.

**Return**

* **(String)**

**Example**

```js
randomString();

// Generate an 8 length string.
randomString(8);

// Generate a random digit string.
randomString(undefined, '0123456789');
```

## uuid

```js
uuid()
```

**Return**

* **(String)**