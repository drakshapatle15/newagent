// import React from "react";
// import { useState } from "react";
// import { CiFacebook } from "react-icons/ci";
// import { FaFacebookF } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// import PhoneInput from "react-phone-input-2";
// import { toast, Toaster } from "react-hot-toast";
// // import { CgSpinner } from "react-icons/cg";
// import OtpInput from "otp-input-react";

// import "react-phone-input-2/lib/style.css";
// import { initializeApp } from "firebase/app";
// // import { auth } from "./firebase.config";

// import {
//   getAuth,
//   PhoneAuthProvider,
//   signInWithPopup,
//   signInWithCredential,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";

// // import firebase from "firebase/app";
// // import "firebase/auth";

// function Login() {
//   // Firebase configuration
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);

//   const firebaseConfig = {
//     apiKey: "AIzaSyBgSuJfKC_n1MFniaabECKRYPIXR8TXKgY",
//     authDomain: "agent-6ea8d.firebaseapp.com",
//     projectId: "agent-6ea8d",
//     storageBucket: "agent-6ea8d.appspot.com",
//     messagingSenderId: "646107823266",
//     appId: "1:646107823266:web:f3c338c1434bbb0965abfb",
//     measurementId: "G-3QVFK2NV03",
//   };
//   const firebaseApp = initializeApp(firebaseConfig);

//   const auth = getAuth(firebaseApp);

//   // function onCaptchVerify() {
//   //   if (!window.recaptchaVerifier) {
//   //     window.recaptchaVerifier = new RecaptchaVerifier(
//   //       "recaptcha-container",
//   //       {
//   //         size: "invisible",
//   //         callback: (response) => {
//   //           onSignup();
//   //         },
//   //         "expired-callback": () => {},
//   //       },
//   //       auth
//   //     );
//   //   }
//   // }
//   if (!firebaseApp) {
//     console.error("Firebase app not initialized");
//   }

//   function onSignup() {
//     setLoading(true);
//     // onCaptchVerify();

//     // const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sended successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUser(res.user);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }

//   // Initialize Firebase
//   if (!firebaseApp) {
//     console.error("Firebase app not initialized");
//   }

//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [code, setCode] = useState("");
//   const [verificationId, setVerificationId] = useState("");

//   const handleSendCode = async () => {
//     try {
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
//       console.log(confirmationResult);
//       setVerificationId(confirmationResult.verificationId);
//     } catch (error) {
//       console.error("Error sending verification code:", error);
//     }
//   };

