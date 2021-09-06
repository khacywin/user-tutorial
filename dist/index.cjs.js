'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

var css_248z$2 = ".w-guide {\r\n  display: contents;\r\n  position: relative;\r\n}\r\n\r\n.w-guide-mark {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  position: fixed;\r\n  display: block;\r\n  height: 100vh;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10;\r\n  width: 100vw;\r\n}\r\n\r\n.w-guide-wrap {\r\n  display: contents;\r\n}\r\n.w-guide-wrap > * {\r\n  z-index: 11;\r\n}\r\n\r\n.w-guide-relative {\r\n  position: relative;\r\n}\r\n";
styleInject(css_248z$2);

var GuideContext$1 = React.createContext({
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
    var _c = React.useState(1), step = _c[0], setStep = _c[1];
    var _d = React.useState(1), total = _d[0], setTotal = _d[1];
    var nextStep = function () {
        return value.setStep && value.step ? value.setStep(value.step + 1) : setStep(step + 1);
    };
    var previousStep = function () {
        return value.setStep && value.step ? value.setStep(value.step - 1) : setStep(step - 1);
    };
    var defaultValue = React.useMemo(function () { return ({
        mode: "action-driven",
        nextStep: nextStep,
        previousStep: previousStep,
        run: true,
        setStep: setStep,
        setTotal: setTotal,
        step: step,
        total: total,
    }); }, [nextStep, previousStep]);
    return (React__default['default'].createElement(GuideContext$1.Provider, { value: __assign(__assign({}, defaultValue), value) }, children));
}

var css_248z$1 = "/**\r\n * CONTAINER\r\n */\r\n.w-guide-text {\r\n  color: #fff;\r\n  cursor: initial;\r\n  display: flex;\r\n  height: max-content;\r\n  max-width: 50vw;\r\n  padding: 10px;\r\n  position: fixed;\r\n  visibility: hidden;\r\n  width: max-content;\r\n  z-index: 9999;\r\n}\r\n\r\n/* Control position */\r\n/** \r\n * IMAGE\r\n */\r\n.w-guide-text img {\r\n  display: block;\r\n  width: auto;\r\n  height: 40px;\r\n  -webkit-filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\r\n    brightness(109%) contrast(101%); /* Safari 6.0 - 9.0 */\r\n  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(194deg)\r\n    brightness(109%) contrast(101%);\r\n}\r\n/* Control position of img */\r\n.w-guide-text.right{\r\n  align-items: center;\r\n}\r\n.w-guide-text.right img {\r\n  transform: scale(0.8) rotate(-33deg) translate(-13px, 3px);\r\n}\r\n\r\n.w-guide-text.left {\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.w-guide-text.left img {\r\n  transform: scale(0.8) rotateX(205deg) rotateZ(342deg) translate(5px, 0);\r\n}\r\n.w-guide-text.left .w-guide-container{\r\n  text-align: right;\r\n}\r\n\r\n.w-guide-text.top {\r\n  flex-direction: column-reverse;\r\n  justify-content: center;\r\n}\r\n.w-guide-text.top img {\r\n  transform: scale(0.8) rotateX(178deg) translate(0, -7px);\r\n}\r\n.w-guide-text.top .w-guide-container{\r\n  text-align: center;\r\n}\r\n\r\n.w-guide-text.bottom {\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.w-guide-text.bottom img {\r\n  transform: rotateX(30deg) translate(0, -5px);\r\n}\r\n.w-guide-text.bottom .w-guide-container{\r\n  text-align: center;\r\n}\r\n\r\n.w-guide-text.bottom.right {\r\n  flex-direction: row;\r\n  align-items: initial;\r\n  transform: translateX(-20px);\r\n}\r\n.w-guide-text.bottom.right img {\r\n  transform: rotateX(30deg) translate(-10px, -9px);\r\n}\r\n.w-guide-text.bottom.right .w-guide-container{\r\n  text-align: left;\r\n}\r\n\r\n.w-guide-text.top.right {\r\n  flex-direction: row;\r\n  transform: translateX(-20px);\r\n}\r\n.w-guide-text.top.right img {\r\n  align-self: flex-end;\r\n  transform: rotateX(178deg) translate(-10px, -5px);\r\n}\r\n.w-guide-text.top.right .w-guide-container{\r\n  text-align: left;\r\n}\r\n\r\n.w-guide-text.top.left {\r\n  flex-direction: row-reverse;\r\n  transform: translateX(20px);\r\n  align-items: initial;\r\n}\r\n.w-guide-text.top.left img {\r\n  align-self: flex-end;\r\n  transform: rotateX(178deg) rotateY(180deg) translate(-2px, -5px);\r\n}\r\n.w-guide-text.top.left .w-guide-container{\r\n  text-align: right;\r\n}\r\n\r\n.w-guide-text.bottom.left {\r\n  flex-direction: row-reverse;\r\n  align-items: initial;\r\n  transform: translateX(20px);\r\n}\r\n.w-guide-text.bottom.left img {\r\n  transform: rotateY(180deg) translate(-10px, 0);\r\n}\r\n.w-guide-text.bottom.left .w-guide-container{\r\n  text-align: right;\r\n}\r\n\r\n/**\r\n * CONTENT\r\n */\r\n.w-guide-text .w-guide-container div {\r\n  max-width: 300px;\r\n  width: max-content;\r\n  align-self: flex-end;\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n.w-guide-text .w-guide-container .w-guide-skip {\r\n  background-color: transparent;\r\n  border-radius: 3px;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-style: italic;\r\n  margin-left: 20px;\r\n  opacity: 0.7;\r\n  outline: 0;\r\n  padding: 5px 8px;\r\n  transition: opacity 0.2s;\r\n  cursor: pointer;\r\n  border: 1px solid #fff;\r\n  margin-top: 15px;\r\n}\r\n.w-guide-text .w-guide-container .w-guide-skip:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.w-guide-tap-click {\r\n  position: relative;\r\n}\r\n.w-guide-tap-click::after {\r\n  animation-delay: 0.4s;\r\n  animation: tapClick 0.8s ease-out infinite;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 9999px;\r\n  content: \"\";\r\n  display: block;\r\n  height: 120%;\r\n  left: 50%;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  width: 120%;\r\n}\r\n\r\n.w-guide-input {\r\n  position: relative;\r\n}\r\n.w-guide-input:first-of-type {\r\n  background-color: #fff;\r\n}\r\n.w-guide-input::after {\r\n  animation-delay: 0.4s;\r\n  animation: tapClick 0.8s ease-out infinite;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 9999px;\r\n  content: \"\";\r\n  display: block;\r\n  height: calc(100% + 10px);\r\n  left: 50%;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  width: calc(100% + 10px);\r\n}\r\n.w-guide-input .w-guide-text {\r\n  bottom: 0;\r\n  top: initial;\r\n}\r\n\r\n@keyframes tapClick {\r\n  50% {\r\n    transform: translate(-50%, -50%) scale(1.5, 1.5);\r\n    opacity: 0;\r\n  }\r\n  99% {\r\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\r\n    opacity: 1;\r\n  }\r\n}\r\n";
styleInject(css_248z$1);

var index = 1;
function generateId(name) {
    return name + "-" + index++;
}

var icon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20300%20300%22%20style%3D%22enable-background%3Anew%200%200%20300%20300%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20d%3D%22M255.6%2C254.3c-20.2-0.1-39.2-8.4-56.1-19c-17.1-10.8-30.7-25.1-41.8-42c-11.1-16.9-21.1-35-29.4-53.4%20%20%20%20c-8.4-18.7-16.1-38-22.1-57.6C99.5%2C60.4%2C93.7%2C38.2%2C84.8%2C17c-0.7-1.8-3.6-1-2.9%2C0.8c8.3%2C19.8%2C14%2C40.4%2C20.1%2C60.9%20%20%20%20c6%2C20%2C13.7%2C39.4%2C21.9%2C58.5c8.4%2C19.5%2C18.8%2C38.4%2C30.3%2C56.2c10.4%2C16.2%2C23.4%2C30.9%2C39.5%2C41.7c18.4%2C12.3%2C39.4%2C22.2%2C61.9%2C22.3%20%20%20%20C257.6%2C257.3%2C257.6%2C254.3%2C255.6%2C254.3L255.6%2C254.3z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M54.5%2C120.1C80.8%2C92.5%2C81%2C52.6%2C84.5%2C17c-0.6%2C0.5-1.3%2C1-1.9%2C1.4c9.4%2C4%2C18%2C9.4%2C26.7%2C14.6c9%2C5.4%2C18.3%2C10.3%2C27.7%2C15%20%20%20c17%2C8.6%2C34.4%2C15.4%2C53.2%2C18.5c1.9%2C0.3%2C2.7-2.6%2C0.8-2.9c-19.9-3.3-38.1-10.8-55.9-20c-9-4.6-18-9.5-26.6-14.7%20%20%20c-8.2-4.9-16.3-9.8-25.1-13.5c-1-0.4-1.8%2C0.6-1.9%2C1.4C78%2C51.7%2C78.1%2C91%2C52.3%2C117.9C51%2C119.3%2C53.1%2C121.5%2C54.5%2C120.1L54.5%2C120.1z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

function useHandlePosition(ref, refParent, options) {
    if (options === void 0) { options = {
        add: {
            top: 0,
            left: 0,
        },
        position: [],
    }; }
    // Get position of screen
    var pScreen = React.useMemo(function () {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    var _calPositionOfRef = React.useCallback(function (x, y) {
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
    var _handlePosition = React.useCallback(function () {
        if (ref.current) {
            var translateY = 0, translateX = 0, transformOriginX = "", transformOriginY = "";
            var pParent = refParent.current.firstChild.getBoundingClientRect();
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
            ref.current.style.transformOrigin = transformOriginX + " " + transformOriginY;
            ref.current.style.visibility = "visible";
        }
    }, [ref.current, refParent.current]);
    return {
        handlePosition: _handlePosition,
    };
}

function ActionDrivenComponent (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? ["bottom", "left"] : _b, step = _a.step, text = _a.text, _c = _a.type, type = _c === void 0 ? "button" : _c;
    var id = React.useMemo(function () { return generateId("action-driven"); }, []);
    var ref = React.useRef(null);
    var refMark = React.useRef(null);
    var _d = React.useContext(GuideContext$1), run = _d.run, stepContext = _d.step, setStep = _d.setStep, nextStep = _d.nextStep;
    var _e = React.useState(false), active = _e[0], setActive = _e[1];
    var refChildren = React.useRef(null);
    var handlePosition = useHandlePosition(refChildren, ref, {
        position: position,
        add: {},
    }).handlePosition;
    var _skip = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setStep(0);
    };
    React.useEffect(function () {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    React.useEffect(function () {
        var _a, _b;
        if (!active || type !== "input")
            return;
        var ele = (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input")) === null || _b === void 0 ? void 0 : _b[0];
        ele === null || ele === void 0 ? void 0 : ele.focus();
        ele === null || ele === void 0 ? void 0 : ele.addEventListener("blur", function (e) {
            if (e.target.value) {
                nextStep();
            }
        });
        return function () {
            ele === null || ele === void 0 ? void 0 : ele.removeEventListener("blur", function (e) {
                if (e.target.value) {
                    nextStep();
                }
            });
        };
    }, [type, active]);
    React.useEffect(function () {
        active && handlePosition();
    }, [active]);
    React.useEffect(function () {
        var _a;
        if (!((_a = refMark.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()))
            return;
        var position = refMark.current.getBoundingClientRect();
        if (position.x > 0)
            refMark.current.style.left = -position.x + "px";
        if (position.y > 0)
            refMark.current.style.top = -position.y + "px";
    });
    return active ? (React__default['default'].createElement("div", { className: "w-guide" },
        React__default['default'].createElement("div", { className: "w-guide-mark", ref: refMark }),
        React__default['default'].createElement("div", { ref: ref, className: "w-guide-wrap" }, React__default['default'].cloneElement(children, {
            onClick: function (e) {
                children.props.onClick && children.props.onClick(e);
                type !== "input" && nextStep();
            },
            id: id,
            className: children.props.className +
                (type === "button"
                    ? " w-guide-tap-click"
                    : type === "input"
                        ? " w-guide-input"
                        : " "),
        })),
        ReactDOM__default['default'].createPortal(React__default['default'].createElement("div", { ref: refChildren, className: "w-guide-text " + position.join(" ") },
            React__default['default'].createElement("img", { src: icon }),
            React__default['default'].createElement("div", { className: "w-guide-container" },
                React__default['default'].createElement("div", null, text),
                React__default['default'].createElement("button", { className: "w-guide-skip", onClick: _skip }, "Skip all"))), document.getElementsByTagName("body")[0]))) : (children);
}

var css_248z = ".w-guide-tour-cp{\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  color: #1a1a1a;\r\n  height: max-content;\r\n  max-width: 300px;\r\n  padding: 12px 15px;\r\n  position: fixed;\r\n  text-align: left;\r\n  visibility: hidden;\r\n  width: max-content;\r\n  z-index: 9999;\r\n}\r\n\r\n/* .w-guide-tour-cp.left{\r\n  top: 0;\r\n  right: calc(100% + 10px);\r\n}\r\n\r\n.w-guide-tour-cp.right{\r\n  top: 0;\r\n  left: calc(100% + 10px);\r\n}\r\n\r\n.w-guide-tour-cp.bottom{\r\n  top: calc(100% + 10px);\r\n  left: 0;\r\n}\r\n\r\n.w-guide-tour-cp.top{\r\n  bottom: calc(100% + 10px);\r\n  left: 0;\r\n} */\r\n\r\n.w-guide-tour-title {\r\n  font-weight: 600;\r\n}\r\n\r\n.w-guide-tour-message {\r\n  margin-top: 10px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.w-guide-tour-footer {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  margin-top: 12px;\r\n}\r\n\r\n.w-guide-tour-step {\r\n  width: 100%;\r\n  min-width: 200px;\r\n  max-width: 300px;\r\n  margin-top: 14px;\r\n  display: flex;\r\n}\r\n\r\n.w-guide-tour-step div{\r\n  border-radius: 50%;\r\n  height: 6px;\r\n  width: 6px;\r\n  border: 1px solid #d3d3d3;\r\n  margin-right: 10px;\r\n}\r\n\r\n.w-guide-tour-step .active{\r\n  border-color: transparent;\r\n  background-color: #22402F;\r\n  transform: translateX(0) scale(1.5);\r\n  animation: stepAni 0.4s linear;\r\n  animation-delay: 0.2s;\r\n}\r\n\r\n@keyframes stepAni {\r\n  0%{\r\n    transform: scale(1) translateX(-16px);\r\n  }\r\n  100%{\r\n    transform: scale(1.5) translateX(0);\r\n  }\r\n}\r\n\r\n.w-guide-tour-next {\r\n  background-color: #22402F;\r\n  border-radius: 3px;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n  outline: 0;\r\n  padding: 5px 8px;\r\n  transition: opacity 0.2s;\r\n}\r\n.w-guide-tour-next:hover{\r\n  opacity: 1;\r\n}\r\n\r\n.w-guide-tour-skip{\r\n  background-color: transparent;\r\n  border-radius: 3px;\r\n  border: none;\r\n  color: #1a1a1a;\r\n  cursor: pointer;\r\n  font-style: italic;\r\n  opacity: 0.7;\r\n  outline: 0;\r\n  padding: 5px 8px;\r\n  transition: opacity 0.2s;\r\n}\r\n.w-guide-tour-skip:hover{\r\n  opacity: 1;\r\n}\r\n\r\n.w-guide-tour-arrow{\r\n  position: relative;\r\n}\r\n.w-guide-tour-arrow:after{\r\n  content: '';\r\n  height: 0;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n\r\n.w-guide-tour-arrow.left:after{\r\n  border-bottom: 6px solid transparent;  \r\n  border-left: 8px solid #fff;\r\n  border-top: 6px solid transparent;\r\n  left: -10px;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n}\r\n\r\n.w-guide-tour-arrow.right:after{\r\n  border-bottom: 6px solid transparent; \r\n  border-right: 8px solid #fff;\r\n  border-top: 6px solid transparent;\r\n  right: -10px;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n}\r\n\r\n.w-guide-tour-arrow.bottom:after{\r\n  border-bottom: 8px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  left: 50%;\r\n  bottom: -10px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.w-guide-tour-arrow.top:after{\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 8px solid #fff;\r\n  left: 50%;\r\n  top: -10px;\r\n  transform: translate(-50%, 0);\r\n}\r\n";
styleInject(css_248z);

function TourComponent (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? ["bottom", "left"] : _b, step = _a.step, title = _a.title, message = _a.message;
    var id = React.useMemo(function () { return generateId("tour-component"); }, []);
    var refChildren = React.useRef(null);
    var ref = React.useRef(null);
    var _c = React.useContext(GuideContext$1), run = _c.run, stepContext = _c.step, nextStep = _c.nextStep, total = _c.total, setStep = _c.setStep;
    var _d = React.useState(false), active = _d[0], setActive = _d[1];
    var handlePosition = useHandlePosition(refChildren, ref, {
        position: position,
        add: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
        },
    }).handlePosition;
    var _skip = function () {
        setStep(0);
    };
    var _renderStep = React.useMemo(function () {
        var _total = total || 0;
        var html = [];
        for (var i = 1; i <= _total; i++) {
            html.push(React__default['default'].createElement("div", { key: i, className: stepContext === i ? "active" : "" }));
        }
        return html;
    }, [total, stepContext]);
    React.useEffect(function () {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    React.useEffect(function () {
        active && handlePosition();
    }, [active]);
    return active ? (React__default['default'].createElement("div", { className: "w-guide" },
        React__default['default'].createElement("div", { className: "w-guide-mark" }),
        React__default['default'].createElement("div", { ref: ref, className: "w-guide-wrap" }, React__default['default'].cloneElement(children, {
            onClick: function () { },
            id: id,
            className: (children.props.className || "") +
                (" w-guide-tour-arrow " + position.join(" ") + " w-guide-relative"),
        })),
        ReactDOM__default['default'].createPortal(React__default['default'].createElement("div", { ref: refChildren, className: "w-guide-tour-cp " + position.join(" ") },
            title && React__default['default'].createElement("div", { className: "w-guide-tour-title" }, title),
            message && React__default['default'].createElement("div", { className: "w-guide-tour-message" }, message),
            React__default['default'].createElement("div", { className: "w-guide-tour-footer" },
                React__default['default'].createElement("button", { className: "w-guide-tour-skip", onClick: _skip }, "Skip"),
                React__default['default'].createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? "Finish" : "Next")),
            React__default['default'].createElement("div", { className: "w-guide-tour-step" }, _renderStep && _renderStep.map(function (ele) { return ele; }))), document.getElementsByTagName("body")[0]))) : (children);
}

function Guide(props) {
    var mode = React.useContext(GuideContext$1).mode;
    return mode === "action-driven" ? (React__default['default'].createElement(ActionDrivenComponent, __assign({}, props))) : (React__default['default'].createElement(TourComponent, __assign({}, props)));
}
var GuideContext = GuideContext$1;
var GuideProvider = GuideProvider$1;

exports.GuideContext = GuideContext;
exports.GuideProvider = GuideProvider;
exports['default'] = Guide;
//# sourceMappingURL=index.cjs.js.map
