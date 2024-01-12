// // components/EmailVerification.js

// import React from "react";

// const EmailVerification = () => {
//   return (
//     <div>
//       <h2>Email is verifying</h2>
//       <p>Loading...</p>
//       {/* You can add a loader or any other content to indicate email verification */}
//     </div>
//   );
// };

// export default EmailVerification;

// components/EmailVerification.js

// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";

// const EmailVerification = () => {
//   const history = useHistory();
//   const { tokenId } = useParams();
//   const [verificationStatus, setVerificationStatus] = useState("Verifying...");

//   useEffect(() => {
//     // Make an API call to verify the token
//     const verifyToken = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/auth/token-verify?token=${tokenId}`
//         );
//         const data = await response.json();

//         if (data.success) {
//           setVerificationStatus(
//             "Verification successful. Redirecting to login..."
//           );
//           // Redirect to the login page after a successful verification
//           setTimeout(() => {
//             history.push("/login");
//           }, 2000); // Redirect after 2 seconds
//         } else {
//           setVerificationStatus("Verification failed. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error verifying email:", error);
//         setVerificationStatus("Error verifying email. Please try again.");
//       }
//     };

//     // Call the verifyToken function when the component mounts
//     verifyToken();
//   }, [history, tokenId]);

//   return (
//     <div>
//       <h2>Email Verification</h2>
//       <p>{verificationStatus}</p>
//       {/* You can add a loader or any other content to indicate email verification */}
//     </div>
//   );
// };

// export default EmailVerification;

// components/EmailVerification.js

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EmailVerification = () => {
  const history = useHistory();
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");

  useEffect(() => {
    const verifyEmailToken = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/auth/token-verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );
        console.log(response);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus(
            "Verification successful. Redirecting to login..."
          );
          // Redirect to the login page after a successful verification
          setTimeout(() => {
            history.replace("/login");
          }, 2000); // Redirect after 2 seconds
        } else {
          setVerificationStatus(`Verification failed: ${data.message}`);
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setVerificationStatus("Error verifying email. Please try again.");
      }
    };

    // Call the verifyEmailToken function when the component mounts
    verifyEmailToken();
  }, [history, token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
      {/* You can add a loader or any other content to indicate email verification */}
    </div>
  );
};

export default EmailVerification;
