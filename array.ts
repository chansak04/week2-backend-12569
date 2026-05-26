const names: string[] = ["Alice", "Bob", "Charlie", "David"];
// const numbers: number[] = [1, 2, 3, 4, 5];
// const mixed: (string | number)[] = ["Alice", 30, "Bob", 25, "Charlie", 35];

for (const name of names) {
    console.log(`Name: ${name}`);
}

for (let i = 0; i < names.length; i++) {
    console.log(`Name at Index: ${i}: ${names[i]}`);
}

names.forEach((name , index) => {
    console.log(`Name: ${name}, Index: ${index}`);
});

console.log(names); // Output: ["Alice", "Bob", "Charlie", "David"]
console.log(names[0]); // Output: "Alice"
console.log(names.length); // Output: 4