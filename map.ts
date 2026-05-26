const numbers: number[] = [1, 2, 3, 4, 5];

const doubled: number[] = numbers.map((n: number) => {
    return n * 2;
});

console.log(doubled);