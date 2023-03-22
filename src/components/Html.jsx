import React from "react";
import VideoPlayer from "./Videoplayer";
import { Link } from "react-router-dom";
export const Html = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="container">

      <div className="first">
        <div className="image-container">
          <img src="../images/html.webp" alt="img"></img>
        </div>
        <div className="text-container">
          <h3>Introduction to HTML</h3>
        </div>
      </div>

      <div className="tableofcontent">
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="IA8JWGP13dI" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Basic structure of a Website</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="EZCc_4abdcE" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4>Title , Link , Script and Meta-tags</h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="ulv_q6-b7uI" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Headings & Paragraphs </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="z6H22xGAZEA" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Img and Anchor tags </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="N69xumSjg5Q" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Lists and Tables </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="KqJikDzb3l4" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Forms & Input Tags </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="DFT9qxVCF6k" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Inline & Block Elements </h4>
          </div>
        </div>

        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="BucLTOfLQsk" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Ids & Classes in HTML </h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="gw1efv5WF_Q" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> HTML Entities </h4>
          </div>
        </div>
        <div className="content">
          <div className="video-container">
            <VideoPlayer videoId="FKfsmV6otEM" width="100%" height="auto" />
          </div>
          <div className="text-container">
            <h4> Semantic Tags in HTML </h4>
          </div>
        </div>
      </div>
      <div className="button">
        <Link to={"/Setup"}>
          <button  onClick={scrollToTop}>Prev</button>
        </Link>
        <Link to={"/Css"}>
          <button  onClick={scrollToTop}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Html;
