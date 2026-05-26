interface Employee {
    id: number;
    name: string;
    role: string;
}

const employees: Employee[] = [
    {id: 1, name: "Alice", role: "Developer"},
    {id: 2, name: "Bob", role: "Designer"},
    {id: 3, name: "Charlie", role: "ProductManager"}
];

const employeeIntroductions: string[] = employees.map((emp: Employee) => {
    return `Name:${emp.id} ${emp.name}, Role: ${emp.role}`;
});

console.log(employees);
console.log(employeeIntroductions);