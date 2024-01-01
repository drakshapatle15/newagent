// // components/Signup.js

// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post("/api/signup", { email, password });
//       // Handle successful signup, e.g., redirect to login page
//     } catch (error) {
//       // Handle signup error
//       console.error("Signup failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// };

// export default Signup;

// components/Signup.js

// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [first_name, setFirstname] = useState("");
//   const [last_name, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/auth/register", {
//         first_name,
//         last_name,
//         email,
//         password,
//       });
//       // Handle successful signup, e.g., redirect to login page
//     } catch (error) {
//       // Handle signup error
//       console.error("Signup failed", error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Signup</h2>
//       <input
//         style={styles.input}
//         type="first_name"
//         placeholder="First Name"
//         onChange={(e) => setFirstname(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="last_name"
//         placeholder="Last Name"
//         onChange={(e) => setLastname(e.target.value)}
//       />
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
//       <button style={styles.button} onClick={handleSignup}>
//         Signup
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
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Signup;

// import React from "react";
// import SignupLogic from "./SignupLogic";

// const Signup = () => {
//   const { first_name, last_name, email, password, handleSignup, handleChange } =
//     SignupLogic();

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Signup</h2>
//       <input
//         style={styles.input}
//         type="text"
//         placeholder="First Name"
//         value={first_name}
//         onChange={(e) => handleChange("first_name", e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="text"
//         placeholder="Last Name"
//         value={last_name}
//         onChange={(e) => handleChange("last_name", e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => handleChange("email", e.target.value)}
//       />
//       <input
//         style={styles.input}
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => handleChange("password", e.target.value)}
//       />
//       <button style={styles.button} onClick={handleSignup}>
//         Signup
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
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Signup;

// Signup.js
import React from "react";
import SignupLogic from "./SignupLogic";
import { useEffect } from "react";
// import EmailVerification from "./EmailVerification";

const Signup = () => {
  const {
    first_name,
    last_name,
    email,
    password,
    message,
    handleSignup,
    handleChange,
    isVerifyingEmail,
  } = SignupLogic();

  useEffect(() => {
    // You can perform any additional actions on flash message change here
  }, [message]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
      {message && <div style={styles.message}>{message}</div>}
      {/* ... rest of your code ... */}

      {/* {isVerifyingEmail ? (
        <EmailVerification />
      ) : (
        // ... (unchanged) */}

      <div>
        <input
          style={styles.input}
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => handleChange("first_name", e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => handleChange("last_name", e.target.value)}
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button style={styles.button} onClick={handleSignup}>
          Signup
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

const styles = {
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
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Signup;
