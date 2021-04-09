import React, { createContext, useState, useMemo, useContext, useRef, useEffect, useCallback } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".w-guide {\n  display: contents;\n  position: relative;\n}\n\n.w-guide-mark {\n  background-color: rgba(0, 0, 0, 0.5);\n  display: initial;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  width: 100vw;\n}\n\n.w-guide-wrap {\n  display: contents;\n}\n.w-guide-wrap > * {\n  z-index: 11;\n}\n\n.w-guide-relative {\n  position: relative;\n}\n";
styleInject(css_248z$2);

const GuideContext = createContext({
    mode: "action-driven",
    nextStep: () => { },
    previousStep: () => { },
    run: true,
    setStep: () => { },
    setTotal: () => { },
    step: 1,
    total: 1,
});
function GuideProvider({ value, children }) {
    const [step, setStep] = useState(1);
    const [total, setTotal] = useState(1);
    const nextStep = () => value.setStep ? value === null || value === void 0 ? void 0 : value.setStep((value === null || value === void 0 ? void 0 : value.step) + 1) : setStep(step + 1);
    const previousStep = () => value.setStep ? value === null || value === void 0 ? void 0 : value.setStep((value === null || value === void 0 ? void 0 : value.step) - 1) : setStep(step - 1);
    const defaultValue = useMemo(() => ({
        mode: "action-driven",
        nextStep,
        previousStep,
        run: true,
        setStep,
        setTotal,
        step,
        total,
    }), [nextStep, previousStep]);
    return (React.createElement(GuideContext.Provider, { value: Object.assign(Object.assign({}, defaultValue), value) }, children));
}

var css_248z$1 = "/**\n * CONTAINER\n */\n.w-guide-text {\n  color: #fff;\n  display: flex;\n  height: max-content;\n  max-width: 50vw;\n  padding: 10px;\n  position: absolute;\n  width: max-content;\n  z-index: 15;\n  cursor: initial;\n}\n\n/* Control position */\n/** \n * IMAGE\n */\n.w-guide-text img {\n  display: block;\n  width: auto;\n  height: 40px;\n  -webkit-filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\n    brightness(109%) contrast(101%); /* Safari 6.0 - 9.0 */\n  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\n    brightness(109%) contrast(101%);\n}\n/* Control position of img */\n.w-guide-text.right {\n  left: calc(100% + 10px) !important;\n  right: initial !important;\n  top: 0;\n}\n.w-guide-text.right img {\n  transform: rotate(-19deg) translate(-13px, 3px);\n}\n\n.w-guide-text.left {\n  left: initial !important;\n  right: calc(100% + 10px) !important;\n  top: 0;\n  flex-direction: row-reverse;\n}\n.w-guide-text.left img {\n  transform: rotateX(205deg) rotateZ(342deg) translate(10px, 15px);\n}\n\n.w-guide-text.top {\n  bottom: calc(100% + 10px) !important;\n  left: 50%;\n  transform: translateX(-50%);\n  top: initial !important;\n  flex-direction: column-reverse;\n  justify-content: center;\n}\n.w-guide-text.top img {\n  transform: rotateX(178deg) translate(0, -7px);\n}\n\n.w-guide-text.bottom {\n  bottom: initial !important;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 10px) !important;\n  flex-direction: column;\n  justify-content: center;\n}\n.w-guide-text.bottom img {\n  transform: rotateX(30deg) translate(0, -13px);\n}\n\n.w-guide-text.bottom.right {\n  flex-direction: row;\n  transform: translateX(-60px);\n}\n.w-guide-text.bottom.right img {\n  transform: rotateX(30deg) translate(-10px, -9px);\n}\n\n.w-guide-text.top.right {\n  flex-direction: row;\n  transform: translateX(-60px);\n}\n.w-guide-text.top.right img {\n  align-self: flex-end;\n  transform: rotateX(178deg) translate(-10px, -10px);\n}\n\n.w-guide-text.top.left {\n  flex-direction: row-reverse;\n  transform: translateX(60px);\n}\n.w-guide-text.top.left img {\n  align-self: flex-end;\n  transform: rotateX(178deg) rotateY(180deg) translate(-2px, -10px);\n}\n\n.w-guide-text.bottom.left {\n  flex-direction: row-reverse;\n  transform: translateX(60px);\n}\n.w-guide-text.bottom.left img {\n  transform: rotateY(180deg) translate(10px, -10px);\n}\n\n/**\n * CONTENT\n */\n.w-guide-text .w-guide-container div {\n  max-width: 300px;\n  width: max-content;\n  align-self: flex-end;\n  pointer-events: none;\n  user-select: none;\n}\n.w-guide-text .w-guide-container .w-guide-skip {\n  background-color: transparent;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-style: italic;\n  margin-left: 20px;\n  opacity: 0.7;\n  outline: 0;\n  padding: 5px 8px;\n  transition: opacity 0.2s;\n  cursor: pointer;\n  border: 1px solid #fff;\n  margin-top: 15px;\n}\n.w-guide-text .w-guide-container .w-guide-skip:hover {\n  opacity: 1;\n}\n\n.w-guide-tap-click {\n  position: relative;\n}\n.w-guide-tap-click::after {\n  animation-delay: 0.4s;\n  animation: tapClick 0.8s ease-out infinite;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 9999px;\n  content: \"\";\n  display: block;\n  height: 120%;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: 120%;\n}\n\n.w-guide-input {\n  position: relative;\n}\n.w-guide-input:first-of-type {\n  background-color: #fff;\n}\n.w-guide-input::after {\n  animation-delay: 0.4s;\n  animation: tapClick 0.8s ease-out infinite;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 9999px;\n  content: \"\";\n  display: block;\n  height: calc(100% + 10px);\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: calc(100% + 10px);\n}\n.w-guide-input .w-guide-text {\n  bottom: 0;\n  top: initial;\n}\n\n@keyframes tapClick {\n  50% {\n    transform: translate(-50%, -50%) scale(1.5, 1.5);\n    opacity: 0;\n  }\n  99% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 1;\n  }\n}\n";
styleInject(css_248z$1);

