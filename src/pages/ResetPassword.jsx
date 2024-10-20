import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword, verifyPasswordOtp, resetPassword } from '../util/queries/authMutations';
import { toast } from 'react-hot-toast';
import PrimaryBtn from '../components/PrimaryBtn';
import Input from "../components/Input";


const ResetPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userId, setUserId] = useState(null); // To store user_id after OTP verification

  // Forgot Password Mutation
  const { mutate: sendOtp, isPending: isSendingOtp } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      toast.success(data.message || 'OTP sent successfully!');
      setStep(2); // Move to the OTP verification step
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to send OTP.');
    }
  });

  // Verify OTP Mutation
  const { mutate: verifyOtp, isPending: isVerifyingOtp } = useMutation({
    mutationFn: verifyPasswordOtp,
    onSuccess: (data) => {
      toast.success(data.message || 'OTP verified successfully!');
      setUserId(data.user_id); // Store user_id for password reset
      setStep(3); // Move to the password reset step
    },
    onError: (error) => {
      toast.error(error.message || 'Invalid OTP.');
    }
  });

  // Reset Password Mutation
  const { mutate: handleResetPassword, isPending: isResettingPassword } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      toast.success(data.message || 'Password reset successfully!');
      setStep(1); // Reset to the first step (email input) after success
      setEmail('');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to reset password.');
    }
  });

  // Handle Email Submit (Step 1)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    sendOtp({ email });
  };

  // Handle OTP Submit (Step 2)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error('Please enter the OTP.');
      return;
    }
    verifyOtp({ otp });
  };

  // Handle New Password Submit (Step 3)
  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      toast.error('Please fill in both fields.');
    } else if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
    } else if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters long.');
    } else {
      handleResetPassword({ user_id: userId, new_password: newPassword, confirm_password: confirmPassword });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold text-center  mb-6">Reset Password</h2>
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label className="block   text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <PrimaryBtn type="submit" disabled={isSendingOtp}>
                {isSendingOtp ? 'Sending OTP...' : 'Send OTP'}
              </PrimaryBtn>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold text-center   mb-6">Enter OTP</h2>
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="otp">
                  OTP
                </label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
     
                  placeholder="Enter the OTP sent to your email"
                />
              </div>
              <PrimaryBtn type="submit" disabled={isVerifyingOtp}>
                {isVerifyingOtp ? 'Verifying OTP...' : 'Verify OTP'}
              </PrimaryBtn>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Reset Password</h2>
            <form onSubmit={handleNewPasswordSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter new password"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Confirm new password"
                />
              </div>

              <PrimaryBtn type="submit" disabled={isResettingPassword}>
                {isResettingPassword ? 'Resetting Password...' : 'Reset Password'}
              </PrimaryBtn>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
