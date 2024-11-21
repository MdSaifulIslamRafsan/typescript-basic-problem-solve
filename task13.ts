{
    /* 
    Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed.
    
    */

const duplicateRemove =<T>(arr : T[]) : T[] => {
    const newArray : T[] = [];
    for (const element of arr) {
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;

}

// Test the function

const array1 = [1, 2, 3, 4, 5, 2, 3, 4];
console.log(duplicateRemove(array1)); // Output: [1, 2, 3, 4, 5]

const array2 = ['apple', 'banana', 'apple', 'cherry', 'banana'];
console.log(duplicateRemove(array2)); // Output: ['apple', 'banana', 'cherry']



}