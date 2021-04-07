import "./style.css";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import GuideContext from "./../GuideContext";

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
  const refChildren = useRef<HTMLDivElement>();
  const { run, step: stepContext, nextStep, total, setStep } = useContext(
    GuideContext
  );
  const [active, setActive] = useState(false);

  const _skip = () => {
    setStep(0);
  };

  const _renderStep = useMemo(() => {
    let html: any = [];
    for (let i = 1; i <= total; i++) {
      html.push(
        <div key={i} className={stepContext === i ? "active" : ""} />
      );
    }

    return html;
  }, [total, stepContext]);

  useEffect(() => {
    setActive(run && step === stepContext);
  }, [stepContext, run, step]);

  useEffect(() => {
    if (refChildren.current) {
      const bounding = refChildren?.current?.getBoundingClientRect();
      refChildren.current.style.position = "fixed";
      refChildren.current.style.top = bounding.top + "px";
      refChildren.current.style.left = bounding.left + "px";
      refChildren.current.style.visibility = 'initial';
    }
  });

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div className="w-guide-wrap">
        {React.cloneElement(children, {
          children: (
            <>
              {children.props.children}
              <div
                ref={refChildren}
                className={`w-guide-tour-cp ${position.join(" ")}`}
              >
                {title && <div className="w-guide-tour-title">{title}</div>}
                {message && (
                  <div className="w-guide-tour-message">{message}</div>
                )}
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
            </>
          ),
          onClick: () => {},
          className:
            children.props.className +
            ` w-guide-tour-arrow ${position.join(" ")} w-guide-relative`,
        })}
      </div>
    </div>
  ) : (
    children
  );
}
