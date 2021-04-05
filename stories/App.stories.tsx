import "./style.css";

import Guide, { GuideProvider } from "../src";

import React from "react";

export default {
  title: "W-Guide",
};

export const ActionDriven = () => {
  function _alert(){
    alert('Hello');
  }

  return (
    <GuideProvider>
      <Guide step={1} text={"Step 1"} position="bottom">
        <button onClick={_alert} className="step"> Step 1</button>
      </Guide>
      <Guide step={2} text={"Step 2"} position="bottom">
        <button onClick={_alert} className="step"> Step 2</button>
      </Guide>
      <Guide step={3} text={"Step 3"} position="bottom">
        <button onClick={_alert} className="step"> Step 3</button>
      </Guide>
    </GuideProvider>
  );
};

export const TourComponent = () => {
  function _alert(){
    alert('Hello');
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
        <button className="step" onClick={_alert}> Step 2</button>
      </Guide>
      <Guide
        step={3}
        title="Step 3"
        message="This is message"
        position="bottom"
      >
        <button className="step" onClick={_alert}> Step 3</button>
      </Guide>
    </GuideProvider>
  );
};

export const TourComponentRight = () => {
  return (
    <GuideProvider value={{ mode: "tour", total: 3 }}>
      <div className='column'>
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
