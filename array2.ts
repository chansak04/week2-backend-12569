const mixed: (string | number)[] = ["Alice", 1, "Bob", 2, "Charlie", 3];
console.log(mixed.length); // Output: 6

for (let i = 0; i < mixed.length; i++) {
    console.log(`Element at Index ${i}: ${mixed[i]}`);
}

for (const item of mixed) {
    console.log(`Item: ${item}`);
}

mixed.forEach((item, index) => {
    console.log(`Item & index: ${item}: ${index}`);
});