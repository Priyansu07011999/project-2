import React, { useContext } from 'react';
import { APIContext } from './API';

function StudentCount() {
  const { students } = useContext(APIContext);
  const studentCount = students.length;

  return <p>Total students: {studentCount}</p>;
}

export default StudentCount;