var icon = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 300 300\" style=\"enable-background:new 0 0 300 300;\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M255.6,254.3c-20.2-0.1-39.2-8.4-56.1-19c-17.1-10.8-30.7-25.1-41.8-42c-11.1-16.9-21.1-35-29.4-53.4\n\t\t\t\tc-8.4-18.7-16.1-38-22.1-57.6C99.5,60.4,93.7,38.2,84.8,17c-0.7-1.8-3.6-1-2.9,0.8c8.3,19.8,14,40.4,20.1,60.9\n\t\t\t\tc6,20,13.7,39.4,21.9,58.5c8.4,19.5,18.8,38.4,30.3,56.2c10.4,16.2,23.4,30.9,39.5,41.7c18.4,12.3,39.4,22.2,61.9,22.3\n\t\t\t\tC257.6,257.3,257.6,254.3,255.6,254.3L255.6,254.3z\"/>\n\t\t</g>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M54.5,120.1C80.8,92.5,81,52.6,84.5,17c-0.6,0.5-1.3,1-1.9,1.4c9.4,4,18,9.4,26.7,14.6c9,5.4,18.3,10.3,27.7,15\n\t\t\tc17,8.6,34.4,15.4,53.2,18.5c1.9,0.3,2.7-2.6,0.8-2.9c-19.9-3.3-38.1-10.8-55.9-20c-9-4.6-18-9.5-26.6-14.7\n\t\t\tc-8.2-4.9-16.3-9.8-25.1-13.5c-1-0.4-1.8,0.6-1.9,1.4C78,51.7,78.1,91,52.3,117.9C51,119.3,53.1,121.5,54.5,120.1L54.5,120.1z\"/>\n\t</g>\n</g>\n</svg>";

