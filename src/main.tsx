import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DragAndDropMain } from "./DragAndDropMain.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DragAndDropMain />
  </StrictMode>
);
