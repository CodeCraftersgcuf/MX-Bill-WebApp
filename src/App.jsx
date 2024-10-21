import React from "react";
import "./App.css";
import { theme } from "./constants";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Import Navigate
import ColorScheme from "./pages/ColorScheme";
import HomePage from "./pages/HomePage";
import DashBoard from "./components/DashBoard";
import TransactionPage from "./pages/TransactionPage";
import GetProfileInfo from "./pages/auth/GetProfileInfo";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import { Toaster } from "react-hot-toast";
import StatisticsPage from "./pages/StatisticsPage";
import SendMoney from "./pages/SendMoney";
import RequestMoney from "./pages/RequestMoney";
import InAndOut from "./pages/InAndOut";
import UserProfile from "./pages/UserProfile";
import Notifications from "./pages/Notifications";
// import ResetPassword from "./pages/ResetPassword";
import Logout from "./pages/Logout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HelpCenter from "./pages/HelpCenter";
import OtpVerification from "./pages/OtpVerification";

const queryClient = new QueryClient();

// Helper to check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// ProtectedRoute component to protect specific routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  const router = createBrowserRouter([
    // Public routes
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/colorscheme", element: <ColorScheme /> },
    { path: "/otp-verfication", element: <OtpVerification /> },
    // { path: "/reset", element: <ResetPassword /> },
    // { path: "/resetpassword", element: <ResetPassword /> },

    // Redirect '/' to login if not authenticated
    {
      path: "/",
      element: isAuthenticated() ? <HomePage /> : <Navigate to="/login" />,
    },

    // Protected routes - only accessible if logged in
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profileInfo",
      element: (
        // <ProtectedRoute>
        <GetProfileInfo />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/transactionpage",
      element: (
        <ProtectedRoute>
          <TransactionPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/statistics",
      element: (
        <ProtectedRoute>
          <StatisticsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/sendmoney",
      element: (
        <ProtectedRoute>
          <SendMoney />
        </ProtectedRoute>
      ),
    },
    {
      path: "/requestmoney",
      element: (
        <ProtectedRoute>
          <RequestMoney />
        </ProtectedRoute>
      ),
    },
    {
      path: "/inandout",
      element: (
        <ProtectedRoute>
          <InAndOut />
        </ProtectedRoute>
      ),
    },
    {
      path: "/notificationpage",
      element: (
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      ),
    },
    {
      path: "/userprofile",
      element: (
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/helpcenter",
      element: (
        <ProtectedRoute>
          <HelpCenter />
        </ProtectedRoute>
      ),
    },
    {
      path: "/logout",
      element: (
        <ProtectedRoute>
          <Logout />
        </ProtectedRoute>
      ),
    },
    {
      path: "/userEdit",
      element: (
        <ProtectedRoute>
          <GetProfileInfo edit={true} />
        </ProtectedRoute>
      ),
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
};

export default App;
