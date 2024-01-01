// import { useState } from "react";
// import axios from "axios";

// const SignupLogic = () => {
//   const [first_name, setFirstName] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = (field, value) => {
//     switch (field) {
//       case "first_name":
//         setFirstName(value);
//         break;
//       case "last_name":
//         setLastName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "password":
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/auth/register", {
//         first_name,
//         last_name,
//         email,
//         password,
//       });
//       // Handle successful signup, e.g., redirect to login page
//     } catch (error) {
//       // Handle signup error
//       console.error("Signup failed", error);
//     }
//   };

//   return {
//     first_name,
//     last_name,
//     email,
//     password,
//     handleSignup,
//     handleChange,
//   };
// };

// export default SignupLogic;

// SignupLogic.js
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupLogic = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false); // New state

  const history = useHistory();

  const handleChange = (field, value) => {
    switch (field) {
      case "first_name":
        setFirstName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        first_name,
        last_name,
        email,
        password,
      });

      // Assuming your API returns a success message
      setMessage("Verification mail sent to your email");
      setIsVerifyingEmail(true);
      // Redirect to login page after 2 seconds
      //

      history.push("/login");
    } catch (error) {
      // Handle signup error
      console.error("Signup failed", error);
    }
  };

  return {
    first_name,
    last_name,
    email,
    password,
    message,
    handleSignup,
    handleChange,
    isVerifyingEmail,
  };
};

export default SignupLogic;
