import Input from "../components/Input";
import logo from "../assets/images/logo.png";
import { icons } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, isEqualsToOtherValue, isStrongPassword } from "../util/validation";
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/auth';  // Import the API function

const SignupPage = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  // Input handling
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

  // Mutation to handle the signup API call
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: registerUser,  // The API call function
    onSuccess: (data) => {
      // Log success response
      console.log('Signup success response:', data);

      if (data && data.user && data.user.id) {
        toast.success(data.message || "Signup successful!");  // Show success message
        // Redirect to OTP page with user_id
        navigate('/otp', { state: { userId: data.user.id } });
      } else {
        toast.error('Signup successful, but no user ID found.');
      }
    },
    onError: (error) => {
      console.error('Signup error:', error.response);

      // Display error messages from the API or a default message
      const errorMessage = error.response?.data?.message || "Signup failed due to unknown error.";
      toast.error(errorMessage);  
    }
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input fields
    if (emailHasError || passwordHasError || confirmPasswordHasError) {
      toast.error("Please fill out the form correctly.");
      return;
    }

    // Prepare user data for signup
    const userData = {
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue
    };

    // Log the data being sent for debugging
    console.log('User data being sent:', userData);

    // Trigger the signup mutation
    signup(userData);
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
          
          {/* Disable the button when loading */}
          <button
            type="submit"
            className={`w-full py-3 font-bold rounded-full mt-4 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="my-4 text-blue-700 cursor-pointer"></div>
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
