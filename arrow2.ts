// (Traditional Function vs Arrow Function)
// function add(a: number, b: number): number {
//     return a + b;
// }

//แบบปกติ Arrow Function (Block body)
// const add = (a: number, b: number): number => {
//     return a + b;
// };

const add = (a: number, b: number): number => a + b; //แบบย่อ Implicit return

const sum: number = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${sum}`);