// APIContext.js
import React, { createContext, useState } from 'react';


export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  let id = 1;

  const addStudent = () => {
    const newStudent = {
      id: id++,
      name,
      mobile,
      address,
    };
    setStudents([...students, newStudent]);
    setName('');
    setMobile('');
    setAddress('');
    setIsFormOpen(false);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (id, updatedStudent) => {
    setStudents(students.map((student) => {
      if (student.id === id) {
        return { ...student, ...updatedStudent };
      }
      return student;
    }));
  }

  const apiContextValue = {
    students,
    isFormOpen,
    name,
    mobile,
    address,
    setName,
    setMobile,
    setAddress,
    setIsFormOpen,
    addStudent,
    deleteStudent,
    editStudent
  };

  return <APIContext.Provider value={apiContextValue}>{children}</APIContext.Provider>;
};
