import axios from 'axios';
import { API_ENDPOINTS } from '../../apiConfig';

export const registerUser = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.Register, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Signup failed due to unknown error'
    );
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.Login, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Login failed due to unknown error'
    );
  }
};

export const verifyEmailOtp = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.VerfiyEmailOtp, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Signup failed due to unknown error'
    );
  }
};

export const resendOtp= async (data)=>{
  try{
    const response = await axios.post(API_ENDPOINTS.AUTH.ResendOtp,data);
    return response.data;
  }catch(error){
    throw Error(
      error?.response?.data?.message || 'Resend OTP failed due to unknown error'
    );
  }
};

 

// Forgot Password: Send OTP to user's email
export const forgotPassword = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.ForgotPassword, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Failed to send OTP due to unknown error'
    );
  }
};

// Verify OTP for password reset
export const verifyPasswordOtp = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.VerifyPasswordOtp, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Invalid OTP or verification failed'
    );
  }
};

// Reset Password
export const resetPassword = async (data) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.ResetPassword, data);
    return response.data;
  } catch (error) {
    throw Error(
      error?.response?.data?.message || 'Password reset failed due to unknown error'
    );
  }
};
