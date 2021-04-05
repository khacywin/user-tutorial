/// <reference types="react" />
import "./style.css";
import GuideContext, { GuideProvider, IGuide } from "./GuideContext";
interface Props {
    children: JSX.Element;
    message?: string;
    position?: "left" | "right" | "top" | "bottom";
    step: number;
    text?: string;
    title?: string;
    type?: "button" | "input";
}
export default function (props: Props): JSX.Element;
export { GuideContext, GuideProvider, IGuide };
