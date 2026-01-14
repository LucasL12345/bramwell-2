import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Get base path from vite config
const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <Router base={basename}>
    <App />
  </Router>
);
