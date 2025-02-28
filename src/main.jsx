import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import { SnackbarProvider, useSnackbar } from "notistack";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);
