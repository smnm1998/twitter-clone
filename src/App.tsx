import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // RouterProvider 임포트 추가
import styled, { createGlobalStyle } from "styled-components";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import reset from 'styled-reset';
import { useEffect } from 'react';
import LoadingScreen from './components/loading-screen';
import { auth } from './firebase';
import ProtectedRoute from './components/protected-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      },
      {
        path: "profile",
        element: <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
]);

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color: white;
    font-family:'Courier New', Courier, monospace;
  }
`;

function App() {
  const [isLoading, setIsLoding] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    setTimeout(() => setIsLoding(false), 2000);
  }
  useEffect(() => {init()}, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
