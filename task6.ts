{
/*  Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments. */

const sum = (...num : number[]) => {
  return num.reduce((acc, current) => acc + current , 0)
}
console.log(sum(1, 2, 3, 4, 5)) 

}