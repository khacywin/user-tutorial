import "./style.css";

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import GuideContext from "./../GuideContext";
import icon from "./../guide.svg";

interface Props {
  children: JSX.Element;
  position?: "left" | "right" | "top" | "bottom";
  step: number;
  text?: string;
  type?: "button" | "input";
}

export default function ({
  children,
  position = "bottom",
  step,
  text,
  type = "button",
}: Props) {
  const { run, step: stepContext, setStep } = useContext(GuideContext);
  const [active, setActive] = useState(false);
  const refChildren = useRef<HTMLDivElement>();

  const _skip = () => setStep(0);
  
  const _onClickCapture = useCallback(() => {
    setStep(stepContext + 1);
  }, [stepContext]);

  const _preventClickEvent = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

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

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div
        ref={refChildren}
        className="w-guide-wrap"
        onClickCapture={_onClickCapture}
      >
        {React.cloneElement(children, {
          children: (
            <>
              {children.props.children}
              <div
                className={`w-guide-text ${position}`}
                onClickCapture={_preventClickEvent}
              >
                <img src={icon} />
                <div>{text}</div>
                <button onClick={_skip}>Skip</button>
              </div>
            </>
          ),
          className:
            children.props.className +
            (type === "button"
              ? " w-guide-tap-click"
              : type === "input"
              ? " w-guide-input"
              : " "),
        })}
      </div>
    </div>
  ) : (
    children
  );
}