function ActionDrivenComponent ({ children, position = ["bottom", "left"], step, text, type = "button", }) {
    const { run, step: stepContext, setStep, nextStep } = useContext(GuideContext);
    const [active, setActive] = useState(false);
    const refChildren = useRef();
    const _skip = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setStep(0);
    };
    useEffect(() => {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    useEffect(() => {
        var _a, _b;
        if (type === "input") {
            const ele = (_b = (_a = refChildren.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input")) === null || _b === void 0 ? void 0 : _b[0];
            ele === null || ele === void 0 ? void 0 : ele.focus();
            ele === null || ele === void 0 ? void 0 : ele.addEventListener("blur", (e) => {
                if (e.target.value) {
                    setStep(stepContext + 1);
                }
            });
        }
    });
    return active ? (React.createElement("div", { className: "w-guide" },
        React.createElement("div", { className: "w-guide-mark" }),
        React.createElement("div", { ref: refChildren, className: "w-guide-wrap" }, React.cloneElement(children, {
            children: (React.createElement(React.Fragment, null,
                children.props.children,
                React.createElement("div", { className: `w-guide-text ${position.join(" ")}` },
                    React.createElement("img", { src: icon }),
                    React.createElement("div", { className: "w-guide-container" },
                        React.createElement("div", null, text),
                        React.createElement("button", { className: "w-guide-skip", onClick: _skip }, "Skip all"))))),
            onClick: (e) => {
                var _a, _b;
                if (!(((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.offsetParent) === null || _b === void 0 ? void 0 : _b.className.indexOf("w-guide-text")) >= 0)) {
                    children.props.onClick(e);
                    nextStep();
                }
            },
            className: children.props.className +
                (type === "button"
                    ? " w-guide-tap-click"
                    : type === "input"
                        ? " w-guide-input"
                        : " "),
        })))) : (children);
}

var css_248z = ".w-guide-tour-cp{\n  background-color: #fff;\n  border-radius: 5px;\n  color: #1a1a1a;\n  max-width: 300px;\n  padding: 12px 15px;\n  position: fixed;\n  text-align: left;\n  width: max-content;\n  height: max-content;\n  z-index: 15;\n}\n\n/* .w-guide-tour-cp.left{\n  top: 0;\n  right: calc(100% + 10px);\n}\n\n.w-guide-tour-cp.right{\n  top: 0;\n  left: calc(100% + 10px);\n}\n\n.w-guide-tour-cp.bottom{\n  top: calc(100% + 10px);\n  left: 0;\n}\n\n.w-guide-tour-cp.top{\n  bottom: calc(100% + 10px);\n  left: 0;\n} */\n\n.w-guide-tour-title {\n  font-weight: 600;\n}\n\n.w-guide-tour-message {\n  margin-top: 10px;\n  opacity: 0.8;\n}\n\n.w-guide-tour-footer {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 12px;\n}\n\n.w-guide-tour-step {\n  width: 100%;\n  min-width: 200px;\n  max-width: 300px;\n  margin-top: 14px;\n  display: flex;\n}\n\n.w-guide-tour-step div{\n  border-radius: 50%;\n  height: 6px;\n  width: 6px;\n  border: 1px solid #d3d3d3;\n  margin-right: 10px;\n}\n\n.w-guide-tour-step .active{\n  border-color: transparent;\n  background-color: #22402F;\n  transform: translateX(0) scale(1.5);\n  animation: stepAni 0.4s linear;\n  animation-delay: 0.2s;\n}\n\n@keyframes stepAni {\n  0%{\n    transform: scale(1) translateX(-16px);\n  }\n  100%{\n    transform: scale(1.5) translateX(0);\n  }\n}\n\n.w-guide-tour-next {\n  background-color: #22402F;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.7;\n  outline: 0;\n  padding: 5px 8px;\n  transition: opacity 0.2s;\n}\n.w-guide-tour-next:hover{\n  opacity: 1;\n}\n\n.w-guide-tour-skip{\n  background-color: transparent;\n  border-radius: 3px;\n  border: none;\n  color: #1a1a1a;\n  cursor: pointer;\n  font-style: italic;\n  opacity: 0.7;\n  outline: 0;\n  padding: 5px 8px;\n  transition: opacity 0.2s;\n}\n.w-guide-tour-skip:hover{\n  opacity: 1;\n}\n\n.w-guide-tour-arrow{\n  position: relative;\n}\n.w-guide-tour-arrow:after{\n  content: '';\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.w-guide-tour-arrow.left:after{\n  border-bottom: 6px solid transparent;  \n  border-left: 8px solid #fff;\n  border-top: 6px solid transparent;\n  left: -10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.w-guide-tour-arrow.right:after{\n  border-bottom: 6px solid transparent; \n  border-right: 8px solid #fff;\n  border-top: 6px solid transparent;\n  right: -10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.w-guide-tour-arrow.bottom:after{\n  border-bottom: 8px solid #fff;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  left: 50%;\n  bottom: -10px;\n  transform: translate(-50%, 0);\n}\n\n.w-guide-tour-arrow.top:after{\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid #fff;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, 0);\n}\n";
styleInject(css_248z);

function useHandlePosition(ref, refParent, options = {
    add: {
        top: 0,
        left: 0,
    },
    position: [],
}) {
    // Get position of screen
    const pScreen = useMemo(() => {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    const _calPositionOfRef = useCallback((x, y) => {
        const p = ref.current.getBoundingClientRect();
        return {
            bottom: p.bottom + y,
            height: p.height,
            left: p.left + x,
            right: p.right + x,
            top: p.top + y,
            width: p.width,
            x: p.x + x,
            y: p.y + y,
        };
    }, [ref === null || ref === void 0 ? void 0 : ref.current]);
    const _handlePosition = useCallback(() => {
        let translateY = 0, translateX = 0, transformOriginX, transformOriginY;
        const pParent = refParent.current.getBoundingClientRect();
        let pElement = _calPositionOfRef(translateX, translateY);
        /**
         * Set default position of element
         */
        if (options.position.indexOf("top") >= 0) {
            translateY = pParent.top - pElement.height - (options.add.top || 0);
        }
        else if (options.position.includes("bottom")) {
            translateY = pParent.bottom + (options.add.bottom || 0);
        }
        else {
            translateY = pParent.top + pParent.height / 2 - pElement.height / 2;
        }
        if (options.position.indexOf("right") >= 0) {
            translateX = pParent.left + pParent.width + (options.add.right || 0);
        }
        else if (options.position.includes("left")) {
            translateX = pParent.left - pElement.width - (options.add.left || 0);
        }
        else {
            translateX = pParent.left + pParent.width / 2 - pElement.width / 2;
        }
        // Cal again position of element to continue calculating position
        pElement = _calPositionOfRef(translateX, translateY);
        /**
         * Set case is overload
         */
        // Cal again position of Element
        // When it is more than height of screen
        if (translateY > pScreen.height) {
            translateY -= translateY - pScreen.height - pElement.height - 10;
        }
        if (translateY < 0) {
            translateY = 10;
        }
        // When it is more than width of screen
        if (translateX > pScreen.width) {
            translateX -= translateX - pScreen.width - pElement.width - 10;
        }
        if (translateX < 0) {
            translateX = 10;
        }
        ref.current.style.top = translateY + "px";
        ref.current.style.left = translateX + "px";
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
        ref.current.style.visibility = "visible";
    }, [ref === null || ref === void 0 ? void 0 : ref.current, refParent === null || refParent === void 0 ? void 0 : refParent.current]);
    return {
        handlePosition: _handlePosition,
    };
}

function TourComponent ({ children, position = ["bottom", "left"], step, title, message, }) {
    const refChildren = useRef();
    const ref = useRef();
    const { run, step: stepContext, nextStep, total, setStep } = useContext(GuideContext);
    const [active, setActive] = useState(false);
    const { handlePosition } = useHandlePosition(refChildren, ref, { position, add: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        } });
    const _skip = () => {
        setStep(0);
    };
    const _renderStep = useMemo(() => {
        let html = [];
        for (let i = 1; i <= total; i++) {
            html.push(React.createElement("div", { key: i, className: stepContext === i ? "active" : "" }));
        }
        return html;
    }, [total, stepContext]);
    useEffect(() => {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    useEffect(() => {
        active && handlePosition();
    }, [active]);
    return active ? (React.createElement("div", { className: "w-guide" },
        React.createElement("div", { className: "w-guide-mark" }),
        React.createElement("div", { className: "w-guide-wrap" }, React.cloneElement(children, {
            onClick: () => { },
            ref: ref,
            className: children.props.className +
                ` w-guide-tour-arrow ${position.join(" ")} w-guide-relative`,
        })),
        React.createElement("div", { ref: refChildren, className: `w-guide-tour-cp ${position.join(" ")}` },
            title && React.createElement("div", { className: "w-guide-tour-title" }, title),
            message && React.createElement("div", { className: "w-guide-tour-message" }, message),
            React.createElement("div", { className: "w-guide-tour-footer" },
                React.createElement("button", { className: "w-guide-tour-skip", onClick: _skip }, "Skip"),
                React.createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? "Finish" : "Next")),
            React.createElement("div", { className: "w-guide-tour-step" }, _renderStep && _renderStep.map((ele) => ele))))) : (children);
}

function index (props) {
    const { mode } = useContext(GuideContext);
    return mode === "action-driven" ? (React.createElement(ActionDrivenComponent, Object.assign({}, props))) : (React.createElement(TourComponent, Object.assign({}, props)));
}

export default index;
export { GuideContext, GuideProvider };
//# sourceMappingURL=index.js.map
efault['default'].createElement("button", { className: "w-guide-tour-skip", onClick: _skip }, "Skip"),
                React__default['default'].createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? "Finish" : "Next")),
            React__default['default'].createElement("div", { className: "w-guide-tour-step" }, _renderStep && _renderStep.map((ele) => ele))))) : (children);
}

function index (props) {
    const { mode } = React.useContext(GuideContext);
    return mode === "action-driven" ? (React__default['default'].createElement(ActionDrivenComponent, Object.assign({}, props))) : (React__default['default'].createElement(TourComponent, Object.assign({}, props)));
}

exports.GuideContext = GuideContext;
exports.GuideProvider = GuideProvider;
exports.default = index;
//# sourceMappingURL=index.js.map
