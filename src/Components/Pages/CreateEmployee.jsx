import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateForm from "../../Components/CreateForm";

export default function CreateEmployee({ onAdd, setSuccessMessage }) {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    empId: "",
    profile: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.empId) {
      alert("Name and Employee ID are required!");
      return;
    }

    onAdd({ ...employee, id: Date.now() });  // Add employee to Dashboard
    setSuccessMessage("Employee successfully submitted!");  // Show success message
    navigate("/");  // Go back to Dashboard
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: "30px",
      maxWidth: "800px",
      margin: "0 auto",
      background: "#f9f7ff",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}>
      <h1 style={{ color: "#7f00ff" }}>Add Employee</h1>
      <p style={{ color: "#666" }}>Fields marked with <b>*</b> are mandatory</p>

      <CreateForm employee={employee} setEmployee={setEmployee} />

      <button type="submit" style={{
        marginTop: "10px",
        background: "#7f00ff",
        color: "#fff",
        border: "none",
        padding: "12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
      }}>
        Submit Employee
      </button>
    </form>
  );
}
