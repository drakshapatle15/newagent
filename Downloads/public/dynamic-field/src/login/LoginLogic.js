// components/LoginLogic.js

import axios from "axios";
export const handleLogin = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    // Handle successful login, e.g., store tokens in local storage
  } catch (error) {
    // Handle login error
    console.error("Login failed", error);
  }
};
