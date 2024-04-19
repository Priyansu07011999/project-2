import React, {useContext} from 'react'
import ListItem from './ListItem'
import { APIContext } from './API'

function StudentList() {
  const { students } = useContext(APIContext);

  return (
    <div>

      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <ListItem key={student.id} student={student} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
