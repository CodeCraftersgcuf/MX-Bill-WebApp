import './App.css'
import { theme } from './constants'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ColorScheme from './pages/ColorScheme'
import HomePage from './pages/HomePage'
import DashBoard from './components/DashBoard'
import TransactionPage from './pages/TransactionPage'

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/colorscheme', element: <ColorScheme /> },
    { path: '/dashboard', element: <DashBoard /> },
    { path: '/transactionpage', element: <TransactionPage /> }, // Fixed typo here
  ])

  console.log(theme.COLORS)
  return (
    <RouterProvider router={router} />
  )
}

export default App
