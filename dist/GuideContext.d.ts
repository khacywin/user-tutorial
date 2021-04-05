import React from "react";
export interface IGuide {
    step: number;
    run: boolean;
    nextStep?: any;
    mode?: "tour" | "action-driven";
    total?: number;
    setStep: any;
    setTotal?: any;
}
declare const GuideContext: React.Context<IGuide>;
export default GuideContext;
interface IGuideProvider {
    value?: Partial<IGuide>;
    children?: any;
}
export declare function GuideProvider({ value, children }: IGuideProvider): JSX.Element;
