{
  /* Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
 */

  type Person = {
    name: string;
    address: string;
    hire: "black" | "white" | "brown" | "red";
    eye: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMember: number;
    job: string;
    skills: string[];
    maritalStatus: "single" | "married";
    friend: string[];
  };

  const person: Person = {
    name: "John Doe",
    address: "Dhaka , Bangladesh",
    hire: "black",
    eye: "black and white",
    income: 20000,
    expense: 15500,
    hobbies: ["reading", "writing", "programming", "licensing"],
    familyMember: 4,
    job: "web developer",
    skills: ["html", "javascript", "react", "node js"],
    maritalStatus: "single",
    friend: ["ratul", "roki"],
  };
}
