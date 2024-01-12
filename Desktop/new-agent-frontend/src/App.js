// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard/dashboard";
// import Signup from "./signup/signup";
// import Login from "./login/login";
// import AgentDashboard from "./Agent/AgentDashboard";
// import EmailVerification from "./signup/EmailVerification";
// import ForgotPassword from "./ForgotPassword/ForgotPassword";
// import ResetPassword from "./Reset/ResetPassword";
// import ProfileSetupUI from "./profile/ProfileSetupUI";
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={Signup} />
//         <Route path="/email-verify/:token" component={EmailVerification} />
//         <Route path="/login" component={Login} />
//         <Route path="/forgot-password" component={ForgotPassword} />
//         <Route path="/reset-password/:email/:token" component={ResetPassword} />
//         <Route path="/profile" component={ProfileSetupUI} />
//         <Route path="/agents" component={AgentDashboard} />

//         <Route
//           exact
//           path="/total-pages"
//           render={() => <div>{AgentDashboard}</div>}
//         />
//         <Route exact path="/" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

//this is my final app.js by db

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard/dashboard";
// import AccountCreationPage from "./pages/AccountCreation/AccountCreation";
// import EditProfile from "./pages/EditProfile/EditProfile";
// import Login from "./pages/Login/Login";
// import PhoneVerification from "./pages/PhoneVerification/PhoneVerification";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/verify" component={PhoneVerification} />
//         <Route path="/login" component={Login} />
//         <Route path="/edit-profile" component={EditProfile} />
//         <Route path="/account-create" component={AccountCreationPage} />
//         {/* <Route exact path="/" component={Dashboard} /> */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;

//this is my final app.js by db

// import React, { useState } from "react";
// import "./index.css"; // You can define your styles in App.css

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     setFullName(e.target.value);
//     setIsTyping(!!e.target.value); // Set isTyping to true if there is any input
//   };

//   return (
//     <div className="input-container">
//       <label className={`placeholder ${isTyping ? "small" : ""}`}>
//         Full Name
//       </label>
//       <input type="text" value={fullName} onChange={handleInputChange} />
//       {isTyping && (
//         <div className="typed-text">
//           You typed: <span>{fullName}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./index.css"; // You can define your styles in App.css

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className="input-container">
//       <label className={`placeholder ${isTyping ? "small" : ""}`}>
//         {label}
//       </label>
//       <input type="text" value={value} onChange={handleInputChange} />
//     </div>
//   );
// };

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");

//   return (
//     <div>
//       <InputWithLabel
//         label="Full Name" value={fullName}onChange={setFullName} />
//           <InputWithLabel  label="Last Name" value={lastName}  onChange={setLastName}/>
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />
//       <InputWithLabel  label="State"  value={state}  onChange={setState} />
//       <InputWithLabel  label="City" value={city}  onChange={setCity} />
//       <InputWithLabel  label="ZipCode" value={zipcode}  onChange={setZipcode} />
//       <InputWithLabel  label="Country" value={country}  onChange={setCountry} />
//     </div>
//   );
// };

// export default App;

// // Import required modules from Tailwind CSS
// import "tailwindcss/tailwind.css";
// import React, { useState } from "react";

// import { Fragment } from "react";
// // import { Disclosure, Transition } from "@headlessui/react";

// // ... (your existing imports)

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className="input-container mb-4">
//       <label className={`placeholder ${isTyping ? "small" : ""}`}>{label}</label>
//       <input type="text" value={value} onChange={handleInputChange} className="w-full p-7 border border-gray-300 rounded h-10" />
//     </div>
//   );
// };

// const App = () => {
//   // ... (your existing state variables)
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
//       <InputWithLabel label="Full Name" value={fullName} onChange={setFullName}   />
//       <InputWithLabel label="Last Name" value={lastName} onChange={setLastName} />
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />
//       <InputWithLabel label="Address" value={address} onChange={setAddress} />
//       <div className="flex gap-6 mb-4">
//         <InputWithLabel label="State" value={state} onChange={setState} />
//         <InputWithLabel label="City" value={city} onChange={setCity} />
//       </div>
//       <div className="flex gap-4 ">
//         <InputWithLabel label="ZipCode" value={zipcode} onChange={setZipcode} />
//         <InputWithLabel label="Country" value={country} onChange={setCountry} />
//       </div>

//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input type="checkbox" className="form-checkbox" />
//           <span className="ml-2">I accept the terms and conditions</span>
//         </label>
//       </div>

//       <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
//     </div>
//   );
// };

// export default App;

// Import required modules from Tailwind CSS

