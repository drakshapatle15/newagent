// import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/auth/reset-password",
//         {
//           token,
//           password,
//         }
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Reset password failed", error);
//       setMessage("Reset password failed. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Reset Password</h2>
//       <input
//         style={styles.input}
//         type="password"
//         placeholder="New Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button style={styles.button} onClick={handleResetPassword}>
//         Reset Password
//       </button>
//       <p>{message}</p>
//     </div>
//   );
// };

// const styles = {
//   // Styles here
// };

// export default ResetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Function to extract email from the URL parameters
//     const getEmailFromUrl = () => {
//       // Use window.location or URLSearchParams to extract email from the URL
//       const searchParams = new URLSearchParams(window.location.search);
//       const emailFromUrl = searchParams.get("email");
//       setEmail(emailFromUrl || ""); // Set email or an empty string if not found
//       console.log(emailFromUrl);
//     };

//     // Call the function to extract email when the component mounts
//     getEmailFromUrl();
//   }, []);

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/auth/reset-password",
//         {
//           email,
//           token,
//           password,
//         }
//       );
//       console.log(response);
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Reset password failed", error);
//       setMessage("Reset password failed. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Reset Password</h2>
//       <input
//         style={styles.input}
//         type="password"
//         placeholder="New Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {/* Add a disabled input to display the email */}
//       <input style={styles.input} type="text" value={email} disabled />
//       <button style={styles.button} onClick={handleResetPassword}>
//         Reset Password
//       </button>
//       <p>{message}</p>
//     </div>
//   );
// };

// const styles = {
//   // Styles here
// };

// export default ResetPassword;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { email, token } = useParams(); // Extract email and token from params
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/reset-password",
        {
          email,
          token,
          password,
        }
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Reset password failed", error);
      setMessage("Reset password failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reset Password</h2>
      <input
        style={styles.input}
        type="password"
        placeholder="New Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Display the email */}
      <input style={styles.input} type="text" value={email} disabled />

      <button style={styles.button} onClick={handleResetPassword}>
        Reset Password
      </button>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  // Styles here
};

export default ResetPassword;
