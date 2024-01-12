import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import axios from "axios"; // Import axios for making HTTP requests
import auth from "../../Firebase/auth";

function ExternalLogin() {
  const handleSocialSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("thiss is data by social ", result);
      const socialId = result.user.providerData[0].uid;
      const socialType =
        provider.providerId === "facebook.com" ? "facebook" : "google";

      // Send the social ID to your server
      await sendSocialIdToServer(socialId, socialType);

      // User is signed in
    } catch (error) {
      console.error(error.message);
    }
  };

  const sendSocialIdToServer = async (socialId, socialType) => {
    try {
      // Make an API request to your server
      const response = await axios.post(
        "http://localhost:4200/user/social/login",
        {
          social_id: socialId,
          social_type: socialType,
        }
      );

      // Handle the server response as needed
      console.log(response.data);
    } catch (error) {
      console.error("Error sending social ID to server:", error.message);
    }
  };

  return (
    <>
      {/* ... (your existing JSX code) */}

      <button
        className="flex items-center justify-center w-full bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => handleSocialSignIn(new GoogleAuthProvider())}
      >
        {/* ... (your existing Google button content) */}
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2" // Adjust margin as needed
        >
          <path
            d="M24.5 12.7778C24.5 11.7501 24.4166 11.0001 24.2361 10.2223H12.5V14.8611H19.3888C19.25 16.0139 18.5 17.7501 16.8333 18.9167L16.8099 19.072L20.5207 21.9466L20.7778 21.9723C23.1388 19.7917 24.5 16.5834 24.5 12.7778Z"
            fill="#4285F4"
          />
          <path
            d="M12.5 25.0001C15.8749 25.0001 18.7082 23.8889 20.7777 21.9723L16.8333 18.9167C15.7777 19.6528 14.361 20.1667 12.5 20.1667C9.19442 20.1667 6.38888 17.9862 5.38879 14.9723L5.24219 14.9847L1.38371 17.9709L1.33325 18.1111C3.38879 22.1944 7.61102 25.0001 12.5 25.0001Z"
            fill="#34A853"
          />
          <path
            d="M5.38884 14.9722C5.12495 14.1944 4.97223 13.361 4.97223 12.5C4.97223 11.6388 5.12495 10.8055 5.37495 10.0277L5.36796 9.86209L1.46113 6.828L1.3333 6.8888C0.486116 8.58327 0 10.4861 0 12.5C0 14.5139 0.486116 16.4166 1.3333 18.111L5.38884 14.9722Z"
            fill="#FBBC05"
          />
          <path
            d="M12.5 4.8333C14.8471 4.8333 16.4304 5.84718 17.3333 6.69447L20.861 3.25C18.6944 1.23612 15.8749 0 12.5 0C7.61102 0 3.38879 2.80553 1.33325 6.88884L5.3749 10.0278C6.38888 7.01388 9.19442 4.8333 12.5 4.8333Z"
            fill="#EB4335"
          />
        </svg>
        Continue with Google
      </button>

      <button
        className="mt-3 flex items-center justify-center  w-full bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => handleSocialSignIn(new FacebookAuthProvider())}
      >
        <svg
          width="13"
          height="25"
          viewBox="0 0 13 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4" // Adjust margin as needed
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.68125 25V13.9575H0V9.35625H3.68125V5.675C3.68125 1.87125 6.08875 0 9.48125 0C11.1062 0 12.5038 0.12125 12.9113 0.175V4.15H10.5575C8.7125 4.15 8.2825 5.02875 8.2825 6.315V9.35625H12.8825L11.9625 13.9563H8.2825L8.35625 25"
            fill="#1877F2"
          />
          {/* Facebook SVG path */}
        </svg>
        Continue with Facebook
        {/* ... (your existing Facebook button content) */}
      </button>
      {/* 
   
      <p className="mt-3 text-sm text-gray-500">
        // Don't have an account? //{" "}
        <a href="/account-create" className="text-blue-500">
          // Register here //{" "}
        </a>
        // . //{" "}
      </p> */}
    </>
  );
}

export default ExternalLogin;
