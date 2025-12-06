import React, { useState, useContext } from 'react';
import API from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/api/axios';
import { AuthContext } from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/context/auth';

export default function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'', role:'student' });
  const { login } = useContext(AuthContext);
  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/register', form);
    login(res.data.user, res.data.token);
    window.location = '/';
  };
  return (
    <form onSubmit={submit}>
      <input onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" />
      <input onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" />
      <input type="password" onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" />
      <select onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="student">Student</option><option value="instructor">Instructor</option>
      </select>
      <button>Register</button>
    </form>
  );
}
