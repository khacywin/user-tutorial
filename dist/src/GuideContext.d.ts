import React from "react";
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
declare const GuideContext: React.Context<IGuide>;
export default GuideContext;
interface IGuideProvider {
    value?: Partial<IGuide>;
    children?: any;
}
export declare function GuideProvider({ value, children }: IGuideProvider): JSX.Element;