//reserve for  the edit account

// import "tailwindcss/tailwind.css";
// import React, { useState,useEffect} from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className={`input-container mb-4 ${label === "ZipCode"|| label === "State"|| label === "Country"||label === "City" ? "flex-grow" : ""}`}>
//       <label className={`placeholder ${isTyping ? "small" : ""} text-gray-500`}>{label}</label>
//       <input type="text" value={value} onChange={handleInputChange} className="w-full p-7 border border-gray-300 rounded h-10 " />
//     </div>
//   );
// };

// const CountryDropdown = ({ value, onChange, countryList }) => {
//   return (
//     <div className={`input-container mb-4 flex-grow`}>
//       <label className={`placeholder ${value ? "small" : ""} text-gray-500`}>Country</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full p-7 border border-gray-300 rounded h-10"
//         style={{ marginTop: '0', marginBottom: '0' }} // Add this style
//       >
//         <option value="">Select Country</option>
//         {countryList.map((country) => (
//           <option key={country.id} value={country.short_name}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");
//   const [ph, setPh] = useState("");

//   const [countryList, setCountryList] = useState([]);

//   useEffect(() => {
//     // Fetch country list when the component mounts
//     fetch("http://localhost:4200/common/country/list", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         page_number: 1,
//         records_per_page: "10",
//         sort_field: "name",
//         sort_order: "ASC",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setCountryList(data.payload.data);
//         } else {
//           console.error("Failed to fetch country list");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching country list:", error);
//       });
//   }, []); // Empty dependency array to fetch the list only once when the component mounts

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold mb-2">Account Info </h1>
//         <p className= "text-xl font-semibold text-gray-500">Let's get  started! Creating an Account creating  </p>
//       </div>

//       <InputWithLabel label="Full Name" value={fullName} onChange={setFullName}  className="text-gray-500"/>
//       <InputWithLabel label="Last Name" value={lastName} onChange={setLastName} />
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />

// <PhoneInput
//           containerStyle={{ marginTop: '10px' , marginLeft:'17px' ,marginRight:'17px'}} // Adjust the margin to your preference
//           dropdownStyle={{ height: '250px' }}
//           inputStyle={{ height: "55px", width: "90%", padding: "0.75rem", marginLeft: "2rem"  }} // Added marginLeft
//           country={"in"}
//           value={ph}
//           onChange={setPh}
//           countryCodeEditable={false}
//         />
//       <InputWithLabel label="Address" value={address} onChange={setAddress} />

//       <div className="flex gap-6 mb-4">
//         <InputWithLabel label="State" value={state} onChange={setState} />
//         <InputWithLabel label="City" value={city} onChange={setCity} />
//       </div>

//       <div className="flex gap-4 mb-4">
//         <InputWithLabel label="ZipCode" value={zipcode} onChange={setZipcode} />
//         <CountryDropdown
//         value={country}
//         onChange={setCountry}
//         countryList={countryList}
//       />
//         {/* <InputWithLabel label="Country" value={country} onChange={setCountry} /> */}
//       </div>

//       <div className="mb-4 flex items-center">
//         <input type="checkbox" className="form-checkbox h-6 w-6 ml-4 bg-gray-500" />
//         <span className="ml-2 text-sm">By Creating an Account you are agreeng our Term and Policy</span>
//       </div>

//       <div className="text-center">
//         <button className="mt-4 w-full bg-emerald-500  text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import "tailwindcss/tailwind.css";
// import React, { useState,useEffect} from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className={`input-container mb-4 ${label === "ZipCode"|| label === "State"|| label === "Country"||label === "City" ? "flex-grow" : ""}`}>
//       <label className={`placeholder ${isTyping ? "small" : ""} text-gray-500`}>{label}</label>
//       <input type="text" value={value} onChange={handleInputChange} className="w-full p-7 border border-gray-300 rounded h-10 " />
//     </div>
//   );
// };
// const CountryDropdown = ({ value, onChange, countryList }) => {
//   return (
//     <div className={`input-container mb-4 flex-grow`}>
//       <label className={`placeholder ${value ? "small" : ""} text-gray-500`}>Country</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full p-7 border border-gray-300 rounded h-10"
//         style={{ marginTop: '0', marginBottom: '0', maxHeight: '150px', overflowY: 'auto' }}
//       >
//         <option value="">Select Country</option>
//         {countryList.map((country) => (
//           <option key={country.id} value={country.short_name}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");
//   const [ph, setPh] = useState("");

//   const [countryList, setCountryList] = useState([]);

