import "./style.css";

import Guide, { GuideProvider } from "../src";
import React, { useState } from "react";

export default {
  title: "Action driven",
};

export const ActionDriven = () => {
  const [step, setStep] = useState(1);
  const [run, setRun] = useState(false);
  
  function _alert() {
    alert("Hello");
  }

  const start = () => {
    setRun(true);
  }
  
  return (
    <div>
      <button onClick={start}> Start </button>
    <GuideProvider
      value={{
        step,
        setStep,
        run,
        setRun
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
        <Guide
          step={2}
          text={`For as long as I worked on creating this solution from multiple resources I found some had spent far longer to create this already completed solution`}
          position={["right"]}
        >
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
    </div>
  );
};
