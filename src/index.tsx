import "./style.css";

import GuideContext, { GuideProvider, IGuide } from "./GuideContext";
import React, { useContext } from "react";

import ActionDrivenComponent from "./ActionDrivenComponent";
import TourComponent from "./TourComponent";

interface Props {
  children: JSX.Element;
  message?: string;
  position?: "left" | "right" | "top" | "bottom";
  step: number;
  text?: string;
  title?: string;
  type?: "button" | "input";
}

export default function (props: Props) {
  const { mode } = useContext(GuideContext);

  return mode === "action-driven" ? (
    <ActionDrivenComponent {...props} />
  ) : (
    <TourComponent {...props} />
  );
}

export { GuideContext, GuideProvider, IGuide };
