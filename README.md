# TypeScript type error not caught at compile time

This bug demonstrates a scenario where a type error in a TypeScript function call is not caught at compile time. The compiler should issue a warning or error when incompatible types are used in a function call. 

## Bug Description

The `add` function is defined to take two numbers as arguments and return a number. However, in the example, the function is called with a string and a number as arguments.  The TypeScript compiler should ideally catch this type mismatch, but it doesn't. This leads to a runtime error.

## Bug Reproduction

1. Compile the `bug.ts` file using the TypeScript compiler.
2. Run the resulting JavaScript code.
3. Observe the runtime error.

## Solution

The solution involves more robust type checking in the function call or stricter type checking configurations.
