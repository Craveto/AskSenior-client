
import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const clerkPubKey = "pk_test_ZW5kbGVzcy1za3lsYXJrLTU4LmNsZXJrLmFjY291bnRzLmRldiQ"; 

ReactDOM.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
  document.getElementById("root")
);
