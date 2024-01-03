import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Applications } from "./Applications.jsx";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <Applications />
  </StrictMode>
);
