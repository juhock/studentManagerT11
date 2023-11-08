const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.create({
    data: {
      username: "foo",
      password: "bar",
      students: {
        create: [
            { firstName: "Scott", lastName:"Bobbert", email: "xyz@gmail.com", imageUrl: "www.google.com", gpa: 4.0 },
            { firstName: "Julia", lastName:"Bobbert", email: "zyx@gmail.com", imageUrl: "www.google.com", gpa: 4.0 },
            { firstName: "Yingshi", lastName:"Bobbert", email: "zxy@gmail.com", imageUrl: "www.google.com", gpa: 4.0 }
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
