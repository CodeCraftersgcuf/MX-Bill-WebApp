import axios from 'axios';

const BASE_URL = "https://mxbillpay.hmstech.org/api";

// User Registration
export const registerUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, data);
  return response.data;
};

// Email Verification (OTP)
export const verifyOtp = async (data) => {
  const response = await axios.post(`${BASE_URL}/auth/verify-email`, data);
  return response.data;
};
