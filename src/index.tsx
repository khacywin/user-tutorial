import "./style.css";

import React, {
  useContext,
} from "react";

import ActionDrivenComponent from "./ActionDrivenComponent";
import GuideContext from "./GuideContext";
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
