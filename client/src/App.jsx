import React from "react";
import "./App.css";
import AddData from "./component/AddData";
import ShowData from "./component/ShowData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <>
      <ContextProvider>
        <ToastContainer />
        <div className="main">
          <AddData />
          <ShowData />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
