import React, { useEffect, useState } from 'react';
import { UserDetail, UserAccount } from '../../util/queries/userMutation'; 
import { useMutation } from '@tanstack/react-query';
import { icons } from "../../constants";
import RightSideProfileImage from "./RightSideProfileImage";
import RightSideProfileInfo from "./RightSideProfileInfo";
import RSNotification from "./RSNotification";
import PaymentCard from "../PaymentCard";

const RightSideBar = () => {
  const [user, setUser] = useState(null);
  const [accountDetails, setAccountDetails] = useState(null);
  const userId = localStorage.getItem("user_id");

  // Fetch User Details Mutation
  const { mutate: fetchUserDetails } = useMutation({
    mutationFn: UserDetail,
    onSuccess: async (data) => {
      console.log("User details response:", data); // Debugging log
      setUser(data.data);

      // Check if account is available and get the first account
      const userAccount = data.data.account && data.data.account.length > 0 ? data.data.account[0] : null;
      
      if (userAccount) {
        console.log("Fetching account details for:", userAccount.account_number); // Debugging log
        fetchAccountDetails({ accountNumber: userAccount.account_number, userId });
      } else {
        console.error("No userAccount or account_number available."); // Error log if account details not found
      }
    },
    onError: (error) => {
      console.error("Error fetching user details:", error);
    }
  });

  // Fetch Account Details Mutation
  const { mutate: fetchAccountDetails } = useMutation({
    mutationFn: UserAccount,
    onSuccess: (data) => {
      console.log("Account details response:", data); // Debugging log

      // Check if status is successful and set account details
      if (data.status === "00") {
        setAccountDetails(data.data);
      } else {
        console.error("Failed to fetch account details:", data.message);
      }
    },
    onError: (error) => {
      console.error("Error fetching account details:", error);
    }
  });

  // Fetch User Details on Component Mount
  useEffect(() => {
    if (userId) {
      fetchUserDetails({ userId });
    } else {
      console.error("User ID is missing.");
    }
  }, [userId]);

  // Render Loading State if User Details are not available yet
  if (!user) {
    return <div>Loading...</div>;
  }

  // Extract the user's account
  const userAccount = user.account && user.account.length > 0 ? user.account[0] : null;

  return (
    <div className="rounded-lg shadow-lg shadow-slate-300">
      {/* Right Side Profile Image */}
      <RightSideProfileImage
        backgroundProfile={icons.backgroundProfile}
        userProfile={userAccount?.profile_picture || icons.userDefault2}
      />

      {/* Right Side Profile Information */}
      <RightSideProfileInfo 
        name={`${userAccount?.firstName || ''} ${userAccount?.lastName || ''}`.trim() || 'Unknown User'} 
        email={user.email} 
      />

      {/* Notification Section */}
      <div className="border-t border-slate-300 mt-3 mx-3">
        <RSNotification />
      </div>

      {/* Payment Card or No Account Details Available */}
      <div className="mx-3 py-4">
        {accountDetails && accountDetails.client && accountDetails.accountNo && accountDetails.accountBalance ? (
          <PaymentCard 
            name={accountDetails.client} 
            accountNumber={accountDetails.accountNo} 
            balance={accountDetails.accountBalance} 
            amount={`$${parseFloat(accountDetails.accountBalance).toLocaleString()}`} 
          />
        ) : (
          <div>No account details available.</div>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
