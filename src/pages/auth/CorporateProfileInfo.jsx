import React from "react";
import Input from "../../components/Input";
import { icons } from "../../constants";
import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import ProfileComponent from "./ProfileComponent.jsx";
import { useMutation } from "@tanstack/react-query";
import { createCorporateAccount } from "../../util/queries/accountsMutations.js";
import { Formik, Form } from "formik";
import PrimaryBtn from "../../components/PrimaryBtn.jsx";
import { corporateSchema, individualSchema } from "../../util/validationSchemas.js";
import DateInput from "../../components/DateInput.jsx";

const CorporateProfileInfo = ({ edit }) => {
  const [image, setImage] = React.useState(null);
  const { mutate, isPending } = useMutation({
    mutationFn: createCorporateAccount,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleImage = (imageData) => {
    console.log(imageData);
    setImage(imageData);
  };

  const handleSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    const userId = localStorage.getItem("user_id");

    formData.append("profilePicture", image);

    formData.append("userId", userId);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("companyName", data.companyName);
    formData.append("rcNumber", data.rcNumber);
    formData.append("bvn", data.bvn);
    formData.append("incorporationDate", data.dob);
    formData.append("phone", data.phone);

    console.log(formData);
    mutate(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 mt-16">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100 w-[30%]">
        <ProfileComponent
          initialImage={icons.userDefault3}
          editIcon={icons.edit3}
          onImageChange={handleImage}
        />
        <h1 className="text-3xl text-center font-bold mb-8 text-black">
          {edit ? "Edit Profile" : "Create Profile"}
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            companyName: "",
            bvn: "",
            dob: "",
            phone: "",
            rcNumber:"",
          }}
          onSubmit={handleSubmit} // Call handleSubmit on form submission
          validationSchema={corporateSchema}
        >
          {({ errors, touched, handleBlur, handleChange, values }) => (
            <Form>
              {["firstName", "lastName", "companyName"].map((field) => (
                <Input
                  key={field}
                  id={field}
                  name={field}
                  type={"text"}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[field]}
                  icon={icons[field]}
                  error={
                    errors[field] && touched[field] ? errors[field] : undefined
                  }
                />
              ))}
              <Input
                key={"bvnfiled"}
                id="bvn"
                name={"bvn"}
                type={"number"}
                placeholder={"Bank Verification Number (bvn)"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bvn}
                icon={icons.bank}
                error={errors.bvn && touched.bvn ? errors.bvn : undefined}
              />
              <Input
                key={"rcNumber"}
                id="rcNumber"
                name={"rcNumber"}
                type={"number"}
                placeholder={"RCN Number (rcn)"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rcNumber}
                icon={icons.bank}
                error={errors.bvn && touched.bvn ? errors.bvn : undefined}
              />
              <Input
                key={"phone"}
                id="phone"
                name={"phone"}
                type={"number"}
                placeholder={"Phone Number"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                icon={icons.telephone}
                error={errors.phone && touched.phone ? errors.phone : undefined}
              />
              <DateInput
                key={"dob"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
              />

              <PrimaryBtn type="submit" disabled={isPending}>
                {isPending ? "Signing up..." : "Sign Up"}
              </PrimaryBtn>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CorporateProfileInfo;
