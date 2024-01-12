import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUserCircle, FaTrash } from "react-icons/fa";

const EditProfile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const STATIC_TOKEN =
    "qfSsVh51eaEdguLrxQ9E6Dn5Ig1Kigr7X1lKZ9rrevCgFK9h2MW6dE70LEgI";

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
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Prepare the data to be sent in the update request
    const userData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone_number: ph,
      address1: address,
      city: city,
      state: state,
      zipcode: zipcode,
      country_id: country, // Assuming this is the correct property for country ID
      // Add other fields as needed
    };

    // Add the profile image if available
    if (profileImage) {
      userData.profile_img = profileImage;
    }

    // Send the update request
    const staticToken =
      "qfSsVh51eaEdguLrxQ9E6Dn5Ig1Kigr7X1lKZ9rrevCgFK9h2MW6dE70LEgI";
    fetch("http://localhost:4200/user/profile/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${staticToken}`,
      },
      body: JSON.stringify(userData),
    });

    console
      .log(userData)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log("User updated successfully");
        } else {
          console.error("Failed to update user:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="max-w-5xl mt-20 mx-auto justify-between align-items-center p-8 bg-white rounded shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <label htmlFor="profileImageInput" className="cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full h-12 w-12 mr-2 object-cover"
              />
            ) : (
              <FaUserCircle className="text-4xl mr-2" />
            )}
          </label>
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <span className="text-2xl font-bold">Edit Profile</span>
        </div>
        <div className="flex items-center">
          <button className="text-blue-500 mr-2">Change Password</button>
          <FaTrash className="text-red-500" />
        </div>
      </div>

      {/* Rest of your component code */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InputWithLabel
          label="First Name"
          value={firstname}
          onChange={setFirstName}
        />
        <InputWithLabel
          label="Last Name"
          value={lastname}
          onChange={setLastName}
        />
        <InputWithLabel label="Email" value={email} onChange={setEmail} />
        <PhoneInput
          containerStyle={{ marginLeft: "20px", marginTop: "10px" }}
          inputStyle={{ height: "55px" }}
          country={"in"}
          value={ph}
          onChange={setPh}
          countryCodeEditable={false}
        />

        <InputWithLabel label="Address" value={address} onChange={setAddress} />

        <InputWithLabel label="City" value={city} onChange={setCity} />
        <InputWithLabel label="State" value={state} onChange={setState} />
        <InputWithLabel label="ZipCode" value={zipcode} onChange={setZipcode} />
        <CountryDropdown
          value={country}
          onChange={setCountry}
          countryList={countryList}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded">
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-emerald-500 text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const InputWithLabel = ({ label, value, onChange }) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    setIsTyping(!!e.target.value);
  };

  return (
    <div className={"input-container mb-4 "}>
      <label className={`placeholder ${isTyping ? "small" : ""} text-gray-500`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="w-full p-7 border border-gray-300 rounded h-10"
      />
    </div>
  );
};

const CountryDropdown = ({ value, onChange, countryList }) => {
  return (
    <div className={`input-container mb-4 flex-grow`}>
      <label className={`placeholder ${value ? "small" : ""} text-gray-500`}>
        Country
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-7 border border-gray-300 rounded h-10"
        style={{
          marginTop: "0",
          marginBottom: "0",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        <option value="">Select Country</option>
        {countryList.map((country) => (
          <option key={country.id} value={country.short_name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// ... (rest of the code remains unchanged)

export default EditProfile;
