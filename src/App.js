import "./App.css";
import Login from "./components/loginup";
import Header from "./components/header";
import Sigin from "./components/sigin";
import Purchase from "./components/purchases";
import Transcation from "./components/transcation";
import Image from "./components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Account from "./components/account";
import Bills from "./components/bills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sigin",
      element: <Sigin />,
    },
    {
      path: "/loginup",
      element: <Login />,
    },

    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/bills",
      element: <Bills />,
    },
    {
      path: "/purchases",
      element: <Purchase />,
    },
    {
      path: "/transcation",
      element: <Transcation />,
    },
    {
      path: "/",
      element: <Image />,
    },
    {
      path: "/home",
      element: <Image />,
    },
  ]);
  return (
    <>
      <div className="App">
        <header className="App_header">
          <ToastContainer />
          <h1>Online Banking</h1>
          <RouterProvider router={router} />
        </header>
      </div>
    </>
  );
}

export default App;
