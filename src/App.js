import React from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const person = require("./pictures/person.gif");
const cow = require("./pictures/cow.gif");
const grass = require("./pictures/grass.png");
const forest = require("./pictures/forest.png");

const road = require("./pictures/road.jpg");

const tree1 = require("./pictures/tree1.png");
const tree2 = require("./pictures/tree2.png");
const tree3 = require("./pictures/tree3.png");
const tree4 = require("./pictures/tree4.png");
const tree7 = require("./pictures/tree7.png");

const tree5 = require("./pictures/tree1.gif");
const tree6 = require("./pictures/tree2.gif");

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
      duration: 30000,
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
        <img src={forest} className="forest" alt="forest picture" />
        <img src={tree5} className="tree1gif" alt="tree1gif picture" />
        <img src={tree7} className="tree7" alt="tree7 picture" />
        <img src={tree6} className="tree2gif" alt="tree2gif picture" />
      </div>
      <div ref={ref}>
        <div>
          <img src={tree1} className="tree1" alt="tree1 picture" />
          <img src={tree2} className="tree2" alt="tree2 picture" />
          <img src={tree3} className="tree3" alt="tree3 picture" />
          <img src={tree4} className="tree4" alt="tree4 picture" />
          <div>
            <img src={house1} className="house1" alt="house1 picture" />
            <img src={house2} className="house2" alt="house2 picture" />
            <img src={house3} className="house3" alt="house3 picture" />
            <img src={house4} className="house4" alt="house4 picture" />
            <img src={house5} className="house5" alt="house5 picture" />
            <img src={house6} className="house6" alt="house6 picture" />
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
        <img src={cow} className="bull" />
      </div>
      <div>
        <img src={grass} className="grass" />
      </div>
      <div></div>
    </div>
  );
}

export default App;
