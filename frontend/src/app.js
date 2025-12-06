import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/page/courses.js';
import CoursePlayer from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/page/courseplayer.js';
import Login from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/page/login';
import Register from 'C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/page/register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/course/:id" element={<CoursePlayer />} />
      </Routes>
    </Router>
  );
}
export default App;
