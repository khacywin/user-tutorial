import React, { createContext, useState } from "react";

let step = 1;

export interface IGuide {
  step: number;
  run: boolean;
  nextStep?: () => {};
  mode?: "tour" | "action-driven";
  total?: number;
  setStep: any;
  setTotal?: any;
}

const GuideContext = createContext<IGuide>({
  step: step,
  total: step,
  run: true,
  mode: "action-driven",
  nextStep: () => ++step,
  setStep: () => {},
  setTotal: () => {},
});

export default GuideContext;

interface IGuideProvider {
  value?: Partial<IGuide>;
  children?: any;
}
export function GuideProvider({ value, children }: IGuideProvider) {
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(1);
  const defaultValue: IGuide = {
    step,
    setStep,
    setTotal,
    run: true,
    total,
    mode: "action-driven",
  };

  return (
    <GuideContext.Provider value={{ ...defaultValue, ...value }}>
      {children}
    </GuideContext.Provider>
  );
}
