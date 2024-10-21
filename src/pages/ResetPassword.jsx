// import React, { useRef, useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import {
//   forgotPassword,
//   verifyPasswordOtp,
//   resetPassword,
//   resendOtp,
// } from "../util/queries/authMutations";
// import { toast, Toaster } from "react-hot-toast";
// import PrimaryBtn from "../components/PrimaryBtn";

// const ResetPassword = () => {
//   const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
//   const [email, setEmail] = useState("");
//   const [userId, setUserId] = useState("1"); // To store user_id after OTP verification
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [otp, setOtp] = useState(new Array(4).fill("")); // Assuming 4 digits OTP
//   const otpBoxReference = useRef([]); // References for OTP input boxes

//   // Forgot Password Mutation (Send OTP)
//   const { mutate: sendOtp, isPending: isSendingOtp } = useMutation({
//     mutationFn: forgotPassword,
//     onSuccess: (data) => {
//       toast.success(data.message || "OTP sent successfully!");
//       setStep(2); // Move to the OTP verification step
//     },
//     onError: (error) => {
//       toast.error(error.message || "Failed to send OTP. Check email and try again.");
//     },
//   });

//   // Resend OTP Mutation
//   const { mutate: resendOtpMutation, isPending: isResendingOtp } = useMutation({
//     mutationFn: resendOtp,
//     onSuccess: (data) => {
//       toast.success(data.message || "OTP resent successfully!");
//     },
//     onError: (error) => {
//       toast.error(error.message || "Failed to resend OTP.");
//     },
//   });

// // Verify OTP Mutation
// const { mutate: verifyOtp, isPending: isVerifyingOtp } = useMutation({
//     mutationFn: verifyPasswordOtp,
//     onSuccess: (data) => {
//       if (data.user_id) {  // Check if user_id exists
//         toast.success(data.message || "OTP verified successfully!");
//         setUserId(data.user_id); // Store user_id for password reset
//         setStep(3); // Move to the password reset step
//       } else {
//         toast.error("OTP verification failed. User ID missing.");
//       }
//     },
//     onError: (error) => {
//       toast.error(error.message || "Invalid OTP. Please try again.");
//     },
//   });
  

//   // Reset Password Mutation
//   const { mutate: handleResetPassword, isPending: isResettingPassword } = useMutation({
//     mutationFn: resetPassword,
//     onSuccess: (data) => {
//       toast.success(data.message || "Password reset successfully!");
//       // Reset everything after password reset
//       setStep(1); // Go back to the email input step
//       setEmail("");
//       setNewPassword("");
//       setConfirmPassword("");
//       setUserId(null); // Reset userId after successful password reset
//     },
//     onError: (error) => {
//       toast.error(error.message || "Failed to reset password.");
//     },
//   });

//   // Handle Email Submit (Step 1)
//   const handleEmailSubmit = (e) => {
//     e.preventDefault();

//     // Validate email
//     if (!email) {
//       toast.error("Please enter your email.");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     sendOtp({ email });
//   };

//   // Handle OTP change
//   function handleChange(value, index) {
//     let newArr = [...otp];
//     newArr[index] = value;
//     setOtp(newArr);

//     if (value && index < otp.length - 1) {
//       otpBoxReference.current[index + 1].focus();
//     }
//   }

//   // Handle Backspace and Enter key for navigation between OTP inputs
//   function handleBackspaceAndEnter(e, index) {
//     if (e.key === "Backspace" && index > 0 && !otp[index]) {
//       otpBoxReference.current[index - 1].focus(); // Move back to previous input
//     }
//     if (e.key === "Enter" && otp[index] && index < otp.length - 1) {
//       otpBoxReference.current[index + 1].focus(); // Move forward to next input
//     }
//   }

//   // Submit OTP for verification
//   const handleOtpSubmit = () => {
//     const otpValue = otp.join("");
//     if (otpValue.length === otp.length) {
//       verifyOtp({
//         otp: otpValue,
//       });
//     } else {
//       toast.error("Please enter a valid 4-digit OTP.");
//     }
//   };

//   // Handle Resend OTP
//   const handleResendOtp = () => {
//     resendOtpMutation({ email });
//   };

//   // Handle New Password Submit (Step 3)
//   const handleNewPasswordSubmit = (e) => {
//     e.preventDefault();

//     // Check if userId is available
//     if (!userId) {
//         console.log(userId);
//       toast.error("User ID is missing. Please verify OTP again.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match.");
//     } else if (newPassword.length < 8) {
//       toast.error("Password must be at least 8 characters long.");
//     } else {
//       handleResetPassword({
//         user_id: userId, // Pass user_id returned from OTP verification
//         new_password: newPassword,
//         confirm_password: confirmPassword,
//       });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <Toaster /> {/* Ensure Toaster is added */}
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
//         {step === 1 && (
//           <>
//             <h2 className="text-2xl font-semibold text-center mb-6">
//               Reset Password
//             </h2>
//             <form onSubmit={handleEmailSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   className="w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <PrimaryBtn type="submit" disabled={isSendingOtp}>
//                 {isSendingOtp ? "Sending OTP..." : "Send OTP"}
//               </PrimaryBtn>
//             </form>
//           </>
//         )}

//         {step === 2 && (
//           <div className="flex flex-col items-center gap-4">
//             <div className="flex gap-2">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   value={digit}
//                   maxLength={1}
//                   onChange={(e) => handleChange(e.target.value, index)}
//                   onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
//                   ref={(reference) => (otpBoxReference.current[index] = reference)}
//                   className="border w-16 h-16 text-center text-xl p-3 rounded-md text-white bg-blue-500 focus:border-2 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <PrimaryBtn onClick={handleOtpSubmit} disabled={isVerifyingOtp}>
//               {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
//             </PrimaryBtn>
//             <PrimaryBtn onClick={handleResendOtp} disabled={isResendingOtp}>
//               {isResendingOtp ? "Resending OTP..." : "Resend OTP"}
//             </PrimaryBtn>
//           </div>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="text-2xl font-semibold text-center mb-6">
//               Set New Password
//             </h2>
//             <form onSubmit={handleNewPasswordSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2" htmlFor="newPassword">
//                   New Password
//                 </label>
//                 <input
//                   id="newPassword"
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
//                   placeholder="Enter new password"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-bold mb-2" htmlFor="confirmPassword">
//                   Confirm Password
//                 </label>
//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
//                   placeholder="Confirm new password"
//                 />
//               </div>

//               <PrimaryBtn type="submit" disabled={isResettingPassword}>
//                 {isResettingPassword ? "Resetting Password..." : "Reset Password"}
//               </PrimaryBtn>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
