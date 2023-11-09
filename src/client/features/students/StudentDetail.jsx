import Students from './Students';
import { useGetStudentQuery } from './studentSlice';
// import { useParams } from 'react-router-dom';

export default function StudentDetail({ student }) {
  // const { id } = useParams();
  // const { data: student, isLoading } = useGetStudentQuery(id);
  // console.log(student);
  // console.log('studentId:', id);
  console.log('studentDetails:', student);
  // if (isLoading) {
  //   <div>Is loading</div>;
  // }

  return (
    <>
      <h2>
        {student.firstName}, {student.lastName}
      </h2>
    </>
  );
}
