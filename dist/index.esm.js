import React, { createContext, useState, useMemo, useContext, useRef, useEffect, useCallback } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var GuideContext$1 = createContext({
    mode: "action-driven",
    nextStep: function () { },
    previousStep: function () { },
    run: true,
    setStep: function () { },
    setTotal: function () { },
    step: 1,
    total: 1,
});
function GuideProvider$1(_a) {
    var _b = _a.value, value = _b === void 0 ? {} : _b, children = _a.children;
    var _c = useState(1), step = _c[0], setStep = _c[1];
    var _d = useState(1), total = _d[0], setTotal = _d[1];
    var nextStep = function () {
        return value.setStep && value.step ? value.setStep(value.step + 1) : setStep(step + 1);
    };
    var previousStep = function () {
        return value.setStep && value.step ? value.setStep(value.step - 1) : setStep(step - 1);
    };
    var defaultValue = useMemo(function () { return ({
        mode: "action-driven",
        nextStep: nextStep,
        previousStep: previousStep,
        run: true,
        setStep: setStep,
        setTotal: setTotal,
        step: step,
        total: total,
    }); }, [nextStep, previousStep]);
    return (React.createElement(GuideContext$1.Provider, { value: __assign(__assign({}, defaultValue), value) }, children));
}

var css_248z$1 = "/**\n * CONTAINER\n */\n.w-guide-text {\n  color: #fff;\n  display: flex;\n  height: max-content;\n  max-width: 50vw;\n  padding: 10px;\n  position: absolute;\n  width: max-content;\n  z-index: 15;\n  cursor: initial;\n}\n\n/* Control position */\n/** \n * IMAGE\n */\n.w-guide-text img {\n  display: block;\n  width: auto;\n  height: 40px;\n  -webkit-filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\n    brightness(109%) contrast(101%); /* Safari 6.0 - 9.0 */\n  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\n    brightness(109%) contrast(101%);\n}\n/* Control position of img */\n.w-guide-text.right {\n  left: calc(100% + 10px) !important;\n  right: initial !important;\n  top: 0;\n}\n.w-guide-text.right img {\n  transform: rotate(-19deg) translate(-13px, 3px);\n}\n\n.w-guide-text.left {\n  left: initial !important;\n  right: calc(100% + 10px) !important;\n  top: 0;\n  flex-direction: row-reverse;\n}\n.w-guide-text.left img {\n  transform: rotate(-72deg) translate(4px, 15px);\n}\n\n.w-guide-text.top {\n  bottom: calc(100% + 10px) !important;\n  left: 50%;\n  transform: translateX(-50%);\n  top: initial !important;\n  flex-direction: column-reverse;\n  justify-content: center;\n}\n.w-guide-text.top img {\n  transform: rotateX(178deg) translate(0, -7px);\n}\n\n.w-guide-text.bottom {\n  bottom: initial !important;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 10px) !important;\n  flex-direction: column;\n  justify-content: center;\n}\n.w-guide-text.bottom img {\n  transform: rotateX(30deg) translate(0, -13px);\n}\n\n.w-guide-text.bottom.right {\n  flex-direction: row;\n  transform: translateX(-60px);\n}\n.w-guide-text.bottom.right img {\n  transform: rotateX(30deg) translate(-10px, -9px);\n}\n\n.w-guide-text.top.right {\n  flex-direction: row;\n  transform: translateX(-60px);\n}\n.w-guide-text.top.right img {\n  align-self: flex-end;\n  transform: rotateX(178deg) translate(-10px, -10px);\n}\n\n.w-guide-text.top.left {\n  flex-direction: row-reverse;\n  transform: translateX(60px);\n}\n.w-guide-text.top.left img {\n  align-self: flex-end;\n  transform: rotateX(178deg) rotateY(180deg) translate(-2px, -10px);\n}\n\n.w-guide-text.bottom.left {\n  flex-direction: row-reverse;\n  transform: translateX(60px);\n}\n.w-guide-text.bottom.left img {\n  transform: rotateY(180deg) translate(10px, -10px);\n}\n\n/**\n * CONTENT\n */\n.w-guide-text .w-guide-container div {\n  max-width: 300px;\n  width: max-content;\n  align-self: flex-end;\n  pointer-events: none;\n  user-select: none;\n}\n.w-guide-text .w-guide-container .w-guide-skip {\n  background-color: transparent;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-style: italic;\n  margin-left: 20px;\n  opacity: 0.7;\n  outline: 0;\n  padding: 5px 8px;\n  transition: opacity 0.2s;\n  cursor: pointer;\n  border: 1px solid #fff;\n  margin-top: 15px;\n}\n.w-guide-text .w-guide-container .w-guide-skip:hover {\n  opacity: 1;\n}\n\n.w-guide-tap-click {\n  position: relative;\n}\n.w-guide-tap-click::after {\n  animation-delay: 0.4s;\n  animation: tapClick 0.8s ease-out infinite;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 9999px;\n  content: \"\";\n  display: block;\n  height: 120%;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: 120%;\n}\n\n.w-guide-input {\n  position: relative;\n}\n.w-guide-input:first-of-type {\n  background-color: #fff;\n}\n.w-guide-input::after {\n  animation-delay: 0.4s;\n  animation: tapClick 0.8s ease-out infinite;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 9999px;\n  content: \"\";\n  display: block;\n  height: calc(100% + 10px);\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: calc(100% + 10px);\n}\n.w-guide-input .w-guide-text {\n  bottom: 0;\n  top: initial;\n}\n\n@keyframes tapClick {\n  50% {\n    transform: translate(-50%, -50%) scale(1.5, 1.5);\n    opacity: 0;\n  }\n  99% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 1;\n  }\n}\n";
styleInject(css_248z$1);

