# 0x00-TypeScript
TypeScript is AWESOME!!

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

## Learning Objectives
- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript

### Basic types in Typescript
[Read the official documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)
The basic types in typescript are
- Boolean
  Simple true/false value
- Number: all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint.TypeScript also supports binary and octal literals as of ECMA2015
- String: either in single or double quotes, or template strings
- Array there are two ways:
    ```
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```
- Tuple: Express an array with a fixed # of elements whose types are known but need not be the same.
  Ex. with a pair of string and number
```
  // Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.

// additionally when accessing an element with a known index, the correct type is retrieved.
console.log(x[0].substring(1));

console.log(x[1].substring(1));
Property 'substring' does not exist on type 'number'.
```
- Enum: an enum is a way of giving more friendly names to sets of numeric values
```enum Color { Red, Green, Blue } let c: Color = Color.Green```
- Unknown & any: The unknown type is for when you're not sure what type of variable you're using or want to accept all values in our API. the 'any' type does mostly the same thing, but unlike known, variables of type 'any' allow you to access arbitrary properties, even ones that don't exist.
- void: void is like the opposite of any: the absence of having any type at all. Used for gthe return type of functions that do not return a value
- Null and Undefined: null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
- Never: The never type represents the type of values that never occer. The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

Some examples of functions returning never:
```
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```
- Object: a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

### - Interfaces, Classes, and functions
Interfaces are declarations of the shape that values can have. Sometimes called 'duck typing' or 'structural subtyping'. Here's an interface from task 0, which asks to write an interface with 4 'required' values: first & last name, age, and location.
```
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
```
here's one from task 1, creating a teacher interface, similar to the student, this time with the 'readonly' keyword, which declares a variable as read-only, and yearsOfExperience has the '?:' syntax, indicating that it is an optional variable.
```
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}
```
A cool thing that interfaces can do use inheritance to extend previous versions, here's a director, extending a teacher interface
```
export interface Directors extends Teacher {
    numberOfReports: number;
}
```
Here's a class that can be constructed with StudentConstructor, that implements StudentClassInterface, ensuring that it can only be created with at least a first and last name, and it will always have a workOnHomework and a displayName function that return strings. (Comprehensive!)
```
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
```

### How to work with the DOM and Typescript
Working with the DOM and Typescript is mostly just declaring the types of DOM elements being used within your Typescript correctly.
Here's a snippet of code that allows me to work with HTML elements like a table by declaring the types 'HTMLTableElement, HTMLTableCellElement' and grabbing them from the document namespace.
```
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
```

### Generic Types
[Here's the official doc page on Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics)
Honestly this one's over my head. Work with your typescript compiler to correctly type what needs be typed, most of the time it can infer what's going on.

### How to merge declarations
[Here's the official doc page on Declaration Merging]([Here's the official doc page on Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics)

Interfaces can have the same name and they'll be magically joined together like in this example
```
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };
```
and here's basically the same thing in merging namespaces!
```
namespace Animals {
  export class Zebra {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}
is equivalent to:

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Zebra {}
  export class Dog {}
}
```
note that non-exported members are only available in the original namespace, which is illustrated by this example error
```
namespace Animal {
  let haveMuscles = true;
  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles; // Error, because haveMuscles is not accessible here
  }
}
```
Disallowed Merges
Not all merges are allowed in TypeScript. Currently, classes can not merge with other classes or with variables.

### How to use an ambient Namespace to import an external library

the .d.ts file contains type declarations that your program may need in order for typescript to verify it. Sometimes when importing a library, you need to create an ambient file, typically `${LIBRARY}.d.ts` that contains the type declarations for each function within the library. This is so that Typescript understands what the library is trying to do.

See this example in task_3, which has us importing a library called 'crud.js', which we do not have type declarations for. An ambient file, 'crud.d.ts' was created and the functions for 'crud.js' were given type declarations. Now the functions are available for use within the project, the 'ambience' of the type declaration file identifies the functions to the typescript compiler.
```
// crud.js
export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }

  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }

  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);

    return rowId;
  }

// ./interface
export type RowID = number;

export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

// crud.d.ts
import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
```
### Basic nominal typing with Typescript

Typescript's typing system is 'structural' meaning that it's better to think of a type as a *set of values* that share something in common. Because types are just sets, a particular value can belong to *many* sets at the same time.

In C#, it's awkward to pass around a value that is either a 'string' or 'int', because there isn't a single type that represents this sort of value. In TypeScript, this becomes very natural once you realize that every type is just a set. How do you describe a value that either belongs in the 'string' set or the 'number' set? It simply belongs to the union of those sets: 'string | number'.

However, there are real-world use cases for a system where you want two variables to be differentiated because they have a different type name even if they have the same structure. A very common use case is identity structures (which are generally just strings with semantics associated with their name in languages like C#/Java).

[Here is a list of ways to do that](https://basarat.gitbook.io/typescript/main-1/nominaltyping)

They mostly involve creating a private variable that holds different 'ids' for each type of variable. This is demonstrated in task_5, as we settle the summations of Major and Minor credits at a college
```
export interface MajorCredits {
    _brand: 'major';
    credits: number;
}

export interface MinorCredits {
    _brand: 'minor';
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return {
        credits: subject1.credits + subject2.credits
    } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return {
        credits: subject1.credits + subject2.credits
    } as MinorCredits;
}

// credit: number
```
Even though Major and MinorCredits are of the same shape, they each have a _brand that differentiates them. So they cannot be used interchangably because their _brands are different.