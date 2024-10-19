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