var icon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20300%20300%22%20style%3D%22enable-background%3Anew%200%200%20300%20300%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20d%3D%22M255.6%2C254.3c-20.2-0.1-39.2-8.4-56.1-19c-17.1-10.8-30.7-25.1-41.8-42c-11.1-16.9-21.1-35-29.4-53.4%20%20%20%20c-8.4-18.7-16.1-38-22.1-57.6C99.5%2C60.4%2C93.7%2C38.2%2C84.8%2C17c-0.7-1.8-3.6-1-2.9%2C0.8c8.3%2C19.8%2C14%2C40.4%2C20.1%2C60.9%20%20%20%20c6%2C20%2C13.7%2C39.4%2C21.9%2C58.5c8.4%2C19.5%2C18.8%2C38.4%2C30.3%2C56.2c10.4%2C16.2%2C23.4%2C30.9%2C39.5%2C41.7c18.4%2C12.3%2C39.4%2C22.2%2C61.9%2C22.3%20%20%20%20C257.6%2C257.3%2C257.6%2C254.3%2C255.6%2C254.3L255.6%2C254.3z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M54.5%2C120.1C80.8%2C92.5%2C81%2C52.6%2C84.5%2C17c-0.6%2C0.5-1.3%2C1-1.9%2C1.4c9.4%2C4%2C18%2C9.4%2C26.7%2C14.6c9%2C5.4%2C18.3%2C10.3%2C27.7%2C15%20%20%20c17%2C8.6%2C34.4%2C15.4%2C53.2%2C18.5c1.9%2C0.3%2C2.7-2.6%2C0.8-2.9c-19.9-3.3-38.1-10.8-55.9-20c-9-4.6-18-9.5-26.6-14.7%20%20%20c-8.2-4.9-16.3-9.8-25.1-13.5c-1-0.4-1.8%2C0.6-1.9%2C1.4C78%2C51.7%2C78.1%2C91%2C52.3%2C117.9C51%2C119.3%2C53.1%2C121.5%2C54.5%2C120.1L54.5%2C120.1z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

