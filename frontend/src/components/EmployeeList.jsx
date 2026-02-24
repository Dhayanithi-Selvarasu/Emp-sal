import React from 'react';
import { deleteEmployee } from '../services/employeeService';

export default function EmployeeList({ employees, onEdit, onDeleted }) {
  return (
    <div>
      <h2>Employees</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName} {e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>
                <button onClick={() => onEdit(e)}>Edit</button>
                <button onClick={async () => { if (confirm('Delete this employee?')) { await deleteEmployee(e.id); onDeleted(); } }}>Delete</button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && <tr><td colSpan="6">No employees yet.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
