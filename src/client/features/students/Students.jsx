import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewStudent from "./NewStudent";
import Student from "./Student";
import { useGetStudentsQuery } from "./studentSlice";

import "./Students.less";

/** Main interface for user to interact with their students */
export default function Students() {
  const token = useSelector(selectToken);
  const response = useGetStudentsQuery();
  console.log("studentsQuery:", useGetStudentsQuery());
  console.log("student query data:", useGetStudentsQuery().data);

  const studentList = response.data;

  if (!response.data) {
    return <div>Loading</div>;
  }

  if (!token) {
    return <p>You must be logged in to see your students.</p>;
  }

  return (
    <div className="students">
      <h1>Students</h1>
      <h2>Add New Student</h2>
      <NewStudent />
      <h2>Your Students</h2>
      {response.isLoading && <p>Loading students...</p>}
      {studentList && (
        <ul>
          {studentList.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </ul>
      )}
    </div>
  );
}
