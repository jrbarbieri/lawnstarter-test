import "@mantine/core/styles/baseline.css";
import "@mantine/core/styles/default-css-variables.css";
import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </MantineProvider>
);
