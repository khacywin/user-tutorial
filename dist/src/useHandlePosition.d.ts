import { RefObject } from "react";
interface IOptions {
    add: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
    position: ("left" | "right" | "top" | "bottom")[];
}
declare function useHandlePosition<T extends HTMLBaseElement>(ref: RefObject<T>, refParent: RefObject<any>, options?: IOptions): {
    handlePosition: () => void;
};
export default useHandlePosition;
