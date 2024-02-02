import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main';
import SupportPage from './Pages/SupportPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/support",
    element: <SupportPage />
  }
])
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
