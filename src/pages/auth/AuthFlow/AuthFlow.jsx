import React, { useState } from 'react';
import UserEmail from './UserEmail';
import OtpVerification from '../../OtpVerification';
import ForgotPasswordPage from '../ResetPassword';

const AuthFlow = ({isOtp}) => {
  // Step 1 = email, Step 2 = Verification, Step 3 = Confirmation (change password)
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {currentStep === 1 && <UserEmail onSuccess={goToNextStep} />}
      {currentStep === 2 && <OtpVerification onSuccess={goToNextStep} />}
      {currentStep === 3 && <ForgotPasswordPage />}
    </div>
  );
};

export default AuthFlow;
