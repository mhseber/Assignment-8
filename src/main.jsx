import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Statistics/ErrorPage';
import Home from './components/Home/Home';
import MainLayout from './Layout/MainLayout';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'Statistics',
        element: <Statistics />,
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
