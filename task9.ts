{
/* Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining. */

interface Employee {
    name: string;
    address?: {
        city?: string;
    }
}

const getEmployeeCity = (employee : Employee ) : string | undefined => {
    return employee?.address?.city;
}
const employeeWithCity: Employee = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

const employeeWithoutCity: Employee = {
    name: "Bob",
    address: {}
};

const employeeWithoutAddress: Employee = {
    name: "Charlie"
};

console.log(getEmployeeCity(employeeWithCity));       // Output: "New York"
console.log(getEmployeeCity(employeeWithoutCity));    // Output: undefined
console.log(getEmployeeCity(employeeWithoutAddress)); // Output: undefined
}