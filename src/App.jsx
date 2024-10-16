import './App.css'
import { theme } from './constants'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ColorScheme from './pages/ColorScheme'
import HomePage from './pages/HomePage'
import DashBoard from './components/DashBoard'
import TransactionPage from './pages/TransactionPage'
import GetProfileInfo from './auth/GetProfileInfo'
import LoginPage from './auth/LoginPage'
import SignUpPage from './auth/SignupPage'
import { Toaster } from 'react-hot-toast'


const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {path: '/profileInfo', element: <GetProfileInfo />},
    { path: '/login', element: <LoginPage />},
    { path: '/signup', element: <SignUpPage />},
    { path: '/colorscheme', element: <ColorScheme /> },
    { path: '/dashboard', element: <DashBoard /> },
    { path: '/transactionpage', element: <TransactionPage /> }, // Fixed typo here
  ])

  console.log(theme.COLORS)
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
    </>

  )
}

export default App
