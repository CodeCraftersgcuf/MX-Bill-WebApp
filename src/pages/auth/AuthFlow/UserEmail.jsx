import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { emailValidation } from "../../../util/validationSchemas";
import Input from "../../../components/Input"; // Correct the import path for Input
import { icons } from "../../../constants";
import PrimaryBtn from "../../../components/PrimaryBtn";

// Define schema using reusable email validation
const emailSchema = Yup.object().shape({
  email: emailValidation,
});

const UserEmail = ({ onSuccess }) => {
  const handleFormSubmit = (values) => {
    console.log("Email submitted:", values.email);
    onSuccess();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Find Your Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your email address to search for your account.
        </p>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, errors, touched, handleBlur, handleChange }) => (
            <Form className="space-y-4">
              <div>
                <Input
                  key="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  icon={icons.email} // Adjust icon prop if required
                />
              </div>

              <PrimaryBtn
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </PrimaryBtn>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserEmail;
