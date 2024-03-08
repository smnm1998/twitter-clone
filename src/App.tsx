import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // RouterProvider 임포트 추가
import { createGlobalStyle } from "styled-components";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import reset from 'styled-reset';
import { useEffect } from 'react';
import LoadingScreen from './components/loading-screen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // 홈 페이지를 나타냄
        element: <Home />,
      },
      {
        path: "profile", // 프로필 페이지에 대한 경로 수정
        element: <Profile />
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
`

function App() {
  const [isLoading, setIsLoding] = useState(true);
  const init = async() => {
    setTimeout(() => setIsLoding(false), 2000);
  }
  useEffect(() => {init()}, )
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
