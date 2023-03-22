import React from "react";
import VideoPlayer from "./Videoplayer";
import { Link } from "react-router-dom";
export const Js = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="container">
      <div className=" first">
        <div className="image-container">
          <img src="../images/js.webp" alt="img"></img>
        </div>
        <div className="text-container">
          <h3>Introduction to JavaScript</h3>
        </div>
      </div>

      <div className="tableofcontent">
        {/* <div className="content">
          <div className="image-container">
            <img src="../images/js.webp" alt="img"></img>
          </div>
          <div className="text-container">
            <h3>Introduction to JavaScript</h3>
          </div>
        </div> */}

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="01GNWUuLbYk" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Introduction to JavaScript</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="f5pG-uhsykk" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Writing in-browser JavaScript and Developer Console </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="xv82yODVXqo" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Variables, Data Types and Operators in JavaScript </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="cc8OOwqj258" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Strings in JavaScript </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="wV8JB_L2smc" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> String Functions in JavaScript </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="vBNo70N3EwU" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Scope, If-else Conditionals & Switch Case in JavaScript </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="-oVdqCaL3DQ" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Arrays & Objects in JavaScript </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="SIHwNLrMXvU" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Functions in JavaScript </h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="cEWLPtRhiio" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Navigating The DOM </h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="d4PN2rJD98g" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Events & Listening to Events </h4>
          </div>
        </div>
      </div>
      <div className="button">
        <Link to={"/Css"}>
          <button  onClick={scrollToTop}>Prev</button>
        </Link>
      </div>
    </div>
  );
};

export default Js;
