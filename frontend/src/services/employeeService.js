import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const getAllEmployees = async () => {
  const res = await axios.get(`${API}/employees`);
  return res.data;
};

export const createEmployee = async (employee) => {
  const res = await axios.post(`${API}/employees`, employee);
  return res.data;
};

export const updateEmployee = async (id, employee) => {
  const res = await axios.put(`${API}/employees/${id}`, employee);
  return res.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API}/employees/${id}`);
};
