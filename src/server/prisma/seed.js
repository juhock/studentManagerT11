const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.create({
    data: {
      username: "foo",
      password: "bar",
      students: {
        create: [
          { firstName: "Bob", lastName:"Bobbert", email: "x@gmail.com", imageUrl: "www.google.com", gpa: 3.0 },
          { description: "task 2" },
          { description: "task 3" },
        ],
      },
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
