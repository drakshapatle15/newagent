import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgot-password",
        {
          email,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Forgot password failed", error);
      setMessage("Forgot password failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Forgot Password</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button style={styles.button} onClick={handleForgotPassword}>
        Send Reset Password Email
      </button>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  // Styles here
};

export default ForgotPassword;
