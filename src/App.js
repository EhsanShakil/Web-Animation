import React from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const person = require("./pictures/person.gif");
const bull = require("./pictures/bull.gif");
const grass = require("./pictures/grass.png");
const helicopter = require("./pictures/helicopter.gif");
const forest = require("./pictures/forest.png");
const boundary = require("./pictures/boundary.png");

const road = require("./pictures/road.jpg");

const tree1 = require("./pictures/tree1.png");
const tree2 = require("./pictures/tree2.png");
const tree3 = require("./pictures/tree3.png");
const tree4 = require("./pictures/tree4.png");

const house1 = require("./pictures/house1.png");
const house2 = require("./pictures/house2.png");
const house3 = require("./pictures/house3.png");
const house4 = require("./pictures/house4.png");
const house5 = require("./pictures/house5.png");
const house6 = require("./pictures/house6.png");

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-285%)" },
      { transform: "translateX(130%)" },
    ],
    timing: {
      duration: 10000,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "reverse",
    },
  });

  return (
    <div
      onClick={() =>
        getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.2)
      }
    >
      <div>
        <img src={forest} className="forest" />
      </div>
      <div ref={ref}>
        <div>
          <img src={tree1} className="tree1" />
          <img src={tree2} className="tree2" />
          <img src={tree3} className="tree3" />
          <img src={tree4} className="tree4" />
          <div>
            <img src={house1} className="house1" />
            <img src={house2} className="house2" />
            <img src={house3} className="house3" />
            <img src={house4} className="house4" />
            <img src={house5} className="house5" />
            <img src={house6} className="house6" />
          </div>
        </div>
      </div>
      <div>
        <img src={road} className="road" />
      </div>
      <div>
        <img src={person} className="person" />
      </div>
      <div>
        <img src={bull} className="bull" />
      </div>
      <div>
        <img src={grass} className="grass" />
      </div>
    </div>
  );
}

export default App;
