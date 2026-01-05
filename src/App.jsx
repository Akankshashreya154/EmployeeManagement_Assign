import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import CreateEmployee from "./Components/Pages/CreateEmployee";
import "./index.css";

/* HEADER COMPONENT */
function Header({ onLogout }) {
  const location = useLocation();
  const isCreatePage = location.pathname === "/create";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#f4f4f4",
        borderBottom: "2px solid #7f00ff",
      }}
    >
      <h1 style={{ color: "#7f00ff", margin: 0 }}>Admin Dashboard</h1>

      <div>
        {!isCreatePage && (
          <Link to="/create">
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#6a00e0",
                color: "#fff",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Create Employee
            </button>
          </Link>
        )}

        <button
          onClick={onLogout}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#7f00ff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // only show after submit

  useEffect(() => {
    const auth = sessionStorage.getItem("auth");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  // Function to add employee from CreateEmployee
  const handleAddEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
    setSuccessMessage("Employee successfully submitted!"); // trigger popup
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div>
          {/* Header */}
          <Header onLogout={handleLogout} />

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  employees={employees}
                  setEmployees={setEmployees}
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
              }
            />
            <Route
              path="/create"
              element={
                <CreateEmployee
                  onAdd={handleAddEmployee}
                  setSuccessMessage={setSuccessMessage}
                />
              }
            />
          </Routes>
        </div>
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </Router>
  );
}
