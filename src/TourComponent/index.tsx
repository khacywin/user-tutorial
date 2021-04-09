import "./style.css";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import GuideContext from "./../GuideContext";
import useHandlePosition from "../useHandlePosition";

interface Props {
  children: JSX.Element;
  position?: ("left" | "right" | "top" | "bottom")[];
  step: number;
  title?: string;
  message?: string;
}

export default function ({
  children,
  position = ["bottom", "left"],
  step,
  title,
  message,
}: Props) {
  const refChildren = useRef<any>(null);
  const ref = useRef<any>(null);
  const { run, step: stepContext, nextStep, total, setStep } = useContext(
    GuideContext
  );
  const [active, setActive] = useState(false);
  const { handlePosition } = useHandlePosition(refChildren, ref, { position, add: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
  } });

  const _skip = () => {
    setStep(0);
  };

  const _renderStep = useMemo(() => {
    const _total = total || 0;
    let html: any = [];
    for (let i = 1; i <= _total; i++) {
      html.push(<div key={i} className={stepContext === i ? "active" : ""} />);
    }

    return html;
  }, [total, stepContext]);

  useEffect(() => {
    setActive(run && step === stepContext);
  }, [stepContext, run, step]);

  useEffect(() => {
    active && handlePosition();
  }, [active]);

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div className="w-guide-wrap">
        {React.cloneElement(children, {
          onClick: () => {},
          ref: ref,
          className:
            children.props.className +
            ` w-guide-tour-arrow ${position.join(" ")} w-guide-relative`,
        })}
      </div>
      <div
        ref={refChildren}
        className={`w-guide-tour-cp ${position.join(" ")}`}
      >
        {title && <div className="w-guide-tour-title">{title}</div>}
        {message && <div className="w-guide-tour-message">{message}</div>}
        <div className="w-guide-tour-footer">
          <button className="w-guide-tour-skip" onClick={_skip}>
            Skip
          </button>
          <button className="w-guide-tour-next" onClick={nextStep}>
            {step === total ? "Finish" : "Next"}
          </button>
        </div>
        <div className="w-guide-tour-step">
          {_renderStep && _renderStep.map((ele: any) => ele)}
        </div>
      </div>
    </div>
  ) : (
    children
  );
}
