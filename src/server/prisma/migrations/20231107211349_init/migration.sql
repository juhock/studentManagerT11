-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "gpa" DECIMAL NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Students" ("email", "firstName", "gpa", "id", "imageUrl", "lastName", "userId") SELECT "email", "firstName", "gpa", "id", "imageUrl", "lastName", "userId" FROM "Students";
DROP TABLE "Students";
ALTER TABLE "new_Students" RENAME TO "Students";
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
