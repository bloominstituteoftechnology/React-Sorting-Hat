import React from "react";
import "./slytherin.css";

const Slytherin = () => {
  return (
    <div className="sContainer">
      <div>
        <h1>Slytherin</h1>
        <h2>Founder: Salazar Slytherin</h2>
        <h2>Emblamatic animal: Serpent</h2>
        <h2>Element: Water</h2>
        <h2>Colors: Green, Silver</h2>
        <h2>Head: Severus Snape</h2>
        <h2>House Ghost: Bloody Baron</h2>
      </div>
      <ul>
        Values:
        <li>cunning</li>
        <li>resourcefulness</li>
        <li>ambition</li>
        <li>self-preservation</li>
        <li>fraternity</li>
      </ul>
      <ul>
        Famous members:
        <li>Merlin</li>
        <li>Horace Slughorn</li>
        <li>Gormlaith Gaunt</li>
        <li>Tom Riddle</li>
        <li>Severus Snape</li>
      </ul>
      <div>
        <h2>Summary:</h2>
        <p>
          Some that may not like you may say you are pretty much the bad guy
          <br /> Always conspiring, always evil
          <br /> Thats fine
        </p>
      </div>
    </div>
  );
};

export default Slytherin;
