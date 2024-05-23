import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-o1o6hqyth5kjbop8.us.auth0.com"
     clientId="INVGmKC1NRE57fZxzo0rdG6v2leySnwg"
     authorizationParams={{
      redirect_uri: "http://localhost:5176/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
