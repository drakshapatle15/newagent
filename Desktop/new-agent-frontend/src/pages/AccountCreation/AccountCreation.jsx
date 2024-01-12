import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useHistory } from "react-router-dom"; // Import useHistory
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const InputWithLabel = ({
  label,
  value,
  onChange,
  isFirstNameValid,
  errorMessage,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    setIsTyping(!!e.target.value);
  };

  return (
    <div
      className={`input-container mb-4
	  `}
    >
      <label
        className={`placeholder ${isTyping ? "small" : ""} text-gray-500 `}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded h-10 "
        // className={`w-full p-2 border ${
        //   isFirstNameValid ? "border-gray-300" : "border-red-500"
        // } rounded h-10 `}
      />
      {!isFirstNameValid && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

const CountryDropdown = ({
  selectedCountry,
  setSelectedCountry,
  countryList,
}) => {
  return (
    <div className={`input-container mb-4 `}>
      {/* <label
        className={`placeholder ${
          selectedCountry ? "small" : ""
        } text-gray-500`}
      ></label> */}
      {/* <input
        readonly
        type="text"
        className="w-full p-7 border border-gray-300 rounded h-10 "
      /> */}
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
        className="w-64 h-10 border border-gray-300 rounded" // Add border styles
        style={{
          marginTop: "0",
          marginBottom: "10px",
          //   overflowY: "auto",
          borderRadius: "none",
          paddingLeft: "1.75rem",
        }}
      >
        <option value="s">Select Country</option>
        {countryList.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const extractPhoneNumberWithoutCountryCode = (phoneNumber, country) => {
  const phoneUtil =
    require("google-libphonenumber").PhoneNumberUtil.getInstance();
  const parsedNumber = phoneUtil.parse(phoneNumber, country);

  return phoneUtil.format(parsedNumber, "NATIONAL").replace(/\D/g, "");
};

const AccountCreationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [ph, setPh] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const history = useHistory(); // Initialize history
  const [isFirstNameValid, setIsFirstNameValid] = useState(true); // Add validation state

  const redirectToLogin = () => {
    history.push("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName.trim()) {
      setIsFirstNameValid(false);
      toast.error("First name is required", { position: "top-center" });
      return;
    }

    setIsFirstNameValid(true);

    const phoneNumberWithoutCountryCode = extractPhoneNumberWithoutCountryCode(
      ph,
      "IN"
    );

    // Assuming your server endpoint and method
    const apiUrl = "http://localhost:4200/user/register";
    const selectedCountryObj = countryList.find(
      (countryObj) => countryObj.name === selectedCountry
    );
    const requestData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumberWithoutCountryCode,
      country_code: selectedCountryObj.short_name,
      address1: address,
      city: city,
      state: state,
      country_id: selectedCountryObj.id,
      zipcode: zipcode,
    };
    console.log(requestData);

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        // console.log(data);
        // if (data.success) {
        //   redirectToLogin(); // Redirect to the login page
        // }

        history.push("/verify");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error submitting data:", error);
      });
  };

  useEffect(() => {
    // Fetch country list when the component mounts
    fetch("http://localhost:4200/common/country/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_number: 1,
        records_per_page: "100000",
        sort_field: "name",
        sort_order: "ASC",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setCountryList(data.payload.data);
        } else {
          console.error("Failed to fetch country list");
        }
      })
      .catch((error) => {
        console.error("Error fetching country list:", error);
      });
  }, []); // Empty dependency array to fetch the list only once when the component mounts

  return (
    <div className="max-w-xl mx-auto mt-5  bg-white rounded shadow-lg ">
      <div className="text-center ">
        <h4 className="text-2xl font-bold mb-2">Account Info </h4>
        <p className=" font-semibold text-gray-500">
          Let's get started! Creating an Account creating{" "}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={`grid grid-cols-2 gap-y-0 `}>
          <InputWithLabel
            label="First Name"
            value={firstName}
            onChange={setFirstName}
            className={`w-full p-2 border ${
              isFirstNameValid ? "border-gray-300" : "border-red-500"
            } rounded h-10 `}
          />
          <InputWithLabel
            label="Last Name"
            value={lastName}
            onChange={setLastName}
          />
        </div>
        <InputWithLabel label="Email" value={email} onChange={setEmail} />

        <PhoneInput
          containerStyle={{
            marginTop: "10px",
            marginLeft: "17px",
            marginRight: "17px",
          }} // Adjust the margin to your preference
          dropdownStyle={{ height: "250px" }}
          inputStyle={{
            height: "40px",
            // maxWidth: "150%",
            width: "90%",

            padding: "0.75rem",
            marginLeft: "2rem",
          }} // Added marginLeft
          country={"in"}
          value={ph}
          required={true}
          autoformat={false}
          enableSearch={true}
          onChange={setPh}
          copyNumbersOnly={true}
          countryCodeEditable={false}
        />
        <InputWithLabel label="Address" value={address} onChange={setAddress} />

        <div className="grid gap-4 grid-cols-2 gap-y-0 ">
          <InputWithLabel label="State" value={state} onChange={setState} />
          <InputWithLabel label="City" value={city} onChange={setCity} />
          <InputWithLabel
            label="ZipCode"
            value={zipcode}
            onChange={setZipcode}
          />
          <CountryDropdown
            countryList={countryList}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>

        <div className="flex gap-6 "></div>

        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 ml-4 bg-gray-500"
          />
          <span className="ml-2 text-sm">
            By Creating an Account you are agreeng our Term and Policy
          </span>
        </div>

        <div className="text-center  mb-6">
          <button
            type="submit"
            className="w-full mt-4 p-4 bg-emerald-500  text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>

          <p className=" mt-2 mb-6 text-sm text-gray-500">
            already have an account?{" "}
            <a href="/login" className="text-blue-500">
              login
            </a>
            .
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AccountCreationPage;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useHistory } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const InputWithLabel = ({ label, value, onChange, errorMessage }) => {
//   return (
//     <div className={`input-container mb-4`}>
//       <label className={`placeholder ${value ? "small" : ""} text-gray-500`}>
//         {label}
//       </label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full p-2 border rounded h-10"
//       />
//       {errorMessage && (
//         <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
//       )}
//     </div>
//   );
// };

// const CountryDropdown = ({
//   selectedCountry,
//   setSelectedCountry,
//   countryList,
// }) => {
//   return (
//     <div className={`input-container mb-4`}>
//       <select
//         value={selectedCountry}
//         onChange={(e) => {
//           setSelectedCountry(e.target.value);
//         }}
//         className="w-64 h-10 border border-gray-300 rounded"
//       >
//         <option value="">Select Country</option>
//         {countryList.map((country) => (
//           <option key={country.id} value={country.name}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const AccountCreationPage = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//   const history = useHistory();

//   const redirectToLogin = () => {
//     history.push("/login");
//   };

//   const onSubmit = (data) => {
//     // Handle form submission
//     console.log(data);
//     redirectToLogin();
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-5 bg-white rounded shadow-lg">
//       <div className="text-center">
//         <h4 className="text-2xl font-bold mb-2">Account Info </h4>
//         <p className="font-semibold text-gray-500">
//           Let's get started! Creating an Account
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Other form inputs */}
//         <InputWithLabel
//           label="First Name"
//           value=""
//           onChange={() => {}}
//           errorMessage={errors.firstName && errors.firstName.message}
//         />

//         <InputWithLabel
//           label="Last Name"
//           value=""
//           onChange={() => {}}
//           errorMessage={errors.lastName && errors.lastName.message}
//         />

//         <InputWithLabel
//           label="Email"
//           value=""
//           onChange={() => {}}
//           errorMessage={errors.email && errors.email.message}
//         />

//         <PhoneInput
//           containerStyle={{
//             marginTop: "10px",
//             marginLeft: "17px",
//             marginRight: "17px",
//           }}
//           dropdownStyle={{ height: "250px" }}
//           inputStyle={{
//             height: "40px",
//             width: "90%",
//             padding: "0.75rem",
//             marginLeft: "2rem",
//           }}
//           country={"in"}
//           value=""
//           required={true}
//           autoformat={false}
//           enableSearch={true}
//           {...control("phone", { required: "Phone number is required" })}
//         />

//         <InputWithLabel
//           label="Address"
//           value=""
//           onChange={() => {}}
//           errorMessage={errors.address && errors.address.message}
//         />

//         {/* Other form inputs */}

//         <CountryDropdown
//           countryList={[]}
//           selectedCountry=""
//           setSelectedCountry={() => {}}
//         />

//         <div className="mb-2 flex items-center">
//           <input
//             type="checkbox"
//             className="form-checkbox h-6 w-6 ml-4 bg-gray-500"
//           />
//           <span className="ml-2 text-sm">
//             By Creating an Account you are agreeing to our Terms and Policies
//           </span>
//         </div>

//         <div className="text-center mb-6">
//           <button
//             type="submit"
//             className="w-full mt-4 p-4 bg-emerald-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Submit
//           </button>

//           <p className="mt-2 mb-6 text-sm text-gray-500">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-500">
//               Login
//             </a>
//             .
//           </p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AccountCreationPage;
