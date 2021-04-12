import "./style.css";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import GuideContext from "./../GuideContext";
import ReactDOM from "react-dom";
import generateId from "../generateId";
import icon from "./../guide.svg";
import useHandlePosition from "../useHandlePosition";

interface Props {
  children: JSX.Element;
  position?: ("left" | "right" | "top" | "bottom")[];
  step: number;
  text?: string;
  type?: "button" | "input";
}

export default function ({
  children,
  position = ["bottom", "left"],
  step,
  text,
  type = "button",
}: Props) {
  const id = useMemo(() => generateId("action-driven"), []);
  const ref = useRef<any>(null);
  const { run, step: stepContext, setStep, nextStep } = useContext(
    GuideContext
  );
  const [active, setActive] = useState(false);
  const refChildren = useRef<any>(null);

  const { handlePosition } = useHandlePosition(refChildren, ref, {
    position,
    add: {},
  });

  const _skip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStep(0);
  };

  useEffect(() => {
    setActive(run && step === stepContext);
  }, [stepContext, run, step]);

  useEffect(() => {
    if (type === "input") {
      const ele = refChildren.current?.getElementsByTagName("input")?.[0];
      ele?.focus();
      ele?.addEventListener("blur", (e: any) => {
        if (e.target.value) {
          setStep(stepContext + 1);
        }
      });
    }
  });

  useEffect(() => {
    active && handlePosition();
  }, [active]);

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div ref={ref} className="w-guide-wrap">
        {React.cloneElement(children, {
          onClick: (e: any) => {
            if (
              !(e.target?.offsetParent?.className.indexOf("w-guide-text") >= 0)
            ) {
              children.props.onClick(e);
              nextStep();
            }
          },
          id,
          className:
            children.props.className +
            (type === "button"
              ? " w-guide-tap-click"
              : type === "input"
              ? " w-guide-input"
              : " "),
        })}
      </div>
      {ReactDOM.createPortal(
        <div ref={refChildren} className={`w-guide-text ${position.join(" ")}`}>
          <img src={icon} />
          <div className="w-guide-container">
            <div>{text}</div>
            <button className="w-guide-skip" onClick={_skip}>
              Skip all
            </button>
          </div>
        </div>,
        document.getElementsByTagName("body")[0]
      )}
    </div>
  ) : (
    children
  );
}
