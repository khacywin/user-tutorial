import "./style.css";
import GuideContext, { GuideProvider, IGuide } from "./GuideContext";
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
export default function WGuide(props: Props): React.FunctionComponentElement<HTMLDivElement>;
export { GuideContext, GuideProvider, IGuide };
