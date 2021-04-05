import React, { createContext, useState } from "react";

export interface IGuide {
  step: number;
  run: boolean;
  nextStep?: any;
  mode?: "tour" | "action-driven";
  total?: number;
  setStep: any;
  setTotal?: any;
}

const GuideContext = createContext<IGuide>({
  step: 1,
  total: 1,
  run: true,
  mode: "action-driven",
  nextStep: () => {},
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
  
  const nextStep = () => setStep(step + 1);

  const defaultValue: IGuide = {
    step,
    setStep,
    setTotal,
    nextStep,
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
