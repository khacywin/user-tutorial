import "./style.css";

import React, { useCallback, useContext, useEffect, useState } from "react";

import GuideContext from "./../GuideContext";

interface Props {
  children: JSX.Element;
  position?: "left" | "right" | "top" | "bottom";
  step: number;
  title?: string;
  message?: string;
}

export default function ({
  children,
  position = "bottom",
  step,
  title,
  message,
}: Props) {
  const { run, step: stepContext, setStep, total } = useContext(GuideContext);
  const [active, setActive] = useState(false);

  const _onClick = useCallback(() => {
    setStep(stepContext + 1);
  }, [stepContext]);

  const _preventClickEvent = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  useEffect(() => {
    setActive(run && step === stepContext);
  }, [stepContext, run, step]);

  useEffect(() => {}, []);

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div className="w-guide-wrap">
        {React.cloneElement(children, {
          children: (
            <>
              {children.props.children}
              <div
                className={`w-guide-tour-cp ${position}`}
                onClick={_preventClickEvent}
              >
                {title && <div className="w-guide-tour-title">{title}</div>}
                {message && (
                  <div className="w-guide-tour-message">{message}</div>
                )}
                <div className="w-guide-tour-footer">
                  <div className="w-guide-tour-step">
                    Step <strong>{step}</strong>/{total}
                  </div>
                  <button className="w-guide-tour-next" onClick={_onClick}>
                    {step === total ? 'Finish' : 'Next'}
                  </button>
                </div>
              </div>
            </>
          ),
          onClick: () => {},
          className: children.props.className + " w-guide-relative",
        })}
      </div>
    </div>
  ) : (
    children
  );
}
