
# Object

`read` Returns the input object if it's a valid object, otherwise undefined.

`readKey` Extracts a specific key from an object. Returns the corresponding value if the key exists, otherwise undefined.
## Usage/Examples

```javascript
import { Obj } from '@brizy/readers'

const obj = { name: "John", age: 30 };

// read
Obj.read(obj); // { name: "John", age: 30 }
Obj.read("This is a string"); // undefined

// readKey
const getName = Obj.readKey("name");
const getEmail = Obj.readKey("email");

getName(obj); // "John"
getEmail(obj); // undefined

```

# String

`read` Returns the input string or undefined.

## Usage/Examples

```javascript
import { Str } from '@brizy/readers'

Str.read("hello"); // "hello"
Str.read(123); // "123"
Str.read([]); // undefined

```

# Pipe

## Usage/Examples

```javascript
import { pipe } from '@brizy/readers'

const add = (x: number, y: number) => x + y;
const square = (x: number) => x * x;
const increment = (x: number) => x + 1;

const compute = pipe(add, square, increment);

const result = compute(2, 3); // result is (2 + 3)^2 + 1 = 26

```

# Number

`read` Returns the input number or undefined.

## Usage/Examples

```javascript
import { Num } from '@brizy/readers'

Num.read("hello"); // undefined
Num.read(123); // "123"
Num.read([]); // undefined
Num.read(1.2); // 1.2
Num.read("1.2"); // 1.2
Num.read("1,2"); // undefined

```

# Json

`read` Returns the input json or undefined.

## Usage/Examples

```javascript
import { Json } from '@brizy/readers'

Json.read({}); // undefined 
Json.read("{}"); // {} 
Json.read("{\"a\":\"a\",\"n\":5}"); // { a: "a", n: 5 }
Json.read(1); // undefined 
Json.read("1"); // 1 
Json.read("[1,\"a\"]"); // [1, "a"] 
Json.read(""); // undefined
Json.read({ a: "a" }); // undefined
```

# Bool

`read` Returns the true/false or undefined

## Usage/Examples

```javascript
import { Bool } from '@brizy/readers'

Bool.read("text")); //undefined
Bool.read("1,2")); // undefined
Bool.read(1)); // undefined
Bool.read(false)); // false
Bool.read(true)); // true
Bool.read(4 === 4)); // true
Bool.read(4 !== 4)); // false
```

# Array

`read` Returns the input array or undefined
`readWithItemReader` Function is a higher-order reader function that takes another reader function (itemReader) and applies it to each element of the input array. It returns an array containing the results of applying the itemReader function to each element of the input array or undefined if one of itemReaders returned undefined

## Usage/Examples

```javascript
import { Arr, Num, Str } from '@brizy/readers'

Arr.read("[4]")); //undefined
Arr.read(1)); // undefined
Arr.read(2.3)); // undefined
Arr.read([]); // [];
Arr.read([1, 2, 3]); // [1, 2, 3]
Arr.read(["a", "b", "c"]); // ["a", "b", "c"]
Arr.read([{}, 123]); // [{}, 123]

Arr.readWithItemReader(Str.read)([]); // []
Arr.readWithItemReader(Num.read)([]); // []
Arr.readWithItemReader(Str.read)(["a", "b"]); // ["a", "b"]
Arr.readWithItemReader(Str.read)(["a", {}]); // undefined
Arr.readWithItemReader(Num.read)([1, 2, 3]); // [1, 2, 3]
Arr.readWithItemReader(Num.read)([1, "a", 2, 3]); // undefined
```





