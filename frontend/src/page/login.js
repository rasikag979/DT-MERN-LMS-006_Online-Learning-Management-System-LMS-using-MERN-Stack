import React, { useState, useContext } from 'react';
import API from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/api/axios';
import { AuthContext } from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/context/auth';

export default function Login() {
  const [form, setForm] = useState({ email:'', password:''});
  const { login } = useContext(AuthContext);
  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    login(res.data.user, res.data.token);
    window.location = '/';
  };
  return (
    <form onSubmit={submit}>
      <input onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" />
      <input type="password" onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
