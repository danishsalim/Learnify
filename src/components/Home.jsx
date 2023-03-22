import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="Home-container">
      <div className="header">
        <div className="intro-img">
          <img src="images/learnify.jpeg" alt="img"></img>
          <h2>Engage and Learn</h2>
        </div>
      </div>

      <div className="tableofcontent">
        <h3>Table of Contents </h3>

        <div className="content">
          <div className="image-container">
            <span className="fa-solid fa-circle-info"></span>
          </div>
          <div className="text-container">
            <h3>WELCOME</h3>
            {isAuthenticated ? (
              <Link to={"/intro"}>
                <h4>Introduction</h4>
              </Link>
            ) : (
              <h4 onClick={() => loginWithRedirect()} className="clickableh4">
                Introduction
              </h4>
            )}
          </div>
        </div>

        <div className="content">
          <div className="image-container">
            <img src="images/web-development-tools.png" alt="img"></img>
          </div>
          <div className="text-container">
            {isAuthenticated ? (
              <Link to={"/Setup"}>
                <h4>Setup & Prerequisites</h4>
              </Link>
            ) : (
              <h4 onClick={() => loginWithRedirect()} className="clickableh4">
                Setup & Prerequisites
              </h4>
            )}
          </div>
        </div>

        <div className="content">
          <div className="image-container">
            <img src="../images/html.webp" alt="img"></img>
          </div>
          <div className="text-container">
            {isAuthenticated ? (
              <Link to={"/Html"}>
                <h4>Introduction to HTML</h4>
              </Link>
            ) : (
              <h4 onClick={() => loginWithRedirect()} className="clickableh4">
                Introduction to HTML
              </h4>
            )}
          </div>
        </div>

        <div className="content">
          <div className="image-container">
            <img src="images/css.jpg" alt="img"></img>
          </div>
          <div className="text-container">
            {isAuthenticated ? (
              <Link to={"/Css"}>
                <h4>Introduction to Css</h4>
              </Link>
            ) : (
              <h4 onClick={() => loginWithRedirect()} className="clickableh4">
                Introduction to Css
              </h4>
            )}
          </div>
        </div>

        <div className="content">
          <div className="image-container">
            <img src="../images/js.webp" alt="img"></img>
          </div>
          <div className="text-container">
            {isAuthenticated ? (
              <Link to={"/Js"}>
                <h4>Introduction to JavaScript</h4>
              </Link>
            ) : (
              <h4 onClick={() => loginWithRedirect()} className="clickableh4">
                Introduction to JavaScript
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
