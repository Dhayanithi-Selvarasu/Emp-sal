import React, { useEffect, useState } from 'react';
import { createEmployee, updateEmployee } from '../services/employeeService';

export default function EmployeeForm({ editing, onSaved, onCancel }) {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', department:'', salary:0 });

  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm({ firstName:'', lastName:'', email:'', department:'', salary:'' });
    }
  }, [editing]);

  const save = async (e) => {
    e.preventDefault();
    if (editing && editing.id) {
      await updateEmployee(editing.id, form);
    } else {
      await createEmployee(form);
    }
    onSaved();
  };

return (
  <form onSubmit={save} className="employee-form">
    <h2>{editing ? 'Edit' : 'Create'} Employee</h2>

    <div className="form-row">
      <input 
        placeholder="First name" 
        value={form.firstName} 
        onChange={e=>setForm({...form, firstName:e.target.value})} 
        required 
      />
      <input 
        placeholder="Last name" 
        value={form.lastName} 
        onChange={e=>setForm({...form, lastName:e.target.value})} 
        required 
      />
    </div>

    <div className="form-row">
      <input 
        placeholder="Email" 
        value={form.email} 
        onChange={e=>setForm({...form, email:e.target.value})} 
        required 
      />
      <input 
        placeholder="Department" 
        value={form.department} 
        onChange={e=>setForm({...form, department:e.target.value})} 
      />
    </div>

    <div className="form-row">
      <input 
        type="number" 
        placeholder="Salary" 
        value={form.salary} 
        onChange={e=>setForm({...form, salary:parseFloat(e.target.value)})} 
      />
    </div>

    <div className="button-group">
      <button type="submit" className="add-btn">
        {editing ? "Update" : "Save"}
      </button>

      {onCancel && (
        <button 
          type="button" 
          onClick={onCancel} 
          className="cancel-btn"
        >
          Cancel
        </button>
      )}
    </div>
  </form>
);
}
