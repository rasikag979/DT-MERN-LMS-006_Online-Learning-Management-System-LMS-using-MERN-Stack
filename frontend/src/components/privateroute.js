import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/context/auth";

// usage: <PrivateRoute><CoursePlayer /></PrivateRoute>
export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
