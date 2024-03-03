import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const usersToCreate = [
  {
    email: "john.doe@example.com",
    name: "John Doe",
    password: "password123",
  },
  {
    email: "jane.smith@example.com",
    name: "Jane Smith",
    password: "pass@123",
  },
  {
    email: "robert.brown@example.com",
    name: "Robert Brown",
    password: "securepwd",
  },
  // Add more user objects as needed
];
async function main() {
  // Create a single user
  const user = await prisma.user.create({
    data: {
      email: "arindammajumder2020@gmail.com",
      name: "Arindam Majumder",
      password: "12345678",
    },
  });
  console.log(user);

  // Create multiple users
  const createdUsers = await prisma.user.createMany({
    data: usersToCreate,
    skipDuplicates: true, // Optional: Skip duplicate entries if any
  });
  console.log(createdUsers);

  // Find all users
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // Find a user by id
  const userById = await prisma.user.findUnique({
    where: {
      id: "84e37ff7-0f7e-41c6-9cad-d35ceb002991",
    },
  });
  console.log(userById);

  // Update a user
  const updatedUser = await prisma.user.update({
    where: {
      id: "84e37ff7-0f7e-41c6-9cad-d35ceb002991",
    },
    data: {
      name: "Arindam",
    },
  });
  console.log(updatedUser);

  // Delete a user
  const deletedUser = await prisma.user.delete({
    where: {
      id: "84e37ff7-0f7e-41c6-9cad-d35ceb002991",
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
