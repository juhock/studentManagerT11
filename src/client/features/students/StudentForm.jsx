import React, { useState } from 'react';
import { useEditStudentMutation } from './studentSlice';
const StudentForm = ({ id }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gpa, setGpa] = useState('');

  const { data: student, isLoading } = useEditStudentMutation();

  return <form></form>;
};

export default StudentForm;
