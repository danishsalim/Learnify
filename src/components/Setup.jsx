import React from "react";
import VideoPlayer from "./Videoplayer";
import { Link } from "react-router-dom";
export const Setup = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="container">
      <div className="tableofcontent">
        <h1>Setup & Prerequisites</h1>
        <h2>1. Go Through Internet Fundamentals</h2>
        <p>
          In order to make sure you have the skills you’ll need to follow along
          with the Bootcamp, you will need to take the FREE{" "}
          <a href="https://internetfundamentals.com/">
            {" "}
            Internet Fundamentals course.
          </a>{" "}
        </p>
        <h2>2. Install Visual Studio Code (VSCode)</h2>
        <p>
          You should install <a href="https://code.visualstudio.com/">VSCode</a>{" "}
          (Visual Studio Code) on your computer
        </p>
        <p>we will add an extension.</p>
        <p>
          1. Open VSCode. On the left side of the window, click on the very last
          icon:
        </p>
        <img src="../images/vscode-icon.jpg" alt="vs-img" />
        <p>
          2. In the Search box, type in Open in Browser and hit return. You
          should see a list of a bunch of extensions called Open in Browser.
        </p>
        <img src="../images/vscode-open-in-browser.jpg" alt="img"></img>
        <h1>Setup and Installing VS Code</h1>
        <VideoPlayer videoId="TeZdo8mx0gc"              
        width="360" height="240"
        />
      </div>

      <div className="button">
      <Link to={"/Intro"}><button  onClick={scrollToTop}>Prev</button></Link>
      <Link to={"/Html"}><button   onClick={scrollToTop}>Next</button></Link>
      
      </div>
      
    </div>
  );
};

export default Setup;