//   useEffect(() => {
//     // Fetch country list when the component mounts
//     fetch("http://localhost:4200/common/country/list", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         page_number: 1,
//         records_per_page: "100000",
//         sort_field: "name",
//         sort_order: "ASC",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setCountryList(data.payload.data);
//         } else {
//           console.error("Failed to fetch country list");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching country list:", error);
//       });
//   }, [useEffect]); // Empty dependency array to fetch the list only once when the component mounts

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold mb-2">Account Info </h1>
//         <p className= "text-xl font-semibold text-gray-500">Let's get  started! Creating an Account creating  </p>
//       </div>

//       <InputWithLabel label="Full Name" value={fullName} onChange={setFullName}  className="text-gray-500"/>
//       <InputWithLabel label="Last Name" value={lastName} onChange={setLastName} />
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />

// <PhoneInput
//           containerStyle={{ marginTop: '10px' , marginLeft:'17px' ,marginRight:'17px'}} // Adjust the margin to your preference
//           dropdownStyle={{ height: '250px' }}
//           inputStyle={{ height: "55px", width: "90%", padding: "0.75rem", marginLeft: "2rem"  }} // Added marginLeft
//           country={"in"}
//           value={ph}
//           onChange={setPh}
//           countryCodeEditable={false}
//         />
//       <InputWithLabel label="Address" value={address} onChange={setAddress} />

//       <div className="flex gap-6 mb-4">
//         <InputWithLabel label="State" value={state} onChange={setState} />
//         <InputWithLabel label="City" value={city} onChange={setCity} />
//       </div>

//       <div className="flex gap-4 mb-4">
//         <InputWithLabel label="ZipCode" value={zipcode} onChange={setZipcode} />
//         <CountryDropdown
//         value={country}
//         onChange={setCountry}
//         countryList={countryList}
//       />
//         {/* <InputWithLabel label="Country" value={country} onChange={setCountry} /> */}
//       </div>

//       <div className="mb-4 flex items-center">
//         <input type="checkbox" className="form-checkbox h-6 w-6 ml-4 bg-gray-500" />
//         <span className="ml-2 text-sm">By Creating an Account you are agreeng our Term and Policy</span>
//       </div>

//       <div className="text-center">
//         <button className="mt-4 w-full bg-emerald-500  text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import "tailwindcss/tailwind.css";
// import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className={`input-container mb-4 ${label === "ZipCode" || label === "State" || label === "Country" || label === "City" ? "flex-grow" : ""}`}>
//       <label className={`placeholder ${isTyping ? "small" : ""} text-gray-500`}>{label}</label>
//       <input type="text" value={value} onChange={handleInputChange} className="w-full p-7 border border-gray-300 rounded h-10 " />
//     </div>
//   );
// };

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null); // New state to store the selected country
//   const [ph, setPh] = useState("");
//   const [countryList, setCountryList] = useState([]);

//   const CountryDropdown = ({ value, onChange, selectedCountry, countryList }) => {

//   console.log(selectedCountry)
//     return (
//       <div className={`input-container mb-4 flex-grow`}>
//         <label className={`placeholder ${selectedCountry ? "small" : ""} text-gray-500`}>Country</label>
//         <select
//           value={value}
//           onChange={(e) => {
//             onChange(e.target.value);
//             selectedCountry && selectedCountry.short_name !== e.target.value && onChangeCountry(selectedCountry);
//           }}
//           className="w-full p-7 border border-gray-300 rounded h-10"
//           style={{ marginTop: '0', marginBottom: '0', maxHeight: '150px', overflowY: 'auto' }}
//         >
//           <option value="">Select Country</option>
//           {countryList.map((country) => (
//             <option key={country.id} value={country.short_name}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };

//   useEffect(() => {
//     // Fetch country list when the component mounts
//     fetch("http://localhost:4200/common/country/list", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         page_number: 1,
//         records_per_page: "100000",
//         sort_field: "name",
//         sort_order: "ASC",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setCountryList(data.payload.data);
//         } else {
//           console.error("Failed to fetch country list");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching country list:", error);
//       });
//   }, []);

//   // Function to handle changing the selected country
//   const onChangeCountry = (selectedCountry) => {
//     setSelectedCountry(selectedCountry);
//     setCountry(selectedCountry.short_name);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold mb-2">Account Info </h1>
//         <p className="text-xl font-semibold text-gray-500">Let's get started! Creating an Account creating </p>
//       </div>

//       <InputWithLabel label="Full Name" value={fullName} onChange={setFullName} className="text-gray-500" />
//       <InputWithLabel label="Last Name" value={lastName} onChange={setLastName} />
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />

//       <PhoneInput
//         containerStyle={{ marginTop: '10px', marginLeft: '17px', marginRight: '17px' }}
//         dropdownStyle={{ height: '250px' }}
//         inputStyle={{ height: "55px", width: "90%", padding: "0.75rem", marginLeft: "2rem" }}
//         country={"in"}
//         value={ph}
//         onChange={setPh}
//         countryCodeEditable={false}
//       />
//       <InputWithLabel label="Address" value={address} onChange={setAddress} />

//       <div className="flex gap-6 mb-4">
//         <InputWithLabel label="State" value={state} onChange={setState} />
//         <InputWithLabel label="City" value={city} onChange={setCity} />
//       </div>

//       <div className="flex gap-4 mb-4">
//         <InputWithLabel label="ZipCode" value={zipcode} onChange={setZipcode} />
//         <CountryDropdown
//           value={country}
//           onChange={setCountry}
//           selectedCountry={selectedCountry}
//           countryList={countryList}
//         />
//       </div>

//       <div className="mb-4 flex items-center">
//         <input type="checkbox" className="form-checkbox h-6 w-6 ml-4 bg-gray-500" />
//         <span className="ml-2 text-sm">By Creating an Account you are agreeing to our Term and Policy</span>
//       </div>

//       <div className="text-center">
//         <button className="mt-4 w-full bg-emerald-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard/dashboard";
// import Signup from "./signup/signup";
// import Login from "./login/login";
// import AgentDashboard from "./Agent/AgentDashboard";
// import EmailVerification from "./signup/EmailVerification";
// import ForgotPassword from "./ForgotPassword/ForgotPassword";
// import ResetPassword from "./Reset/ResetPassword";
// import ProfileSetupUI from "./profile/ProfileSetupUI";
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={Signup} />
//         <Route path="/email-verify/:token" component={EmailVerification} />
//         <Route path="/login" component={Login} />
//         <Route path="/forgot-password" component={ForgotPassword} />
//         <Route path="/reset-password/:email/:token" component={ResetPassword} />
//         <Route path="/profile" component={ProfileSetupUI} />
//         <Route path="/agents" component={AgentDashboard} />

//         <Route
//           exact
//           path="/total-pages"
//           render={() => <div>{AgentDashboard}</div>}
//         />
//         <Route exact path="/" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

// This is by saurabh

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountCreationPage from "./pages/AccountCreation/AccountCreation";
import EditProfile from "./pages/EditProfile/EditProfile";
import Login from "./pages/Login/Login";
import PhoneVerification from "./pages/PhoneVerification/PhoneVerification";
import AdminLogin from "./pages/AdminLogin/Adminlogin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminEditProfile from "./AdminEditProfile/AdminEditProfile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/verify" component={PhoneVerification} />
        <Route path="/login" component={Login} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/account-create" component={AccountCreationPage} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/admin-editprofile" component={AdminEditProfile} />
      </Switch>
    </Router>
  );
};

export default App;

// This is by saurabh

// import React, { useState } from "react";
// import "./index.css"; // You can define your styles in App.css

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     setFullName(e.target.value);
//     setIsTyping(!!e.target.value); // Set isTyping to true if there is any input
//   };

//   return (
//     <div className="input-container">
//       <label className={`placeholder ${isTyping ? "small" : ""}`}>
//         Full Name
//       </label>
//       <input type="text" value={fullName} onChange={handleInputChange} />
//       {isTyping && (
//         <div className="typed-text">
//           You typed: <span>{fullName}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./index.css"; // You can define your styles in App.css

// const InputWithLabel = ({ label, value, onChange }) => {
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     onChange(e.target.value);
//     setIsTyping(!!e.target.value);
//   };

//   return (
//     <div className="input-container">
//       <label className={`placeholder ${isTyping ? "small" : ""}`}>
//         {label}
//       </label>
//       <input type="text" value={value} onChange={handleInputChange} />
//     </div>
//   );
// };

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <div>
//       <InputWithLabel
//         label="Full Name"
//         value={fullName}
//         onChange={setFullName}
//       />
//       <InputWithLabel label="Email" value={email} onChange={setEmail} />
//       <InputWithLabel
//         label="Last Name"
//         value={lastName}
//         onChange={setLastName}
//       />
//       <InputWithLabel
//         label="Last Name"
//         value={lastName}
//         onChange={setLastName}
//       />
//       <InputWithLabel
//         label="Last Name"
//         value={lastName}
//         onChange={setLastName}
//       />
//     </div>
//   );
// };

// export default App;
