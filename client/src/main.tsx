import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorPage/ErrorPage.tsx';
import { HomePage } from './pages/homePage/HomePage.tsx';
import LoginPage from './pages/loginPage/LoginPage.tsx';
import SignupPage from './pages/signupPage/SignupPage.tsx';
import CardPage from './pages/cardPage/CardPage.tsx';
import CardProvider from './context/CardContext.tsx';
import MyCardsPage from './pages/myCardsPage/MyCardsPage.tsx';
import EditCardPage from './pages/editCardPage/EditCardPage.tsx';
import AddCardPage from './pages/addCardPage/AddCardPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/myCards",
        element: <MyCardsPage />
      },
      {
        path: "/card/:id",
        element: <CardPage />
      },
      {
        path: "/addCard",
        element: <AddCardPage />
      },
      {
        path: "/editCard/:id",
        element: <EditCardPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  </React.StrictMode>,
)
