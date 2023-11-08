const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access students. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Sends all students */
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.students.findMany( 
    //   {
    //   where: { userId: res.locals.user.id },
    // }
    ) 
    res.json(students);
  } catch (err) {
    next(err);
}
});


//todo 
/** Creates new student and sends it */
router.post("/", async (req, res, next) => {
  try {
    const { description, done } = req.body;
    if (!description) {
      throw new ServerError(400, "Description required.");
    }

    const task = await prisma.task.create({
      data: {
        description,
        done: done ?? false,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

//todo
/** Checks if student exists and belongs to given user */
const validateStudent = (user, student) => {
  if (!student) {
    throw new ServerError(404, 'Student not found.');
  }
  console.log('userId:', user.id);
  console.log('studentId:', student.userId);
  if (student.userId !== user.id) {
    throw new ServerError(403, 'This student does not belong to you.');
  }
};
/** Sends single student by id */
router.get('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;
    const student = await prisma.students.findUnique({ where: { id } });
    validateStudent(res.locals.user, student);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

//todo
/** Updates single student by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { description, done } = req.body;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { description, done },
    });
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

//todo
/** Deletes single student by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    await prisma.task.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
