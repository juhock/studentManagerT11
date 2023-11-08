import { useState } from "react";
import {
  useEditStudentMutation,
} from "./studentSlice";

/** Allows user to read and update a student */
export default function Student({ student }) {
  const [editStudent] = useEditStudentMutation();


  /** Updates the student's `done` status */
  // const toggleStudent = async (evt) => {
  //   const done = evt.target.checked;
  //   editStudent({ ...student, done });
  // };

  /** Updates the student's description */
  const update = async (evt) => {
    evt.preventDefault();
    editStudent(student);
  };

 
  return (
    <li>
      <form onSubmit={update}>
      
        <label>
          First Name:
          <input
            type="text"
            value={student.firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={student.lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={student.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Image Url:
          <input
            type="text"
            value={student.imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>

        <label>
          GPA:
          <input
            type="number"
            value={student.gpa}
            onChange={(e) => setGpa(e.target.value)}
            required
          />
        </label>

        <button onClick={update} aria-label="update">
          Update
        </button>
      </form>
    </li>
  );
}
