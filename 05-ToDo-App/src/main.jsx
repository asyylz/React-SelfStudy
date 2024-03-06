import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.querySelector(".container")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
