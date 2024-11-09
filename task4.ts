{
  /*   Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine. */

  interface Book {
    title: string;
    author: string;
    price: number;
    publicationYear: number;
  }

  interface Magazine {
    title: string;
    publisher: string;
    issueNumber: number;
    publicationDate: Date;
    pages: number;
    subscriptionPrice: number;
  }

  type unionType = Book | Magazine;
  type intersectionType = Book & Magazine;

  const book: unionType = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10,
    publicationYear: 1925,
  };

  const magazine: unionType = {
    title: "Tech Monthly",
    publisher: "Tech Media",
    issueNumber: 42,
    publicationDate: new Date(),
    pages: 100,
    subscriptionPrice: 20,
  };
  const detailedPublication: intersectionType = {
    title: "Science Digest",
    author: "John Doe",
    price: 15,
    publicationYear: 2021,
    publisher: "Science Press",
    issueNumber: 3,
    publicationDate: new Date(),
    pages: 120,
    subscriptionPrice: 25,
  };
}
