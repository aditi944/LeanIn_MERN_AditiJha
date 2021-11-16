import React, { useState } from "react";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav } from "../Components/sidebar/Nav";
import Skills from "./Skills";
import computer from "../img/drip-computer.png";

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const toTop = move > 600 ? "1" : "0";

  // const Drip = styled(Wave)`
  //   /* top: ${move >= 500 ? "-120vh" : ""}; */
  //   /* @media only screen and (max-width: 899px) and (min-width: 600px) {
  //     top: ${move >= 100 ? "-120vh" : ""};
  //   }
  //   @media only screen and (min-width: 900px) and (max-width: 1199px) {
  //     width: 70%;
  //   }
  //   @media only screen and (min-width: 1200px) {
  //   } */
  // `;

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="mainWrapper">
      <Wave
        styles={`top:${move >= 500 ? "-120vh" : ""}`}
        className={`wave ${move > 600 ? "fixed" : ""}`}
      />
      <div className="header">
        <div className="navWrapper">
          <DefaultNav move={move} />
        </div>
        <div className="about-header">
          <div className="headerImg" />
          <div className="info">
            <h1>Aditi Jha</h1>
            <h2>Coder, Developer, Writer</h2>
          </div>
        </div>
      </div>
      <h3 id="about" className="aboutText">
        <span className="about-title">About Me</span>
        <br />
        <div className="border">
          <div></div>
        </div>
        I am a student from Banasthali Vidyapith pursuing B.Tech in ECE. Do
        freelancing in my free time.
      </h3>
      <div className="comp-icon-wrapper">
        <div className="comp-icon">
          <i className="fas fa-arrow-down"></i>
          <img
            src={computer}
            alt="pink and purple gradient computer illustration with paint like drips"
          ></img>
        </div>
      </div>
      <Skills />

      <div style={{ opacity: toTop }} className="toTop">
        <i onClick={backToTop} className="fas fa-chevron-circle-up" />
      </div>
    </div>
  );
};

export default Main;
