// import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider,useAuth0 } from "@auth0/auth0-react";

import Home from "./components/Home";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Setup from "./components/Setup";
import Html from "./components/Html";
import Css from "./components/Css";
import Js from "./components/Js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated} = useAuth0();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <div className="Home-container">
            <div className="header">
              <div className="intro">
                <span className="fa-brands fa-react name-icon"></span>
                <Link to={"/"}>
                  <h1>Complete intro to Web Development</h1>{" "}
                </Link>
                {isAuthenticated ? (
                  <button
                    className="new-task-submit"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="button"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Setup" element={<Setup />} />
          <Route path="/Html" element={<Html />} />
          <Route path="/Css" element={<Css />} />
          <Route path="/Js" element={<Js />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="dev-32zr27wj6sjglj8v.us.auth0.com"
    clientId="uTd9Pd8FNf1gNzVPLtzUzpjKYxUMfO3a"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
