// ProfileSetupLogic.js

import { useState } from "react";

const useProfileSetupLogic = (onSubmit) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the onSubmit callback
    onSubmit(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useProfileSetupLogic;
