import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";
import "./App.css";
import UserContext from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </StrictMode>
);
