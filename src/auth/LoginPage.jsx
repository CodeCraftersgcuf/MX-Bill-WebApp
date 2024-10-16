import Input from "../components/Input";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { icons } from "../constants";
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";
import { toast } from 'react-hot-toast'; // Import toast

const LoginPage = () => {
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
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  const clearForm = () => {
    handleEmailUserInput({ target: { value: "" } });
    handlePasswordUserInput({ target: { value: "" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for input errors
    if (emailHasError || passwordHasError) {
      toast.error("Please enter valid credentials.");
      return;
    }

    // Show success toast
    toast.success("Logged in successfully!");
    clearForm();

    console.log(emailValue, passwordValue);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 mt-16">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100 w-[30%]">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="" width={100} />
        </div>
        <h1 className="text-3xl text-center font-bold mb-8 text-black">
          Login to your Account
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
            error={passwordHasError && "Invalid password"}
          />
          <Input type="checkbox" label="Remember me" />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-urbanist-bold py-3 font-bold rounded-full mt-4"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-blue-700 cursor-pointer">
          Forgot Password?
        </div>
        <div className="text-black">
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
