"use strict";
const employees = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "ProductManager" }
];
const employeeIntroductions = employees.map((emp) => {
    return `Name:${emp.id} ${emp.name}, Role: ${emp.role}`;
});
console.log(employees);
console.log(employeeIntroductions);