//   const handleVerifyCode = async () => {
//     try {
//       const credential = PhoneAuthProvider.credential(verificationId, code);
//       await signInWithCredential(auth, credential);
//       console.log("Successfully authenticated with phone number");
//     } catch (error) {
//       console.error("Error verifying code:", error);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // User is signed in
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const handleFacebookSignIn = async () => {
//     const provider = new FacebookAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // User is signed in
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const handlePhoneSignIn = async (phoneNumber) => {
//     const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
//       size: "invisible",
//       callback: (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         console.log("reCAPTCHA solved!");
//       },

//       appVerificationDisabledForTesting:
//         this.auth.settings.appVerificationDisabledForTesting,
//     });

//     try {
//       // Request OTP (one-time password) to be sent to the user's phone
//       const confirmationResult = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifier
//       );

//       // Now you need to display a UI to let the user enter the verification code
//       const verificationCode = prompt(
//         "Enter the verification code sent to your phone:"
//       );

//       // Confirm the verification code
//       const credential = PhoneAuthProvider.credential(
//         confirmationResult.verificationId,

//         verificationCode
//       );

//       // Sign in with the phone credential
//       await signInWithCredential(auth, credential);

//       // User is signed in
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   // Example of how to use it
//   // You can call handlePhoneSignIn with the user's phone number
//   // handlePhoneSignIn('+1234567890');

//   return (
//     // ... rest of your component

//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="bg-white p-8 rounded shadow-xl w-full  max-w-md sm:w-96">
//         <header className="text-center py-8">
//           <div className="flex flex-col items-center justify-center mb-4">
//             {/* <img
//               src="path_to_your_logo.png" // Replace with the actual path to your logo image
//               alt="Logo"
//               className="mr-2 h-8 w-8" // Adjust the height and width accordingly
//             /> */}

//             <svg
//               width="281"
//               height="70"
//               viewBox="0 0 281 70"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               marginLeft="10px"
//             >
//               <path
//                 d="M116.798 57.5922H113.63L104.154 30.2315L94.9449 57.5922H91.7765L77.5336 13.6196H85.5582L93.7012 39.7959L102.496 13.6196H105.871L114.696 39.7959L122.809 13.6196H130.834L116.798 57.5922ZM162.162 43.4085H139.51C139.648 45.9353 140.516 47.8995 142.115 49.3011C143.714 50.7027 145.866 51.4035 148.571 51.4035C151.946 51.4035 154.513 50.525 156.27 48.7681L159.142 54.4238C156.536 56.5361 152.647 57.5922 147.475 57.5922C142.639 57.5922 138.809 56.1808 135.986 53.3578C133.183 50.5152 131.781 46.5571 131.781 41.4838C131.781 36.4893 133.321 32.4425 136.401 29.3432C139.5 26.2439 143.211 24.6942 147.534 24.6942C152.134 24.6942 155.825 26.0662 158.609 28.8102C161.392 31.5541 162.784 35.0483 162.784 39.2925C162.784 40.2006 162.577 41.5726 162.162 43.4085ZM139.776 37.8416H155.352C154.838 33.2025 152.272 30.883 147.653 30.883C143.428 30.883 140.803 33.2025 139.776 37.8416ZM186.384 53.8316C185.713 54.9371 184.538 55.8452 182.86 56.5558C181.202 57.2468 179.465 57.5922 177.649 57.5922C174.234 57.5922 171.549 56.7434 169.595 55.0457C167.64 53.3282 166.663 50.9001 166.663 47.7613C166.663 44.0895 168.035 41.2173 170.779 39.1445C173.543 37.0717 177.461 36.0353 182.535 36.0353C183.403 36.0353 184.43 36.1834 185.614 36.4795C185.614 32.7485 183.255 30.883 178.537 30.883C175.754 30.883 173.424 31.3469 171.549 32.2747L169.95 26.5301C172.497 25.3062 175.527 24.6942 179.041 24.6942C183.877 24.6942 187.421 25.7997 189.671 28.0107C191.921 30.2019 193.047 34.3672 193.047 40.5066V47.2875C193.047 51.5121 193.896 54.1672 195.593 55.2529C194.981 56.3189 194.3 56.9704 193.55 57.2073C192.8 57.4639 191.941 57.5922 190.974 57.5922C189.908 57.5922 188.95 57.1974 188.102 56.4078C187.253 55.6181 186.68 54.7594 186.384 53.8316ZM185.674 42.076C184.41 41.8193 183.463 41.691 182.831 41.691C176.988 41.691 174.066 43.6059 174.066 47.4356C174.066 50.2783 175.714 51.6996 179.011 51.6996C183.453 51.6996 185.674 49.4788 185.674 45.0371V42.076ZM219.401 32.1858C218.078 31.3173 216.627 30.883 215.048 30.883C213.33 30.883 211.8 31.6627 210.458 33.2222C209.135 34.7818 208.474 36.6867 208.474 38.9372V57H201.071V25.2864H208.474V28.1883C210.547 25.8589 213.301 24.6942 216.736 24.6942C219.262 24.6942 221.197 25.0792 222.539 25.8491L219.401 32.1858Z"
//                 fill="#122F4E"
//               />
//               <path
//                 d="M252.958 57L249.79 48.2055H234.925L231.905 57H223.347L240.64 13.0274H244.016L261.457 57H252.958ZM242.328 26.2932L237.116 42.3129H247.539L242.328 26.2932ZM271.436 12.9978C272.62 12.9978 273.627 13.4222 274.456 14.2711C275.305 15.1002 275.729 16.107 275.729 17.2914C275.729 18.4759 275.305 19.4925 274.456 20.3414C273.627 21.1705 272.62 21.5851 271.436 21.5851C270.251 21.5851 269.234 21.1705 268.386 20.3414C267.556 19.4925 267.142 18.4759 267.142 17.2914C267.142 16.107 267.556 15.1002 268.386 14.2711C269.234 13.4222 270.251 12.9978 271.436 12.9978ZM267.616 57V31.3567H263.559V25.2864H275.107V57H267.616Z"
//                 fill="#2CC185"
//               />
//               <path
//                 d="M252.958 57L249.79 48.2055H234.925L231.905 57H223.347L240.64 13.0274H244.016L261.457 57H252.958ZM242.328 26.2932L237.116 42.3129H247.539L242.328 26.2932ZM271.436 12.9978C272.62 12.9978 273.627 13.4222 274.456 14.2711C275.305 15.1002 275.729 16.107 275.729 17.2914C275.729 18.4759 275.305 19.4925 274.456 20.3414C273.627 21.1705 272.62 21.5851 271.436 21.5851C270.251 21.5851 269.234 21.1705 268.386 20.3414C267.556 19.4925 267.142 18.4759 267.142 17.2914C267.142 16.107 267.556 15.1002 268.386 14.2711C269.234 13.4222 270.251 12.9978 271.436 12.9978ZM267.616 57V31.3567H263.559V25.2864H275.107V57H267.616Z"
//                 fill="#2CC185"
//               />
//               <path
//                 d="M23.7022 25.7225C21.7574 22.4858 22.8047 18.2853 26.0414 16.3405L32.6434 12.3737L57.1947 53.234L48.2485 58.6094C46.3065 59.7763 43.7862 59.1479 42.6193 57.2059L23.7022 25.7225Z"
//                 fill="#2CC185"
//               />
//               <path
//                 d="M23.7022 25.7225C21.7574 22.4858 22.8047 18.2853 26.0414 16.3405L32.6434 12.3737L57.1947 53.234L48.2485 58.6094C46.3065 59.7763 43.7862 59.1479 42.6193 57.2059L23.7022 25.7225Z"
//                 fill="url(#paint0_linear_34_3424)"
//               />
//               <path
//                 d="M23.7022 25.7225C21.7574 22.4858 22.8047 18.2853 26.0414 16.3405L32.6434 12.3737L57.1947 53.234L48.2485 58.6094C46.3065 59.7763 43.7862 59.1479 42.6193 57.2059L23.7022 25.7225Z"
//                 fill="#2CC185"
//               />
//               <path
//                 d="M52.379 35.6755L46.9226 25.5554L40.8865 15.7699C40.0101 14.252 41.2881 12.2845 43.1594 12.3057L65.8448 12.4787C66.2414 12.4807 66.6241 12.5794 66.9573 12.7656C67.2904 12.9517 67.5632 13.2192 67.7503 13.5433C67.9374 13.8673 68.0327 14.2373 68.0273 14.6189C68.0219 15.0005 67.9161 15.3813 67.7196 15.7258L56.5155 35.4392C56.3098 35.8079 56.008 36.1232 55.6419 36.3517C55.2758 36.5803 54.859 36.7137 54.4354 36.7379C54.0118 36.7621 53.5972 36.6762 53.2353 36.4892C52.8733 36.3022 52.5775 36.0211 52.379 35.6755Z"
//                 fill="#122F4E"
//               />
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M3.31677 16.3405C0.0800771 18.2853 -0.96721 22.4858 0.977593 25.7225L4.13799 30.9822H20.9203L21.0523 30.9029L9.91875 12.3737L3.31677 16.3405Z"
//                 fill="#122F4E"
//               />
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M8.10181 37.5793L19.8946 57.2059C21.0615 59.1479 23.5818 59.7763 25.5238 58.6094L34.47 53.234L25.0637 37.5793H8.10181Z"
//                 fill="#2CC185"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_34_3424"
//                   x1="49.5065"
//                   y1="58.8022"
//                   x2="60.4328"
//                   y2="54.3669"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop offset="0.272266" stop-color="#00B59C" />
//                   <stop offset="1" stop-color="#86FB99" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <h2 className="mt-5 text-xl font-bold mb-4">
//               Login to your account
//             </h2>

//             {/* <h1 className="text-4xl font-bold">WearAi</h1> */}
//           </div>
//         </header>

//         <main className="flex flex-col items-center justify-center mt- -1">
//           <div className="w-full max-w-md">
//             <PhoneInput
//               containerStyle={{ marginTop: "-25px" }}
//               dropdownStyle={{ height: "250px" }}
//               inputStyle={{ height: "45px", width: "320px" }} // Add this line to increase the size
//               country={"in"}
//               value={ph}
//               onChange={setPh}
//               countryCodeEditable={false}
//             />

//             <button
//               onClick={handlePhoneSignIn}
//               className="mt-4 w-full bg-emerald-500  text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Continue
//             </button>

//             <div className="mt-4 text-center">
//               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium: '500'mr-2">
//                 OR
//               </span>
//             </div>

//             <div className="flex flex-col items-center justify-center mt-4">
//               <button
//     className="flex items-center  justify-center w-full bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring focus:ring-blue-300"
//     onClick={handleGoogleSignIn}
//               >
//                 <svg
//                   width="25"
//                   height="25"
//                   viewBox="0 0 25 25"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2" // Adjust margin as needed
//                 >
//                   <path
//                     d="M24.5 12.7778C24.5 11.7501 24.4166 11.0001 24.2361 10.2223H12.5V14.8611H19.3888C19.25 16.0139 18.5 17.7501 16.8333 18.9167L16.8099 19.072L20.5207 21.9466L20.7778 21.9723C23.1388 19.7917 24.5 16.5834 24.5 12.7778Z"
//                     fill="#4285F4"
//                   />
//                   <path
//                     d="M12.5 25.0001C15.8749 25.0001 18.7082 23.8889 20.7777 21.9723L16.8333 18.9167C15.7777 19.6528 14.361 20.1667 12.5 20.1667C9.19442 20.1667 6.38888 17.9862 5.38879 14.9723L5.24219 14.9847L1.38371 17.9709L1.33325 18.1111C3.38879 22.1944 7.61102 25.0001 12.5 25.0001Z"
//                     fill="#34A853"
//                   />
//                   <path
//                     d="M5.38884 14.9722C5.12495 14.1944 4.97223 13.361 4.97223 12.5C4.97223 11.6388 5.12495 10.8055 5.37495 10.0277L5.36796 9.86209L1.46113 6.828L1.3333 6.8888C0.486116 8.58327 0 10.4861 0 12.5C0 14.5139 0.486116 16.4166 1.3333 18.111L5.38884 14.9722Z"
//                     fill="#FBBC05"
//                   />
//                   <path
//                     d="M12.5 4.8333C14.8471 4.8333 16.4304 5.84718 17.3333 6.69447L20.861 3.25C18.6944 1.23612 15.8749 0 12.5 0C7.61102 0 3.38879 2.80553 1.33325 6.88884L5.3749 10.0278C6.38888 7.01388 9.19442 4.8333 12.5 4.8333Z"
//                     fill="#EB4335"
//                   />
//                   {/* Google SVG path */}
//                 </svg>
//                 Continue with Google
//               </button>

//               {/* <button
//                 className="mt-4 flex items-center bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//                 onClick={handleFacebookSignIn}
//               > */}

// <button
//        className="mt-3 flex items-center justify-center  w-full bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"

//     onClick={handleFacebookSignIn}
//   >
//                 <svg
//                   width="13"
//                   height="25"
//                   viewBox="0 0 13 25"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-4" // Adjust margin as needed
//                 >
//                    <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M3.68125 25V13.9575H0V9.35625H3.68125V5.675C3.68125 1.87125 6.08875 0 9.48125 0C11.1062 0 12.5038 0.12125 12.9113 0.175V4.15H10.5575C8.7125 4.15 8.2825 5.02875 8.2825 6.315V9.35625H12.8825L11.9625 13.9563H8.2825L8.35625 25"
//                     fill="#1877F2"
//                   />
//                   {/* Facebook SVG path */}
//                 </svg>
//                 Continue with Facebook
//               </button>
//             </div>

//             {/* <div className="flex flex-col  flex justify-center mt-4">
//               <button
//                 className="bg-gray-200         text-black-500 px-4 py-2 rounded-md font-medium hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"
//                 onClick={handleGoogleSignIn}
//               >
//                 {/* <FcGoogle />
//                 <svg
//                   width="25"
//                   height="25"
//                   viewBox="0 0 25 25"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M24.5 12.7778C24.5 11.7501 24.4166 11.0001 24.2361 10.2223H12.5V14.8611H19.3888C19.25 16.0139 18.5 17.7501 16.8333 18.9167L16.8099 19.072L20.5207 21.9466L20.7778 21.9723C23.1388 19.7917 24.5 16.5834 24.5 12.7778Z"
//                     fill="#4285F4"
//                   />
//                   <path
//                     d="M12.5 25.0001C15.8749 25.0001 18.7082 23.8889 20.7777 21.9723L16.8333 18.9167C15.7777 19.6528 14.361 20.1667 12.5 20.1667C9.19442 20.1667 6.38888 17.9862 5.38879 14.9723L5.24219 14.9847L1.38371 17.9709L1.33325 18.1111C3.38879 22.1944 7.61102 25.0001 12.5 25.0001Z"
//                     fill="#34A853"
//                   />
//                   <path
//                     d="M5.38884 14.9722C5.12495 14.1944 4.97223 13.361 4.97223 12.5C4.97223 11.6388 5.12495 10.8055 5.37495 10.0277L5.36796 9.86209L1.46113 6.828L1.3333 6.8888C0.486116 8.58327 0 10.4861 0 12.5C0 14.5139 0.486116 16.4166 1.3333 18.111L5.38884 14.9722Z"
//                     fill="#FBBC05"
//                   />
//                   <path
//                     d="M12.5 4.8333C14.8471 4.8333 16.4304 5.84718 17.3333 6.69447L20.861 3.25C18.6944 1.23612 15.8749 0 12.5 0C7.61102 0 3.38879 2.80553 1.33325 6.88884L5.3749 10.0278C6.38888 7.01388 9.19442 4.8333 12.5 4.8333Z"
//                     fill="#EB4335"
//                   />
//                 </svg>
//                 Continue with Google
//               </button>

//               <button
//                 className="mt-4 bg-gray-200 text-black-500 px-4 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 "
//                 onClick={handleFacebookSignIn}
//               >
//                 {/* <FaFacebookF />
//                 <svg
//                   width="13"
//                   height="25"
//                   viewBox="0 0 13 25"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M3.68125 25V13.9575H0V9.35625H3.68125V5.675C3.68125 1.87125 6.08875 0 9.48125 0C11.1062 0 12.5038 0.12125 12.9113 0.175V4.15H10.5575C8.7125 4.15 8.2825 5.02875 8.2825 6.315V9.35625H12.8825L11.9625 13.9563H8.2825L8.35625 25"
//                     fill="#1877F2"
//                   />
//                 </svg>
//                 Continue with Facebook
//               </button>
//             </div> */}

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Login;

// Login.jsx sm by code
// Login.jsx

import React from "react";
import { useState } from "react";
import { useRef } from "react";
import PhoneInput from "react-phone-input-2";
import { toast, Toaster } from "react-hot-toast";
// import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import "react-phone-input-2/lib/style.css";
import { initializeApp } from "firebase/app";
// import { auth } from "./firebase.config";
import ExternalLogin from "./ExternalLogin";
import { useHistory } from "react-router-dom";
import {
  PhoneAuthProvider,
  signInWithCredential,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import auth from "../../Firebase/auth";
import FillOTP from "./FillOTP";
import FillNumber from "./FillNumber";
// import firebase from "firebase/app";
// import "firebase/auth";

function Login() {
  const history = useHistory();

  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpComparator, setOtpComparator] = useState(null);
  const [ph, setPh] = useState("");

  const getPhoneNumberFromPh = (ph) => {
    return "9131644980";
  };

  const getCCFromPh = (ph) => {
    return "in";
  };

  const checkUserExistance = async (event) => {
    const phoneNumber = getPhoneNumberFromPh(ph);
    const cc = getCCFromPh(ph);

    console.log("data to be sent", {
      phone_number: phoneNumber,
      country_code: cc,
    });

    const res = await fetch("http://localhost:4200/user/verify-mobile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        country_code: cc,
      }),
    });

    return res;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const existance = await checkUserExistance();
    // if existance fails show a message to user to enter correct details
    // handle the otp logic afterwards
    handleOTPVerfication();
    console.log("user existance= ", existance);
  };

  const handleOTPVerfication = () => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      { size: "invisible" }
    );
    recaptchaVerifier.render();

    // This method sends an OTP to users mobile
    const phoneNumber = "+919131644980";

    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setShowOTP(true);
        setOtpComparator(confirmationResult);
        console.log(confirmationResult);
      })
      .catch((error) => {
        console.log("could not send error", error);
        // show a message that the SMS could not get sent. Try again. clear the phone number as well.
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow lg ">
      <div className=" p-8 rounded  w-full sm:w-96">
        {showOTP ? (
          <FillOTP otp={otp} setOtp={setOtp} otpComparator={otpComparator} />
        ) : (
          <FillNumber ph={ph} setPh={setPh} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default Login;
