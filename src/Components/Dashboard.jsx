import { useState } from "react";
import EditEmployee from "./EditEmployee";

export default function Dashboard({
  employees,
  setEmployees,
  successMessage,
  setSuccessMessage,
}) {
  const [editingEmployee, setEditingEmployee] = useState(null);

  // New states for search & filters
  const [searchName, setSearchName] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Apply filters and search
  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesGender = filterGender ? emp.gender === filterGender : true;
    const matchesStatus =
      filterStatus === "Active"
        ? emp.active === true
        : filterStatus === "Inactive"
        ? emp.active === false
        : true;

    return matchesName && matchesGender && matchesStatus;
  });

  // Your existing handlers (no change)
  const handleUpdate = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const toggleActive = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, active: !emp.active } : emp
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handlePrint = (emp) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Employee Details</title>
        </head>
        <body>
          <h2>${emp.name} - Employee Details</h2>
          <table border="1" cellpadding="5">
            <tr><th>Employee ID</th><td>${emp.empId}</td></tr>
            <tr><th>Gender</th><td>${emp.gender}</td></tr>
            <tr><th>DOB</th><td>${emp.dob}</td></tr>
            <tr><th>State</th><td>${emp.state}</td></tr>
            <tr><th>Status</th><td>${emp.active ? "Active" : "Inactive"}</td></tr>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div
      style={{
        padding: "20px",
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* FILTERS CONTAINER */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "15px",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Search by Name */}
        <input
          type="text"
          placeholder="Search Name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "180px",
          }}
        />

        {/* Gender Filter */}
        <select
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "120px",
          }}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Status Filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "130px",
          }}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* TOTAL EMPLOYEES */}
      <h2 style={{ color: "#7f00ff", marginBottom: "15px", textAlign: "center" }}>
        Total Employees: {filteredEmployees.length}
      </h2>

      {/* SUCCESS POPUP */}
      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            zIndex: 1000,
            minWidth: "250px",
            textAlign: "center",
          }}
        >
          {successMessage}
          <button
            onClick={() => setSuccessMessage("")}
            style={{
              marginLeft: "10px",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            aria-label="Close success message"
          >
            ✖
          </button>
        </div>
      )}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4b0082", color: "#fff" }}>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Profile</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ccc",
                color: "#000",
              }}
            >
              <td>{emp.name}</td>
              <td>{emp.empId}</td>
              <td>
                {emp.profile ? (
                  <img
                    src={emp.profile}
                    alt="profile"
                    style={{ width: "45px", borderRadius: "50%" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{emp.gender}</td>
              <td>{emp.dob}</td>
              <td>{emp.state}</td>
              <td>
                <button
                  onClick={() => toggleActive(emp.id)}
                  style={{
                    backgroundColor: emp.active ? "green" : "red",
                    color: "#fff",
                    border: "none",
                    padding: "5px 12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                >
                  {emp.active ? "Active" : "Inactive"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => setEditingEmployee(emp)}
                  style={{
                    marginRight: "6px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    color: "#7f00ff",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(emp.id)}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginRight: "6px",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  🗑️
                </button>

                <button
                  onClick={() => handlePrint(emp)}
                  style={{
                    padding: "5px 10px",
                    cursor: "pointer",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  🖨️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingEmployee && (
        <EditEmployee
          employee={editingEmployee}
          onUpdate={handleUpdate}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
}
