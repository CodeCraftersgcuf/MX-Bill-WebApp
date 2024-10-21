import axios from 'axios';
import { API_ENDPOINTS } from '../../apiConfig';

export const createIndividualAccount = async (data) => {
  try {
    const response = await fetch(
      API_ENDPOINTS.ACCOUNT_MANAGEMENT.CreateIndividualAccount,
      {
        method: 'POST',
        body: data,
      }
    );

    const resData = await response.json();
    return resData;
    // const response = await axios.post(
    //   API_ENDPOINTS.ACCOUNT_MANAGEMENT.CreateIndividualAccount,
    //   data
    // );
    // return response.data;
  } catch (error) {
    throw Error(error?.response?.data?.message || 'Failed to create account');
  }
};
