import React, { useState, useEffect } from "react";

const PhoneVerification = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "","",""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your verification logic here
  };
  // const handleVerificationCodeChange = (e) => {
  //   setVerificationCode(e.target.value);
  // };

  // const handleVerificationCodeChange = (index, value) => {
  //   setVerificationCode((prevCodes) => {
  //     const newCodes = [...prevCodes];
  //     newCodes[index] = value;
  //     return newCodes;
  //   });
  // };

  const handleVerificationCodeChange = (index, value) => {
    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];
      // Make sure the value is a digit and restrict the length to 6
      if (/^\d+$/.test(value) && value.length <= 6) {
        newCodes[index] = value;
      }
      return newCodes;
    });
  };
  

  const handleResendCode = () => {
    // Add logic to resend verification code
    // Reset the timer
    setTimer(30);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
       
        <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Enter Verification Code</h1>
        <p>Input code we sent to +91 XXXXXXXXXX80</p>
        <h3 className="font-bold mt-4">Enter code here</h3>
        </div>
       
        <br></br>
        <form onSubmit={handleSubmit}>
          {/* Verification Code Input */}
          <div className="mb-4 flex items-center justify-between mt- -7 ">
            {verificationCode.map((digit, index) => (                                                              
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) =>
                  handleVerificationCodeChange(index, e.target.value)
                }
                className="w-1/4 h-1 p-6 border rounded text-center ml-4"
                required
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

          {/* Timer and Resend Code */}
          <div className="flex justify-between mb-4">
            <p>
              {timer > 0 ? `Time remaining: ${timer}s` : "Resend a New Code"}
            </p>
            {timer === 0 && (
              <button
                type="button"
                onClick={handleResendCode}
                className="text-blue-500"
              >
                Resend Code
              </button>
            )}
          
          </div>
          <p className="flex flex-col items-center justify-center mb-4">back to login</p>
        </form>
      </div>
    </div>
  );
};

export default PhoneVerification;
