import React, { useState } from "react";
import AuthCardTop from "../../components/Auth components/AuthCardTop";
import { Link, useNavigate } from "react-router-dom";

const AccountType = () => {
  const navigate = useNavigate();

  // State to track the selected account type
  const [selectedAccount, setSelectedAccount] = useState("");

  // Function to handle the selection of an account
  const handleSelection = (accountType) => {
    setSelectedAccount(accountType);
  };

  // Function to handle the navigation on button click
  const handleNext = (e) => {
    e.preventDefault(); // Prevent form submission
    if (selectedAccount === "individual") {
      navigate("/profileInfo");
    } else if (selectedAccount === "cooperative") {
      navigate("/corporateProfileInfo");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100">
        <AuthCardTop topHeading="Choose your account type" />
        <form onSubmit={handleNext}>
          {/* Individual Account Option */}
          <div
            className={`flex justify-between shadow bg-white rounded-xl border-slate-100 px-3 py-3 cursor-pointer ${
              selectedAccount === "individual" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleSelection("individual")}
          >
            <label htmlFor="individualAccount">Individual Account</label>
            <input
              type="radio"
              id="individualAccount"
              name="accountType"
              checked={selectedAccount === "individual"}
              onChange={() => handleSelection("individual")}
            />
          </div>

          {/* Spacing between options */}
          <div className="mt-5"></div>

          {/* Cooperative Account Option */}
          <div
            className={`flex justify-between shadow bg-white rounded-xl border-slate-100 px-3 py-3 cursor-pointer ${
              selectedAccount === "cooperative" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleSelection("cooperative")}
          >
            <label htmlFor="CooperativeAccount">Cooperative Account</label>
            <input
              type="radio"
              id="CooperativeAccount"
              name="accountType"
              checked={selectedAccount === "cooperative"}
              onChange={() => handleSelection("cooperative")}
            />
          </div>

          {/* Next Button */}
          <button
            className="px-4 py-2 font-urbanist-bold rounded-lg mt-4 bg-blue-500 hover:bg-blue-600 active:opacity-70 disabled:opacity-50 text-white"
            type="submit"
            disabled={!selectedAccount} // Disable if no account type is selected
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountType;
