import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

const activeChainId = 11155111; // Sepolia Chain ID

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
