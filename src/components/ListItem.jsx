import React, { useContext, useState} from 'react';
import { APIContext } from './API';

export default function ListItem({ student }) {
  const { deleteStudent, editStudent } = useContext(APIContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(student.name);
  const [editedMobile, setEditedMobile] = useState(student.mobile);
  const [editedAddress, setEditedAddress] = useState(student.address);

  const handleDelete = () => {
    deleteStudent(student.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editStudent(student.id, {
      name: editedName,
      mobile: editedMobile,
      address: editedAddress
    });
    setIsEditing(false);
  };

  

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder='Student Name'
          />
          <br />
          <input
            type="text"
            value={editedMobile}
            onChange={(e) => setEditedMobile(e.target.value)}
            placeholder='phone number'
          />
          <br />
          <input
            type="text"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            placeholder='City'
          />
          <br />
          <button className='bg-cyan-500 hover:bg-cyan-800 p-2 rounded-lg border-spacing-0' onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>Name: {student.name}</div>
          <div>Mobile No: {student.mobile}</div>
          <div>Address: {student.address}</div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 ml-2 rounded" onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
}
