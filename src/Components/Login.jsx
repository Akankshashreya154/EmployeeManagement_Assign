import { useState } from "react";
import "../index.css"; // keep existing css

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!user || !pass) {
      setError("Please enter username and password");
      return;
    }
    if (user === "admin" && pass === "1234") {
      sessionStorage.setItem("auth", "true");
      onLogin(true);
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a00e0, #7f00ff)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "50px 40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#7f00ff" }}>
          Employee Management
        </h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#7f00ff",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#6a00e0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#7f00ff")}
          >
            Login
          </button>
        </form>
        {error && (
          <p style={{ color: "red", marginTop: "15px", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
