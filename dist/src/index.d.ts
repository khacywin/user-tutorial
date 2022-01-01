import "./style.css";
import { GuideProvider as Provider } from "./GuideContext";
import React from "react";
interface Props {
    children: JSX.Element;
    message?: string;
    position?: ("left" | "right" | "top" | "bottom")[];
    step: number;
    text?: string;
    title?: string;
    type?: "button" | "input";
}
export default function Guide(props: Props): JSX.Element;
export declare const GuideContext: React.Context<import("./GuideContext").IGuide>;
export declare const GuideProvider: typeof Provider;
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
export {};
