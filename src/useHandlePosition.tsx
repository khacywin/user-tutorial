import { RefObject, useCallback, useMemo } from "react";

interface IOptions {
  add: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  position: ("left" | "right" | "top" | "bottom")[];
}

function useHandlePosition<T extends HTMLBaseElement>(
  ref: RefObject<T>,
  refParent: RefObject<any>,
  options: IOptions = {
    add: {
      top: 0,
      left: 0,
    },
    position: [],
  }
) {
  // Get position of screen
  const pScreen = useMemo(() => {
    return {
      x: 0,
      y: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }, []);

  const _calPositionOfRef = useCallback(
    (x: number, y: number) => {
      const p = ref.current?.getBoundingClientRect();

      return {
        bottom: p?.bottom || 0 + y,
        height: p?.height || 0,
        left: p?.left || 0 + x,
        right: p?.right || 0 + x,
        top: p?.top || 0 + y,
        width: p?.width || 0,
        x: p?.x || 0 + x,
        y: p?.y || 0 + y,
      };
    },
    [ref.current]
  );

  const _handlePosition = useCallback(() => {
    if (ref.current) {
      let translateY: number = 0,
        translateX: number = 0,
        transformOriginX: string = "",
        transformOriginY: string = "";

      const pParent = refParent.current.firstChild.getBoundingClientRect();
      let pElement = _calPositionOfRef(translateX, translateY);

      /**
       * Set default position of element
       */
      if (options.position.indexOf("top") >= 0) {
        translateY = pParent.top - pElement.height - (options.add.top || 0);
      } else if (options.position.includes("bottom")) {
        translateY = pParent.bottom + (options.add.bottom || 0);
      } else {
        translateY = pParent.top + pParent.height / 2 - pElement.height / 2;
      }

      if (options.position.indexOf("right") >= 0) {
        translateX = pParent.left + pParent.width + (options.add.right || 0);
      } else if (options.position.includes("left")) {
        translateX = pParent.left - pElement.width - (options.add.left || 0);
      } else {
        translateX = pParent.left + pParent.width / 2 - pElement.width / 2;
      }

      // Cal again position of element to continue calculating position
      pElement = _calPositionOfRef(translateX, translateY);

      /**
       * Set case is overload
       */
      // Cal again position of Element
      // When it is more than height of screen
      if (translateY + pElement.height > pScreen.height) {
        translateY = pScreen.height - pElement.height - 10;
      }

      if (translateY < 0) {
        translateY = 10;
      }

      // When it is more than width of screen
      if (translateX + pElement.width > pScreen.width) {
        translateX = pScreen.width - pElement.width - 10;
      }

      if (translateX < 0) {
        translateX = 10;
      }

      ref.current.style.top = translateY + "px";
      ref.current.style.left = translateX + "px";
      ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
      ref.current.style.visibility = "visible";
    }
  }, [ref.current, refParent.current]);

  return {
    handlePosition: _handlePosition,
  };
}

export default useHandlePosition;
