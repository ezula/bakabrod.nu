import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ErrorPage from './ErrorPage.tsx';
import AboutBread from './pages/AboutBread.tsx';
import Calculator from './pages/Calculator.tsx';
import Contact from './pages/Contact.tsx';
import Guides from './pages/Guides.tsx';
import Home from './pages/Home.tsx';

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
  { basename: '/' },
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
