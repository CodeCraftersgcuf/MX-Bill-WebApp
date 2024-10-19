import React, { useRef, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { verifyEmailOtp } from '../util/queries/authMutations';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../components/PrimaryBtn';

function OtpInputWithValidation({ numberOfDigits = 4 }) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const userId = state?.userId;

  // Use Mutation to verify OTP
  const { mutate: verifyOtpMutation, isPending } = useMutation({
    mutationFn: verifyEmailOtp,
    onSuccess: (data) => {
      toast.success("OTP verified successfully!");
      console.log(data);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);  // Show detailed error message from API
    }
  });

  // Handle input change
  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  // Handle Backspace and Enter key for navigation between OTP inputs
  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  // Submit OTP for verification
  const handleOtpSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === numberOfDigits) {
      verifyOtpMutation({
        user_id: userId?.toString(),  // Ensure user_id is safely converted to string
        otp: otpValue
      });
    } else {
      toast.error("Please enter a valid OTP.");  // Show message for incomplete OTP
    }
  };

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== "1234") {
      // Set error message for wrong OTP format, though this can be extended
      // setOtpError("❌ Wrong OTP. Please check again.");
    } else {
      setOtpError(null);
    }
  }, [otp]);

  return (
    <article className="flex flex-col items-center h-screen bg-gray-800">
      <p className="text-2xl font-medium mt-12 text-center">OTP Input With Validation</p>
      <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md text-center max-w-lg">
        A special type of input box where as user types, it checks if the OTP is correct. If incorrect, it shows an error message below.
      </p>

      <p className="text-base mt-6 mb-4">One Time Password (OTP)</p>

      <div className="flex items-center justify-center gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(reference) => (otpBoxReference.current[index] = reference)}
            className="border w-16 h-16 text-center text-xl p-3 rounded-md text-white bg-black focus:border-2 focus:outline-none"
          />
        ))}
      </div>

      {/* Display OTP Error if any */}
      {otpError && (
        <p className="text-lg text-red-500 mt-4 animate-shake">
          {otpError}
        </p>
      )}

      {/* Submit Button with Loading State */}
      <PrimaryBtn
        onClick={handleOtpSubmit}
        disabled={isPending}
      >
        {isPending ? "Verifying..." : "Verify OTP"}
      </PrimaryBtn>
    </article>
  );
}

export default OtpInputWithValidation;
