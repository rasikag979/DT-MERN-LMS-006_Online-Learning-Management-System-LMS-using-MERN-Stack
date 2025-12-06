import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "C:/Users/Rasika/Desktop/OLMS-mern/frontend/src/context/auth";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav
      style={{
        width: "100%",
        background: "#0d6efd",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <strong>LMS</strong>
        </Link>
      </div>

      <div>
        {!user && (
          <>
            <Link
              to="/login"
              style={{ color: "white", marginRight: "20px" }}
            >
              Login
            </Link>
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        )}

        {user && (
          <>
            <span style={{ marginRight: "20px" }}>
              Hello, {user.name} ({user.role})
            </span>
            <button
              style={{
                background: "white",
                color: "black",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
