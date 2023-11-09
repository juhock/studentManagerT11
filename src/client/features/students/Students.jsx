import { useSelector } from 'react-redux';
import { selectToken } from '../auth/authSlice';
import NewStudent from './NewStudent';
import { useGetStudentsQuery } from './studentSlice';
import { Link } from 'react-router-dom';

import './Students.less';

/** Main interface for user to interact with their students */
export default function Students() {
  const token = useSelector(selectToken);
  const { data: response, isLoading } = useGetStudentsQuery();
  // const [deleteStudent] = useDeleteStudentMutation();
  console.log(response);

  // console.log('studentsQuery:', useGetStudentsQuery());
  // console.log('student query data:', useGetStudentsQuery().data);

  // const studentList = response.data;
  // console.log('studentList:', studentList);

  /** Deletes the student */
  // const onDelete = async (evt) => {d
  //   evt.preventDefault();
  //   deleteStudent(student.id);
  // };

  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  if (!token) {
    return <p>You must be logged in to see your students.</p>;
  }

  return isLoading ? (
    <p>is loading..</p>
  ) : (
    <div className='students'>
      <h1>Students</h1>
      <h2>Add New Student</h2>
      <NewStudent />
      <h2>Your Students</h2>
      <ul>
        {response.map((student) => (
          <li key={student.id}>
            {' '}
            <Link to={`/students/${student.id}`}>{student.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
