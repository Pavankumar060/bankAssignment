import "./App.css";
import Sigin from "./sigin";
import Login from "./loginup";
import Header from "./header";
import Account from "./account";
import Bills from "./bills";
import Purchase from "./components/purchases";
import Transcation from "./transcation";
import Image from "./home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
