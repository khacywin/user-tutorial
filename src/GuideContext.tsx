import React, { createContext, useMemo, useState } from "react";

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

  const nextStep = () =>
    value.setStep ? value?.setStep(value?.step + 1) : setStep(step + 1);
  const previousStep = () =>
    value.setStep ? value?.setStep(value?.step - 1) : setStep(step - 1);

  const defaultValue: IGuide = useMemo(
    () => ({
      mode: "action-driven",
      nextStep,
      previousStep,
      run: true,
      setStep,
      setTotal,
      step,
      total,
    }),
    [nextStep, previousStep]
  );

  return (
    <GuideContext.Provider value={{ ...defaultValue, ...value }}>
      {children}
    </GuideContext.Provider>
  );
}
