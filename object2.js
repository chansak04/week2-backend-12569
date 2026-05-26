"use strict";
const user = {
    name: "Alice",
    age: 30,
};
console.log(user); // Output: { name: 'Alice', age: 30 }
console.log(`Hello, my name is ${user.name} and I am ${user.age} years old.`); // Output: Hello, my name is Alice and I am 30 years old.
function greet(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
console.log(greet(user)); // Output: Hello, Alice! You are 30 years old.
console.log(JSON.stringify(user, null, 2)); // Output: {"name":"Alice","age":30}
