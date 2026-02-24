import React, { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { getAllEmployees } from './services/employeeService';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const data = await getAllEmployees();
    setEmployees(data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm 
        onSaved={() => { 
          load(); 
          setEditing(null); 
        }} 
        editing={editing} 
        onCancel={() => setEditing(null)} 
      />

      <hr />

      <EmployeeList 
        employees={employees} 
        onEdit={setEditing} 
        onDeleted={() => load()} 
      />
    </div>
  );
}