import { useEffect, useState } from "react";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

export default function EditEmployee({ employee, onUpdate, onClose }) {
  const [formData, setFormData] = useState(employee);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFormData(employee);
  }, [employee]);

  // Image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setFormData({ ...formData, profile: reader.result });
    reader.readAsDataURL(file);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.empId || !formData.gender || !formData.state) {
      alert("Please fill all required fields");
      return;
    }

    onUpdate(formData);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div style={overlayStyle}>
      <form onSubmit={handleSubmit} style={modalStyle}>
        <h2 style={{ color: "#7f00ff" }}>Edit Employee</h2>

        {success && (
          <div style={successStyle}>
            ✅ Employee updated successfully!
          </div>
        )}

        <input
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Employee ID *"
          value={formData.empId}
          onChange={(e) => setFormData({ ...formData, empId: e.target.value })}
          required
        />

        <input type="file" accept="image/*" onChange={handleFileChange} />

        {formData.profile && (
          <img src={formData.profile} alt="profile" style={{ width: 80, borderRadius: "50%" }} />
        )}

        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          required
        >
          <option value="">Select Gender *</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        />

        <select
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          required
        >
          <option value="">Select State *</option>
          {indianStates.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* STATUS FIELD */}
        <select
          value={formData.active ? "active" : "inactive"}
          onChange={(e) =>
            setFormData({ ...formData, active: e.target.value === "active" })
          }
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" style={primaryBtn}>Submit</button>
          <button type="button" onClick={onClose} style={secondaryBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

/* ===== Styles ===== */

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 10,
  width: 420,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const primaryBtn = {
  background: "#7f00ff",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: 6,
  cursor: "pointer",
};

const secondaryBtn = {
  background: "#eee",
  border: "1px solid #ccc",
  padding: "10px 20px",
  borderRadius: 6,
  cursor: "pointer",
};

const successStyle = {
  background: "#e6fffa",
  color: "#047857",
  padding: 10,
  borderRadius: 6,
  textAlign: "center",
};
