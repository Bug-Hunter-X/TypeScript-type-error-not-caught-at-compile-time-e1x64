function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type. Both parameters must be numbers.');
  }
  return a + b;
}

const result1 = add("hello", 5); // Type error, but not caught at compile time.  Will cause runtime error
console.log(result1); //Runtime error

const result2 = addSafe(10,5); // No Error
console.log(result2);

const result3 = addSafe("hello",5); // throws an error
console.log(result3); 