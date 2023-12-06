import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "mahesh" && password === "123") {
      login(username);
      navigate("/dashboard");
    } else {
      alert("Invalid Info. Please try again.");
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>
        <div style={styles.div}>
          <label htmlFor="username" style={styles.label}>
            Username:
          </label>
          <input
            style={styles.input}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={styles.div}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

const styles = {
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "70vh",
    gap: "10px",
    /* align-items: center; */
    margin: "10px auto",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    gap: "10px",
    justifyContent: "center",
  },

  label: {
    marginRight: "10px",
    fontSize: "16px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    width: "100px",
  },
};
