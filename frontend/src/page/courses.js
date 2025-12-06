import React, { useEffect, useState } from 'react';
import API from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/api/axios';
import { Link } from 'react-router-dom';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ API.get('/courses').then(r=>setCourses(r.data)); },[]);
  return (
    <div>
      {courses.map(c => (
        <div key={c._id}>
          <Link to={`/course/${c._id}`}><h3>{c.title}</h3></Link>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}
