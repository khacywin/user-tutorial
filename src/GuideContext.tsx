import React, { createContext, useState } from "react";

export interface IGuide {
  mode?: "tour" | "action-driven";
  nextStep?: any;
  previousStep?: any;
  run: boolean;
  setStep: any;
  setTotal?: any;
  step: number;
  total?: number;
}

const GuideContext = createContext<IGuide>({
  mode: "action-driven",
  nextStep: () => {},
  previousStep: () => {},
  run: true,
  setStep: () => {},
  setTotal: () => {},
  step: 1,
  total: 1,
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
  const previousStep = () => setStep(step - 1);

  const defaultValue: IGuide = {
    mode: "action-driven",
    nextStep,
    previousStep,
    run: true,
    setStep,
    setTotal,
    step,
    total,
  };

  return (
    <GuideContext.Provider value={{ ...defaultValue, ...value }}>
      {children}
    </GuideContext.Provider>
  );
}
