import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import { icons } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from "../../util/queries/authMutations";
import { Form, Formik } from "formik";
import { signupSchema } from "../../util/validationSchemas";
import PrimaryBtn from "../../components/PrimaryBtn";

const SignupPage = () => {
  const navigate = useNavigate();

  // Mutation to handle the signup API call
  const { mutate: signup, isPending } = useMutation({
    mutationFn: registerUser,  // The API call function
    onSuccess: (data) => {
      console.log('Signup success response:', data);
      if (data?.user_id) {
        toast.success(data.message || "Signup successful!");
        // Redirect to OTP page with user_id
        navigate('/otp', { state: { userId: data.user_id } });
      } else {
        toast.error('Signup successful, but no user ID found.');
      }
    },
    onError: (error) => {
      console.error('Signup error:', error.response);
      toast.error(error?.message);
    }
  });

  // Form submission handler
  const handleSubmit = (data) => {
    console.log(data);
    signup(data);
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
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '', acceptTerms: false }}
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
        >
          {({ errors, touched, handleBlur, handleChange, values }) => (
            <Form>
              {['email', 'password', 'confirmPassword'].map((field) => (
                <Input
                  key={field}
                  id={field}
                  name={field}
                  type={field === 'confirmPassword' ? 'password' : field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[field]}
                  icon={icons[field === 'email' ? 'email' : 'padlock']}
                  error={errors[field] && touched[field] ? errors[field] : undefined}
                />
              ))}
              <Input
                type="checkbox"
                name="acceptTerms"
                onChange={handleChange}
                checked={values.acceptTerms}
                label="By continuing you accept our Privacy Policy"
              />

              <PrimaryBtn type="submit" disabled={isPending}>
                {isPending ? 'Signing up...' : 'Sign Up'}
              </PrimaryBtn>
            </Form>
          )}
        </Formik>

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
