// SignupPage.js
import React from "react";
import Input from "../components/Input";
import logo from "../assets/images/logo.png";
import { icons } from "../constants";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty, isEqualsToOtherValue, isStrongPassword } from "../util/validation.js"; // Import isStrongPassword
import { toast } from 'react-hot-toast'; 

const SignupPage = () => {
  const clearForm = () => {
    handleEmailUserInput({ target: { value: "" } });
    handlePasswordUserInput({ target: { value: "" } });
    handleConfirmPasswordUserInput({ target: { value: "" } });
  }

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleUserInput: handleEmailUserInput,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleUserInput: handlePasswordUserInput,
    hasError: passwordHasError,
  } = useInput("", (value) => isStrongPassword(value)); 

  const {
    value: confirmPasswordValue,
    handleInputBlur: handleConfirmPasswordBlur,
    handleUserInput: handleConfirmPasswordUserInput,
    hasError: confirmPasswordHasError,
  } = useInput("", (value) => isNotEmpty(value) && isEqualsToOtherValue(value, passwordValue));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailHasError || passwordHasError || confirmPasswordHasError) {
      return;
    }

    toast.success("Sign up successful!");
    clearForm();
    console.log(emailValue, passwordValue);
  }
  
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 mt-16">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100 w-[30%]">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="" width={100} />
        </div>
        <h1 className="text-3xl text-center font-bold mb-8 text-black">
          Create your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailUserInput}
            value={emailValue}
            hasError={emailHasError}
            placeholder="Email"
            icon={icons.email}
            error={emailHasError && "Please enter a valid email address."}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordUserInput}
            hasError={passwordHasError}
            value={passwordValue}
            icon={icons.padlock}
            error={passwordHasError && "Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character."}
          />
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPasswordValue}
            onBlur={handleConfirmPasswordBlur}
            onChange={handleConfirmPasswordUserInput}
            hasError={confirmPasswordHasError}
            icon={icons.padlock}
            error={confirmPasswordHasError && "Passwords do not match"}
          />
          <Input type="checkbox" label="By continuing you accept our Privacy Policy" />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-urbanist-bold py-3 font-bold rounded-full mt-4"
          >
            Sign Up
          </button>
        </form>
        <div className="my-4 text-blue-700 cursor-pointer">
        </div>
        <div className="text-black">
          Already have an account?
          <Link to='/login' className="text-blue-500 hover:text-blue-700">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
