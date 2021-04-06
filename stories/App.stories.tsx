import "./style.css";

import Guide, { GuideProvider } from "../src";

import React from "react";

export default {
  title: "W-Guide",
};

export const ActionDriven = () => {
  function _alert() {
    alert("Hello");
  }

  return (
    <GuideProvider>
      <div className="column action-driven">
        <Guide
          step={1}
          text={
            "For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution"
          }
          position="bottom"
        >
          <button onClick={_alert} className="step">
            Bottom position
          </button>
        </Guide>
        <Guide step={2} text={"Step 2"} position="right">
          <button onClick={_alert} className="step">
            Right position
          </button>
        </Guide>
        <Guide step={3} text={"Step 3"} position="top">
          <button onClick={_alert} className="step">
            Top position
          </button>
        </Guide>
        <Guide step={4} text={"Step 4"} position="left">
          <button onClick={_alert} className="step left">
            Left position
          </button>
        </Guide>
      </div>
    </GuideProvider>
  );
};

export const TourComponent = () => {
  function _alert() {
    alert("Hello");
  }

  return (
    <GuideProvider value={{ mode: "tour", total: 3 }}>
      <Guide
        step={1}
        title="Step 1"
        message="This is message"
        position="bottom"
      >
        <button className="step" onClick={_alert}>
          Step 1
        </button>
      </Guide>
      <Guide
        step={2}
        title="Step 2"
        message="This is message"
        position="bottom"
      >
        <button className="step" onClick={_alert}>
          {" "}
          Step 2
        </button>
      </Guide>
      <Guide
        step={3}
        title="Step 3"
        message="This is message"
        position="bottom"
      >
        <button className="step" onClick={_alert}>
          {" "}
          Step 3
        </button>
      </Guide>
    </GuideProvider>
  );
};

export const TourComponentRight = () => {
  return (
    <GuideProvider value={{ mode: "tour", total: 3 }}>
      <div className="column">
        <Guide
          step={1}
          title="Step 1"
          message="This is message"
          position="right"
        >
          <button className="step" onClick={() => console.log("hello")}>
            Step 1
          </button>
        </Guide>
        <Guide
          step={2}
          title="Step 2"
          message="This is message"
          position="right"
        >
          <button className="step"> Step 2</button>
        </Guide>
        <Guide
          step={3}
          title="Step 3"
          message="This is message"
          position="right"
        >
          <button className="step"> Step 3</button>
        </Guide>
      </div>
    </GuideProvider>
  );
};
