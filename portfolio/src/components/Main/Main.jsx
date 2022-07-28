import "./Main.css";
import adamPic from "../../assets/abihacker.jpg";

import React from "react";

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="imgHolder">
        <img src={adamPic} alt="adam" />
      </div>
      <div className="textHolder">
        <h2>
          Hello, my name is <span>Adam Bihacker</span>
        </h2>
        <p>
          I am a junior frontend developer, professional trumpet player and
          teacher, with great enthusiasm towards building frontend applications
          since the beginning of 2018.
        </p>
      </div>
    </div>
  );
}
