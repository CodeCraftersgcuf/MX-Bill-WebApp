import React from "react";
import Input from "../../components/Input";
import { icons } from "../../constants";
import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { isEmail, isNotEmpty } from "../../util/validation.js";
import { toast } from "react-hot-toast";
import ProfileComponent from "./ProfileComponent.jsx";

const GetProfileInfo = ({ edit = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      fullNameHasError ||
      nicknameHasError ||
      emailHasError ||
      dateHasError ||
      phoneNumberHasError
    ) {
      toast.error("Please fill out all fields correctly before submitting.");
      return;
    }

    toast.success(
      edit
        ? "Profile information updated successfully!"
        : "Profile created successfully!"
    );
    clearForm();
  };

  const clearForm = () => {
    handleFullNameUserInput({ target: { value: "" } });
    handleNicknameUserInput({ target: { value: "" } });
    handleEmailUserInput({ target: { value: "" } });
    handleDateUserInput({ target: { value: "" } });
    handlePhoneNumberUserInput({ target: { value: "" } });
  };

  const {
    value: fullNameValue,
    handleInputBlur: handleFullNameBlur,
    handleUserInput: handleFullNameUserInput,
    hasError: fullNameHasError,
  } = useInput("", (value) => value.trim().length > 0);

  const {
    value: nicknameValue,
    handleInputBlur: handleNicknameBlur,
    handleUserInput: handleNicknameUserInput,
    hasError: nicknameHasError,
  } = useInput("", (value) => value.trim().length > 0);

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleUserInput: handleEmailUserInput,
    hasError: emailHasError,
  } = useInput("", (value) => value.includes("@") && value.trim().length > 0);

  const {
    value: phoneNumberValue,
    handleInputBlur: handlePhoneNumberBlur,
    handleUserInput: handlePhoneNumberUserInput,
    hasError: phoneNumberHasError,
  } = useInput("", (value) => value.trim().length > 0);

  const {
    value: dateValue,
    handleInputBlur: handleDateBlur,
    handleUserInput: handleDateUserInput,
    hasError: dateHasError,
  } = useInput("", (value) => value.trim().length > 0);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 mt-16">
      <div className="bg-gray-800 rounded-lg p-8 bg-grayscale100 w-[30%]">
        <ProfileComponent
          initialImage={icons.userDefault3}
          editIcon={icons.edit3}
        />
        <h1 className="text-3xl text-center font-bold mb-8 text-black">
          {edit ? "Edit Profile" : "Create Profile"}
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            onBlur={handleFullNameBlur}
            onChange={handleFullNameUserInput}
            value={fullNameValue}
            hasError={fullNameHasError}
            placeholder="Full Name"
            icon={icons.user}
            error={fullNameHasError && "Please enter a valid Full Name."}
          />
          <Input
            id="nickname"
            type="text"
            placeholder="Nickname"
            icon={icons.user}
            onBlur={handleNicknameBlur}
            onChange={handleNicknameUserInput}
            hasError={nicknameHasError}
            value={nicknameValue}
            error={nicknameHasError && "Please enter a valid Nickname."}
          />
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
            id="date"
            type="date"
            placeholder="Date of Birth"
            icon={icons.calendar3}
            onBlur={handleDateBlur}
            onChange={handleDateUserInput}
            hasError={dateHasError}
            value={dateValue}
            error={dateHasError && "Please enter a valid Date of Birth."}
          />
          <Input
            id="phone"
            type="tel"
            onBlur={handlePhoneNumberBlur}
            onChange={handlePhoneNumberUserInput}
            value={phoneNumberValue}
            hasError={phoneNumberHasError}
            placeholder="Phone Number"
            icon={icons.telephone}
            error={phoneNumberHasError && "Please enter a valid phone number."}
          />
          <button
            type="submit"
            className={`w-full ${
              edit
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-bold py-3 rounded-full mt-4`}
          >
            {edit ? "Update Profile" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetProfileInfo;
