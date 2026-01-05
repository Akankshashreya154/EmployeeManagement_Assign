import React from "react";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

export default function CreateForm({ employee, setEmployee }) {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setEmployee({ ...employee, profile: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      backgroundColor: "#f9f9ff",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>
      <input
        type="text"
        placeholder="Name *"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="text"
        placeholder="Employee ID *"
        value={employee.empId}
        onChange={(e) => setEmployee({ ...employee, empId: e.target.value })}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* IMAGE PREVIEW */}
      {employee.profile && (
        <img
          src={employee.profile}
          alt="Profile Preview"
          style={{ width: "100px", height: "100px", borderRadius: "50%", marginTop: "10px", objectFit: "cover", border: "1px solid #ccc" }}
        />
      )}

      <select
        value={employee.gender}
        onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input
        type="date"
        value={employee.dob}
        onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <select
        value={employee.state}
        onChange={(e) => setEmployee({ ...employee, state: e.target.value })}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="">Select State</option>
        {indianStates.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}
