// import Students from './Students';
import StudentForm from './StudentForm';
import { useGetStudentQuery, useEditStudentMutation } from './studentSlice';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function StudentDetail() {
  const { id } = useParams();
  const { data: student, isLoading } = useGetStudentQuery(id);
  console.log('amIUndefined?:', student);
  const [editStudent] = useEditStudentMutation(student);

  // if (!isLoading) {
  //   return <p>Is Loading</p>;
  // }

  const onEdit = async (evt) => {
    evt.preventDefault();
    await editStudent();
  };

  return isLoading ? (
    <p>Is loading...</p>
  ) : (
    <>
      <h1>{student.firstName}</h1>
      <h2>{student.lastName}</h2>
      <h2>{student.email}</h2>
      <img src={student.imgaeUrl} alt={student.firstName} />
      <p>{student.gpa}</p>
      <StudentForm id={student.id} />
      {/* <form onSubmit={onEdit}>
        <label>
          First Name:
          <input
            type='text'
            value={student.firstName}
            onChange={(e) => onEdit(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type='text'
            value={student.lastName}
            onChange={(e) => onEdit(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type='email'
            value={student.email}
            onChange={(e) => onEdit(e.target.value)}
            required
          />
        </label>

        <label>
          Image Url:
          <input
            type='text'
            value={student.imageUrl}
            onChange={(e) => onEdit(e.target.value)}
            required
          />
        </label>

        <label>
          GPA:
          <input
            type='number'
            value={student.gpa}
            onChange={(e) => onEdit(e.target.value)}
            required
          />
        </label>
      </form>
      <button onClick={onEdit}>Update Student</button> */}
    </>
  );
}
