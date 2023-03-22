import React from "react";
import { Link } from "react-router-dom";
 const Intro = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <div className="container">
      <div className="tableofcontent">  
        <h1>Introduction to the Course</h1>
        <p>From Jen Kramer :</p>
        <p>
            We are excited to teach you the basics of web development, including
            HTML, CSS, and some JavaScript. In this course we assume you know
            absolutely nothing about writing code.
        </p>
        <p>
            Because this is a short course, we are not able to cover everything
            about HTML, CSS, JavaScript, and web development exhaustively. Our goal
            is to teach you just enough to determine whether this kind of work for
            you. Do you enjoy it? Is it interesting?
        </p>
        <p>
            If so, you will be ready to dig into all of the resources the Internet
            offers, learning more on your own. Completing this course will not fully
            prepare you to be a professional web developer. You will need more
            practice with these concepts and more education. However, this course is
            an excellent start towards that goal.
        </p>
        <h2>Prerequisites</h2>
        <p>
            We do assume that you have a basic grasp of how to operate your
            computer: how to browse the Internet, how to operate your operating
            system, how to use a keyboard and mouse, etc.
        </p>
        <p>
            We also assume you have completed the Internet Fundamentals course, a
            free introduction to important concepts like file management, the client
            and the server, and how the web works.
            <a href="http://www.internetfundamentals.com" >  http://www.internetfundamentals.com</a>

        </p>
        <h3>Lets get Started...</h3> 
      </div>
      <div className="button">
      <Link to={"/Setup"}><button onClick={scrollToTop} >Next</button></Link>
      </div>

    </div>
  );
};

export default Intro;
