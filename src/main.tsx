import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './ErrorPage.tsx'
import Calculator from './pages/Calculator.tsx'
import Contact from './pages/Contact.tsx'
import AboutBread from './pages/AboutBread.tsx'
import Guides from './pages/Guides.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/calculator',
          element: <Calculator />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/aboutbread',
          element: <AboutBread />,
        },
        {
          path: '/guides/*',
          element: <Guides />,
        },
      ],
    },
    {
      path: '/404',
      element: <ErrorPage />,
    },
  ],
  { basename: '/' }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
