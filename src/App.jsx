import React from 'react';
import { APIProvider } from './components/API';
import Form from './components/Form';
import List from './components/List';
import StudentCount from './components/Count';

export default function App() {
  return (
    <APIProvider>
      <div className='container mx-auto mt-8'>
        <h1 className='text-3xl font-bold text-center mb-4'>Student Manager</h1>
        <div className='flex flex-col items-center'>
          <StudentCount />
          <Form />
        </div>
        <div className="flex justify-center mt-4">
          <List />
        </div>
      </div>
    </APIProvider>
  );
}
