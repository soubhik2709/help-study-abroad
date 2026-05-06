// https://dummyjson.com/users?limit=10&skip=0

export interface User {
  id: number;
  firstName: string;
  email: string;
}

export const usersData: User[] = [
  {
    id: 1,
    firstName: "John",
    email: "john@example.com",
  },
  {
    id: 2,
    firstName: "Sarah",
    email: "sarah@example.com",
  },
  {
    id: 3,
    firstName: "Mike",
    email: "mike@example.com",
  },
  {
    id: 4,
    firstName: "Emma",
    email: "emma@example.com",
  },
  {
    id: 5,
    firstName: "David",
    email: "david@example.com",
  },
  {
    id: 6,
    firstName: "Chris",
    email: "chris@example.com",
  },
];