import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../constants";
import { toast } from "react-hot-toast"; // Import toast
import { Formik, Form } from "formik";
import { loginSchema } from "../../util/validationSchemas";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../util/queries/authMutations";

const LoginPage = () => {
  const navigate = useNavigate();
  // LoginPage.js
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login successful!");

      // Store token in localStorage
      localStorage.setItem("authToken", data.token);

      // Redirect to dashboard after login
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const handleSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    login({
      email,
      password,
    });
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
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleBlur, handleChange }) => (
            <Form>
              {["email", "password"].map((field) => (
                <Input
                  key={field}
                  id={field}
                  // label={field}
                  placeholder={field}
                  type={field}
                  value={values[field]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched[field] && errors[field]}
                  icon={field === "email" ? icons.email : icons.padlock}
                />
              ))}
              <Input
                type="checkbox"
                name="rememberMe"
                label={"Remember Me"}
                onChange={handleChange}
                checked={values.rememberMe}
              />
              <PrimaryBtn type="submit" disabled={isPending}>
                {isPending ? "Logging In..." : "Login"}
              </PrimaryBtn>
            </Form>
          )}
        </Formik>
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
