import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // sí funciona con App.jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);