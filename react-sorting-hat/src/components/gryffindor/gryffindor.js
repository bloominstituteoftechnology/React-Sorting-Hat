import React from "react";
import "./gryffindor.css";

const Gryffindor = () => {
  return (
    <div className="gContainer">
      <div>
        <h1>Gryffindor</h1>
        <h2>Founder: Godric Gryffindor</h2>
        <h2>Emblamatic animal: Lion</h2>
        <h2>Element: Fire</h2>
        <h2>Colors: Scarlet, Gold</h2>
        <h2>Head: Minerva McGonagall</h2>
        <h2>House Ghost: Nearly headless Nick</h2>
      </div>
      <ul>
        Values:
        <li>courage</li>
        <li>chivalry</li>
        <li>bravery</li>
        <li>determination</li>
        <li>daring</li>
      </ul>
      <ul>
        Famous members:
        <li>Albus Dumbledore</li>
        <li>Rubeus Hagrid</li>
        <li>Minerva McGonagall</li>
        <li>Sirius Black</li>
        <li>Peter Pettigrew</li>
      </ul>
      <div>
        <h2>Summary:</h2>
        <p>
          Some that may not like you may say you are arrogant, act high and
          mighty
          <br /> and get hand outs that you may not deserve.
          <br /> Whatever
        </p>
      </div>
    </div>
  );
};

export default Gryffindor;
