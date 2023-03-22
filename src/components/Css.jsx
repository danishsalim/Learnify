import React from "react";
import VideoPlayer from "./Videoplayer";
import { Link } from "react-router-dom";
const Css = () => {

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
          <img src="../images/css.jpg" alt="img"></img>
        </div>
        <div className="text-container">
          <h3>Introduction to Css</h3>
        </div>
      </div>

      <div className="tableofcontent">
        <div className="content ">
          <div className="video-container">
            <VideoPlayer videoId="ua24185-rcw" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Introduction to CSS</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="ArUL-He_AN0" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Inline, Internal & External CSS</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="oPPym7UaSIo" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Selectors in CSS </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="buxedopZbKM" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Using Chrome Developer Tools</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="5Gz7j4gDrXM" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Fonts In CSS </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="EEw5OJCsiDs" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Colors In CSS </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="YJtlXrzXXFk" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> CSS Display Property </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="5koxb4JaDqc" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>CSS Box Model, Margin and Padding</h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="4ykmsTpIn08" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Flex-Box</h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="WTz4A8IdeEQ" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Media Queries </h4>
          </div>
        </div>
      </div>
      <div className="button">
        <Link to={"/Html"}>
          <button  onClick={scrollToTop}>Prev</button>
        </Link>
        <Link to={"/Js"}>
          <button  onClick={scrollToTop}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Css;
