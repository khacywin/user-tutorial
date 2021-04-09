import "./style.css";

import Context, { GuideProvider as Provider } from "./GuideContext";
import React, { useContext } from "react";

import ActionDrivenComponent from "./ActionDrivenComponent";
import TourComponent from "./TourComponent";

interface Props {
  children: JSX.Element;
  message?: string;
  position?: ("left" | "right" | "top" | "bottom")[];
  step: number;
  text?: string;
  title?: string;
  type?: "button" | "input";
}

export default function(props: Props) {
  const { mode } = useContext(Context);

  return mode === "action-driven" ? (
    <ActionDrivenComponent {...props} />
  ) : (
    <TourComponent {...props} />
  );
}

export const GuideContext = Context;
export const GuideProvider = Provider;
export interface IGuide {
  mode?: "tour" | "action-driven";
  nextStep?: any;
  previousStep?: any;
  run: boolean;
  setStep: any;
  setTotal?: any;
  step: number;
  total?: number;
};