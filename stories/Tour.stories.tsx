import "./style.css";

import Guide, { GuideProvider } from "../src";
import React, { useState } from "react";

export default {
  title: "Tour",
};

export const TourComponent = () => {
  function _alert() {
    alert("Hello");
  }

  return (
    <div
      style={{
        height: "70px",
        overflow: "hidden",
        background: "red",
        padding: "10px",
      }}
    >
      <GuideProvider value={{ mode: "tour", total: 3 }}>
        <Guide
          step={1}
          title="Step 1"
          message="This is message"
          position={["bottom"]}
        >
          <button className="step" onClick={_alert}>
            Step 1
          </button>
        </Guide>
        <Guide
          step={2}
          title="Step 2"
          message="This is message"
          position={["bottom"]}
        >
          <button className="step" onClick={_alert}>
            Step 2
          </button>
        </Guide>
        <Guide
          step={3}
          title="Step 3"
          message="This is message"
          position={["bottom"]}
        >
          <button className="step" onClick={_alert}>
            Step 3
          </button>
        </Guide>
      </GuideProvider>
      <div
        style={{
          height: "100px",
          background: "blue",
          marginTop: "10px",
          color: "#fff",
          padding: "10px",
        }}
      >
        Be overflowed
      </div>
    </div>
  );
};

export const TourComponentPosition = () => {
  return (
    <GuideProvider value={{ mode: "tour", total: 4 }}>
      <div className="tour-position">
        <Guide
          step={1}
          title="Step 1"
          message="This is message"
          position={["top"]}
        >
          <button className="step top" onClick={() => console.log("hello")}>
            Top
          </button>
        </Guide>
        <Guide
          step={2}
          title="Step 2"
          message="This is message"
          position={["right"]}
        >
          <button className="step right">Right</button>
        </Guide>
        <Guide
          step={3}
          title="Step 3"
          message="This is message"
          position={["bottom"]}
        >
          <button className="step bottom">Bottom</button>
        </Guide>
        <Guide
          step={4}
          title="Step 3"
          message="This is message"
          position={["left"]}
        >
          <button className="step left">Leff</button>
        </Guide>
      </div>
    </GuideProvider>
  );
};
