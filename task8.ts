{
/*     Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user. */

interface User {
    name : string;
    email: string;
}

interface Admin {
    adminLevel: number;
}
type AdminLevel = User & Admin;
function describeAdmin(user: AdminLevel): string{
    return `${user.name} (Email: ${user.email}) is an admin with level ${user.adminLevel}.`;
}

const admin: AdminLevel = {
    name: "John Doe",
    email: "john.doe@example.com",
    adminLevel: 5
  };
  
  console.log(describeAdmin(admin)); 

}