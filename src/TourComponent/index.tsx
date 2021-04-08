import "./style.css";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
}: Props): React.FunctionComponentElement<HTMLDivElement> {
  const { run, step: stepContext, nextStep, total, setStep } = useContext(
    GuideContext
  );
  const [active, setActive] = useState(false);

  const _skip = (): void => {
    setStep(0);
  };

  const _renderStep = useMemo(() => {
    const html: JSX.Element[] = [];
    for (let i = 1; i <= total; i++) {
      html.push(<div key={i} className={stepContext === i ? "active" : ""} />);
    }

    return html;
  }, [total, stepContext]);

  useEffect(() => {
    setActive(run && step === stepContext);
  }, [stepContext, run, step]);

  const updateRef = useCallback((el: HTMLDivElement) => {
    if (el) {
      const bounding = el?.getBoundingClientRect();
      el.style.position = "fixed";
      el.style.top = bounding.top + "px";
      el.style.left = bounding.left + "px";
      el.style.visibility = "initial";
    }
  }, []);

  return active ? (
    <div className="w-guide">
      <div className="w-guide-mark" />
      <div className="w-guide-wrap">
        {React.cloneElement(children, {
          children: (
            <>
              {children.props.children}
              <div
                ref={updateRef}
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
                  {_renderStep && _renderStep.map((ele: JSX.Element) => ele)}
                </div>
              </div>
            </>
          ),
          onClick: (e: React.SyntheticEvent<unknown>): void => {
            e.preventDefault();
          },
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
