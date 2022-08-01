import "./Main.css";
import adamPic from "../../assets/adika.png";

import React from "react";

export default function Main() {

    const welcomeContent = "I am a junior frontend developer, professional trumpet player and teacher, with great enthusiasm towards building frontend applications since the beginning of 2018."
    
  return (
    <div className="mainContainer">
      <div className="imgHolder">
        <img src={adamPic} alt="adam" />
      </div>
      <div className="textHolder">
        <h2>
          Hello, my name is <span>Adam Bihacker</span>,
        </h2>
        <p>{welcomeContent}</p>
      </div>
    </div>
  );
}
