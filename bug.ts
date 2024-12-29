function add(a: number, b: number): number {
  return a + b;
}

const result = add("hello", 5); // Type error, but not caught at compile time
console.log(result);