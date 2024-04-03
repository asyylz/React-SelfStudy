import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <AuthContextProvider>
          <AppRouter />
          <ToastContainer />
        </AuthContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;