function ActionDrivenComponent (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? ["bottom", "left"] : _b, step = _a.step, text = _a.text, _c = _a.type, type = _c === void 0 ? "button" : _c;
    var _d = useContext(GuideContext$1), run = _d.run, stepContext = _d.step, setStep = _d.setStep, nextStep = _d.nextStep;
    var _e = useState(false), active = _e[0], setActive = _e[1];
    var refChildren = useRef(null);
    var _skip = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setStep(0);
    };
    useEffect(function () {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    useEffect(function () {
        var _a, _b;
        if (type === "input") {
            var ele = (_b = (_a = refChildren.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input")) === null || _b === void 0 ? void 0 : _b[0];
            ele === null || ele === void 0 ? void 0 : ele.focus();
            ele === null || ele === void 0 ? void 0 : ele.addEventListener("blur", function (e) {
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
                React.createElement("div", { className: "w-guide-text " + position.join(" ") },
                    React.createElement("img", { src: icon }),
                    React.createElement("div", { className: "w-guide-container" },
                        React.createElement("div", null, text),
                        React.createElement("button", { className: "w-guide-skip", onClick: _skip }, "Skip all"))))),
            onClick: function (e) {
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

function useHandlePosition(ref, refParent, options) {
    if (options === void 0) { options = {
        add: {
            top: 0,
            left: 0,
        },
        position: [],
    }; }
    // Get position of screen
    var pScreen = useMemo(function () {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    var _calPositionOfRef = useCallback(function (x, y) {
        var _a;
        var p = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            bottom: (p === null || p === void 0 ? void 0 : p.bottom) || 0 + y,
            height: (p === null || p === void 0 ? void 0 : p.height) || 0,
            left: (p === null || p === void 0 ? void 0 : p.left) || 0 + x,
            right: (p === null || p === void 0 ? void 0 : p.right) || 0 + x,
            top: (p === null || p === void 0 ? void 0 : p.top) || 0 + y,
            width: (p === null || p === void 0 ? void 0 : p.width) || 0,
            x: (p === null || p === void 0 ? void 0 : p.x) || 0 + x,
            y: (p === null || p === void 0 ? void 0 : p.y) || 0 + y,
        };
    }, [ref.current]);
    var _handlePosition = useCallback(function () {
        if (ref.current) {
            var translateY = 0, translateX = 0, transformOriginX = "", transformOriginY = "";
            var pParent = refParent.current.getBoundingClientRect();
            var pElement = _calPositionOfRef(translateX, translateY);
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
            ref.current.style.transformOrigin = transformOriginX + " " + transformOriginY;
            ref.current.style.visibility = "visible";
        }
    }, [ref.current, refParent.current]);
    return {
        handlePosition: _handlePosition,
    };
}

function TourComponent (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? ["bottom", "left"] : _b, step = _a.step, title = _a.title, message = _a.message;
    var refChildren = useRef(null);
    var ref = useRef(null);
    var _c = useContext(GuideContext$1), run = _c.run, stepContext = _c.step, nextStep = _c.nextStep, total = _c.total, setStep = _c.setStep;
    var _d = useState(false), active = _d[0], setActive = _d[1];
    var handlePosition = useHandlePosition(refChildren, ref, { position: position, add: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        } }).handlePosition;
    var _skip = function () {
        setStep(0);
    };
    var _renderStep = useMemo(function () {
        var _total = total || 0;
        var html = [];
        for (var i = 1; i <= _total; i++) {
            html.push(React.createElement("div", { key: i, className: stepContext === i ? "active" : "" }));
        }
        return html;
    }, [total, stepContext]);
    useEffect(function () {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    useEffect(function () {
        active && handlePosition();
    }, [active]);
    return active ? (React.createElement("div", { className: "w-guide" },
        React.createElement("div", { className: "w-guide-mark" }),
        React.createElement("div", { className: "w-guide-wrap" }, React.cloneElement(children, {
            onClick: function () { },
            ref: ref,
            className: children.props.className +
                (" w-guide-tour-arrow " + position.join(" ") + " w-guide-relative"),
        })),
        React.createElement("div", { ref: refChildren, className: "w-guide-tour-cp " + position.join(" ") },
            title && React.createElement("div", { className: "w-guide-tour-title" }, title),
            message && React.createElement("div", { className: "w-guide-tour-message" }, message),
            React.createElement("div", { className: "w-guide-tour-footer" },
                React.createElement("button", { className: "w-guide-tour-skip", onClick: _skip }, "Skip"),
                React.createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? "Finish" : "Next")),
            React.createElement("div", { className: "w-guide-tour-step" }, _renderStep && _renderStep.map(function (ele) { return ele; }))))) : (children);
}

function index (props) {
    var mode = useContext(GuideContext$1).mode;
    return mode === "action-driven" ? (React.createElement(ActionDrivenComponent, __assign({}, props))) : (React.createElement(TourComponent, __assign({}, props)));
}
var GuideContext = GuideContext$1;
var GuideProvider = GuideProvider$1;

export default index;
export { GuideContext, GuideProvider };
//# sourceMappingURL=index.esm.js.map
