import { useHistory } from "react-router-dom";
import { useRef } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const FillOTP = (props) => {
  const otp = props.otp;
  const setOtp = props.setOtp;
  const otpComparator = props.otpComparator;
  const history = useHistory();
  const inputRefs = useRef([]);

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPrevInput = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleChange = (event, index) => {
    const value = event.target.value;

    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        focusNextInput(index);
      }
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      focusPrevInput(index - 1);
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   otpComparator
  //     .confirm(otp.join(""))
  //     .then((res) => {
  //       history.push("/");
  //     })
  //     .catch((error) => {
  //       console.log("otp verfication failed. here is the error ", error);
  //     });
  //   console.log("I am submitting this otp = ", otp);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    otpComparator
      .confirm(otp.join(""))
      .then((res) => {
        const bearerTokenRequest = {
          phone_number: "9131644980",
          country_code: "IN",
          device_token: "utyuoiyptoiupyou",
        };
        console.log("Sending bearer token request:", bearerTokenRequest);

        axios
          .post("http://localhost:4200/user/bearer-token", bearerTokenRequest)
          .then((response) => {
            const token = response.data.payload.token;

            // Store the token locally (you can use localStorage or any other storage mechanism)
            localStorage.setItem("userToken", token);

            // Redirect to the dashboard
            history.push("/");
          })
          .catch((error) => {
            console.log("Error obtaining bearer token:", error);
          });
      })
      .catch((error) => {
        console.log("OTP verification failed. Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        {/* <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-3xl font-bold mb-4">Enter Verification Code</h1>
          <p>Input code we sent to +91 XXXXXXXXXX80</p>
          <h3 className="font-bold mt-4">Enter code here</h3>
        </div> */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-xl font-bold mb-4">Enter Verification Code</h1>
          <p>Input code +91 XXXXXXXXXX80</p>
          <h3 className="font-bold mt-4">Enter code here</h3>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Verification Code Input */}
          <div className="mb-4 flex items-center justify-between mt- -7 ">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                onFocus={() => handleFocus(index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="  p-2 border rounded text-center ml-2"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Verify
            </button>
          </div>

          <p className=" mt-7 mb-6 text-sm text-gray-500 text-center ">
            back to{" "}
            <a href="/login" className="text-blue-500">
              login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FillOTP;
