// // components/Login.js

// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:4100/auth/login", {
//         email,
//         password,
//       });
//       // Handle successful login, e.g., store tokens in local storage
//     } catch (error) {
//       // Handle login error
//       console.error("Login failed", error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Login</h2>
//       <input
//         style={styles.input}
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button style={styles.button} onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "100%",
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#3498db",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Login;
// components/Login.js

// import React, { useState } from "react";
// import { handleLogin } from "./LoginLogic"; // Import the logic

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Login</h2>
//       <input
//         style={styles.input}
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button
//         style={styles.button}
//         onClick={() => handleLogin(email, password)}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "100%",
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#3498db",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
import { handleLogin } from "./LoginLogic";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={styles.button}
        onClick={() => handleLogin(email, password)}
      >
        Login
      </button>

      {/* Link to the Forgot Password page */}
      <Link to="/forgot-password" style={styles.forgotPasswordLink}>
        Forgot Password?
      </Link>
    </div>
  );
};

const styles = {
  // Styles here

  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  // Add a style for the Forgot Password link
  forgotPasswordLink: {
    display: "block",
    marginTop: "10px",
    textDecoration: "underline",
    color: "#3498db",
    cursor: "pointer",
  },
};

export default Login;
