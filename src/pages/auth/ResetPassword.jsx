import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import toast
import { Formik, Form } from "formik";
import { forgetPasswordSchema } from "../../util/validationSchemas"; // Forget password schema
import PrimaryBtn from "../../components/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import { icons } from "../../constants";
import { resetPassword } from "../../util/queries/authMutations"; // Assuming you have a resetPassword mutation

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const { mutate: resetPass, isPending } = useMutation({
    mutationFn: resetPassword, // API call to reset password
    onSuccess: (data) => {
      toast.success("Password reset successful!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (data) => {
    const { newPassword, confirmPassword } = data;
    resetPass({
      newPassword,
      confirmPassword,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 mt-16">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100 w-[30%]">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="" width={100} />
        </div>
        <h1 className="text-3xl text-center font-bold mb-8 text-black">
          Reset Your Password
        </h1>
        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={forgetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleBlur, handleChange }) => (
            <Form>
              <Input
                id="newPassword"
                placeholder="New Password"
                type="password"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.newPassword && errors.newPassword}
                icon={icons.padlock}
              />
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.confirmPassword && errors.confirmPassword}
                icon={icons.padlock} 
              />
              <PrimaryBtn type="submit" disabled={isPending}>
                {isPending ? "Resetting Password..." : "Reset Password"}
              </PrimaryBtn>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
