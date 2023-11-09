import Students from './Students';
import { useGetStudentQuery } from './studentSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function StudentDetail() {
  const { id } = useParams();
  const { data: student, isLoading } = useGetStudentQuery(id);

  return isLoading ? (
    <p>Is loading...</p>
  ) : (
    <>
      <h3>
        {student.firstName}, {student.lastName}
      </h3>
      <p>
        <Link to={`/`}>Back to student list</Link>
      </p>
      <button>Remove Student</button>
    </>
  );
}
