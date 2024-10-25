import { useRef, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { verifyEmailOtp, resendOtp } from '../util/queries/authMutations';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../components/PrimaryBtn';
import AuthFlow from './auth/AuthFlow/AuthFlow';

function OtpVerification({ numberOfDigits = 4, isOtp, onSuccess}) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [resendTimer, setResendTimer] = useState(10);  // 60-second timer state
  const [resendInterval, setResendInterval] = useState(null);
  const otpBoxReference = useRef([]);
  const navigate = useNavigate();

  // Get userId and email from the state passed from the signup page
  const { state } = useLocation();
  const userId = state?.userId;
  const email = state?.email;

  // Mutation to verify OTP
  const { mutate: verifyOtpMutation, isPending } = useMutation({
    mutationFn: verifyEmailOtp,
    onSuccess: (data) => {
      console.log(data);
      toast.success("OTP verified successfully!");
      navigate("/type");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);  // Show detailed error message from API
    }
  });

  // Mutation to resend OTP
  const { mutate: resendOtpMutation, isLoading: isResending } = useMutation({
    mutationFn: resendOtp,
    onSuccess: (data) => {
      toast.success(data.message || 'OTP sent successfully!');
      setResendTimer(60);  // Start the 60-second timer after successful resend
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || 'Failed to resend OTP');
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
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      otpBoxReference.current[index - 1].focus();  // Move back to previous input
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();  // Move forward to next input
    }
  }

  // Submit OTP for verification
  const handleOtpSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === numberOfDigits) {
      verifyOtpMutation({
        user_id: userId?.toString(),
        otp: otpValue
      });
    } else {
      toast.error("Please enter a valid OTP.");
    }
    
    if(otp){
      onSuccess();
      return;
    }
  };

  // Resend OTP handler
  const handleResendOtp = () => {
    // Ensure email is passed to resendOtp mutation
    setResendTimer(10)
    const intervalId = setInterval(() => setResendTimer(prev => prev > 0 ? prev - 1 : 0), 1000);
    setResendInterval(intervalId)
    if (!resendTimer && email) {
      resendOtpMutation({ email });  // Send the user's email to the resend OTP API
    } else if (!email) {
      toast.error('Email is required to resend OTP.');
    }
  };

  // Timer effect for 60 seconds
  useEffect(() => {
    if (resendTimer === 0) {
      resendInterval && clearInterval(resendInterval);
    } else {
      if (!resendInterval && resendTimer > 0) {
        const timerId = setInterval(() => setResendTimer(prev => prev > 0 ? prev - 1 : 0), 1000);
        setResendInterval(timerId);
      }
    }

    return () => {
      if (resendInterval) {
        clearInterval(resendInterval);
      }
    }
  }, [resendTimer, resendInterval]);

  return (
    <article className="flex flex-col items-center h-screen bg-gray-800">
      <p className="text-2xl font-medium mt-12 text-center">OTP Input With Validation</p>
      <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md text-center max-w-lg">
        {`Enter the OTP sent to your email. If incorrect, you'll see an error message below.`}
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
            className="border w-16 h-16 text-center text-xl p-3 rounded-md text-white bg-blue-500 focus:border-2 focus:outline-none"
          />
        ))}
      </div>

      <p className="mt-3 font-urbanist-regular">
        {resendTimer > 0
          ? <span className='text-black'>{`Resend OTP in ${resendTimer} s`}</span>
          : <span
            className='text-primary underline hover:cursor-pointer hoverr:opacity-70 active:opacity-70  disabled:opacity-50'
            onClick={!isResending && handleResendOtp}
          >{isResending ? 'Resending...' : 'Resend OTP'}</span>
        }
      </p>

      <PrimaryBtn onClick={handleOtpSubmit} disabled={isPending}>
        {isPending ? "Verifying..." : "Verify OTP"}
      </PrimaryBtn>

    </article>
  );
}

export default OtpVerification;
