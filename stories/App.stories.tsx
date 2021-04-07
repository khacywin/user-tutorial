import "./style.css";

import Guide, { GuideContext, GuideProvider } from "../src";
import React, { useContext, useRef, useState } from "react";

export default {
  title: "W-Guide",
};

export const ActionDriven = () => {
  const [step, setStep] = useState(1);

  function _alert() {
    alert("Hello");
  }

  return (
    <GuideProvider
      value={{
        step,
        setStep,
      }}
    >
      <div className="column action-driven">
        <Guide
          step={1}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["bottom", "right"]}
        >
          <button onClick={_alert} className="step bottom-right">
            Bottom right position
          </button>
        </Guide>
        <Guide step={2} text={"Step 2"} position={["right"]}>
          <button onClick={_alert} className="step right">
            Right position
          </button>
        </Guide>
        <Guide
          step={3}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["top", "right"]}
        >
          <button onClick={_alert} className="step top-right">
            Top right position
          </button>
        </Guide>
        <Guide
          step={4}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["top"]}
        >
          <button onClick={_alert} className="step top">
            Top position
          </button>
        </Guide>
        <Guide
          step={5}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["left", "top"]}
        >
          <button onClick={_alert} className="step top-left">
            Top left position
          </button>
        </Guide>
        <Guide
          step={6}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["left"]}
        >
          <button onClick={_alert} className="step left">
            Left position
          </button>
        </Guide>
        <Guide
          step={7}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["left", "bottom"]}
        >
          <button onClick={_alert} className="step bottom-left">
            Bottom left position
          </button>
        </Guide>
        <Guide
          step={8}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["bottom"]}
        >
          <button onClick={_alert} className="step bottom">
            Bottom position
          </button>
        </Guide>
      </div>
      <div className="button-control">
        <button onClick={() => setStep(1)}>Bottom right</button>
        <button onClick={() => setStep(2)}>Right</button>
        <button onClick={() => setStep(3)}>Top right</button>
        <button onClick={() => setStep(4)}>Top</button>
        <button onClick={() => setStep(5)}>Top left</button>
        <button onClick={() => setStep(6)}>Left</button>
        <button onClick={() => setStep(7)}>Bottom left</button>
        <button onClick={() => setStep(8)}>Bottom</button>
      </div>
    </GuideProvider>
  );
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

export const TourComponentRight = () => {
  return (
    <GuideProvider value={{ mode: "tour", total: 3 }}>
      <div className="column">
        <Guide
          step={1}
          title="Step 1"
          message="This is message"
          position={["right"]}
        >
          <button className="step" onClick={() => console.log("hello")}>
            Step 1
          </button>
        </Guide>
        <Guide
          step={2}
          title="Step 2"
          message="This is message"
          position={["right"]}
        >
          <button className="step"> Step 2</button>
        </Guide>
        <Guide
          step={3}
          title="Step 3"
          message="This is message"
          position={["right"]}
        >
          <button className="step"> Step 3</button>
        </Guide>
      </div>
    </GuideProvider>
  );
};
