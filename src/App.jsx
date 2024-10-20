import React from 'react';
import "./App.css";
import { theme } from "./constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ColorScheme from "./pages/ColorScheme";
import HomePage from "./pages/HomePage";
import DashBoard from "./components/DashBoard";
import TransactionPage from "./pages/TransactionPage";
import GetProfileInfo from "./pages/auth/GetProfileInfo";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignupPage";
import { Toaster } from "react-hot-toast";
import StatisticsPage from "./pages/StatisticsPage";
import SendMoney from "./pages/SendMoney";
import RequestMoney from "./pages/RequestMoney";
import InAndOut from "./pages/InAndOut";
import UserProfile from './pages/UserProfile';
import Notifications from "./pages/Notifications";
import OtpInputWithValidation from "./pages/Otp";
import ResetPassword from './pages/ResetPassword';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/profileInfo", element: <GetProfileInfo /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/colorscheme", element: <ColorScheme /> },
    { path: "/dashboard", element: <DashBoard /> },
    { path: "/transactionpage", element: <TransactionPage /> },
    { path: "/statistics", element: <StatisticsPage /> },
    { path: "/sendmoney", element: <SendMoney /> },
    { path: "/requestmoney", element: <RequestMoney /> },
    { path: "/inandout", element: <InAndOut /> },
    { path: "/notificationpage", element: <Notifications /> },
    { path: "/otp", element: <OtpInputWithValidation /> },
    {path: "/userprofile", element: <UserProfile />},
    {path: "/reset" , element: <ResetPassword />}
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
};

export default App;
