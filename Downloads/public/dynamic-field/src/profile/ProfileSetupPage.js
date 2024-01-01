// ProfileSetupPage.js

import React from "react";
import useProfileSetupLogic from "./ProfileSetupLogic";
import ProfileSetupUI from "./ProfileSetupUI";

const ProfileSetupPage = () => {
  // Define the logic for handling state and form submission
  const { formData, handleChange, handleSubmit } = useProfileSetupLogic(
    (formData) => {
      // Add logic to send updated profile data to the server
      console.log("Updated profile data:", formData);
      // You can make an API call to update the user's profile on the server
      // Example: axios.post('/api/update-profile', formData)
    }
  );

  // Render the UI component with logic
  return (
    <ProfileSetupUI
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProfileSetupPage;
