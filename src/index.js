import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
