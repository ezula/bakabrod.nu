import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Calculator from './Calculator.tsx';
import ErrorPage from './ErrorPage.tsx';
import WelcomeHero from './components/WelcomeHero.tsx';
import Contact from './Contact.tsx';
import AboutBread from './AboutBread.tsx';
import { initGA } from './ga-utils.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomeHero />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutbread",
        element: <AboutBread />,
      },
    ],
  },
  {
    path: "/404",
    element: <ErrorPage />,
  }
], { basename: "/" });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
