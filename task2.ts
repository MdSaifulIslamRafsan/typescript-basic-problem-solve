{
/* Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action. */
    

const logUserInfo  = (name : string , age: number , role?: 'admin' | 'user' | 'guest') => {
    console.log(name);
    console.log(age);
    console.log(role ?? 'no role specified for user'); 
}
logUserInfo("John Doe", 18, "admin");   
logUserInfo("Jane Smith", 22);  


}