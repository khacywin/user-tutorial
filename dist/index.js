import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

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
    step: 1,
    total: 1,
    run: true,
    mode: "action-driven",
    nextStep: () => { },
    setStep: () => { },
    setTotal: () => { },
});
function GuideProvider({ value, children }) {
    const [step, setStep] = useState(1);
    const [total, setTotal] = useState(1);
    const nextStep = () => setStep(step + 1);
    const defaultValue = {
        step,
        setStep,
        setTotal,
        nextStep,
        run: true,
        total,
        mode: "action-driven",
    };
    return (React.createElement(GuideContext.Provider, { value: Object.assign(Object.assign({}, defaultValue), value) }, children));
}

var css_248z$1 = ".w-guide-tap-click {\n  position: relative;\n}\n.w-guide-tap-click::after {\n  animation-delay: 0.4s;\n  animation: tapClick 0.8s ease-out infinite;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 120%;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: 120%;\n}\n\n.w-guide-text {\n  color: #fff;\n  height: max-content;\n  max-width: 50vw;\n  padding: 10px;\n  pointer-events: none;\n  position: absolute;\n  user-select: none;\n  width: max-content;\n  z-index: 10;\n}\n.w-guide-text.left{\n  top: 0;\n  right: calc(100% + 10px);\n}\n.w-guide-text.right{\n  top: 0;\n  left: calc(100% + 10px);\n}\n.w-guide-text.bottom{\n  top: calc(100% + 10px);\n}\n.w-guide-text.top{\n  bottom: calc(100% + 10px);\n}\n\n@keyframes tapClick {\n  50% {\n    transform: translate(-50%, -50%) scale(1.5, 1.5);\n    opacity: 0;\n  }\n  99% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(0.001, 0.001);\n    opacity: 1;\n  }\n}";
styleInject(css_248z$1);

function ActionDrivenComponent ({ children, position = "bottom", step, text, type = "button", }) {
    const { run, step: stepContext, setStep } = useContext(GuideContext);
    const [active, setActive] = useState(false);
    const _onClickCapture = useCallback(() => {
        setStep(stepContext + 1);
    }, [stepContext]);
    const _preventClickEvent = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
    }, []);
    useEffect(() => {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    return active ? (React.createElement("div", { className: "w-guide" },
        React.createElement("div", { className: "w-guide-mark" }),
        React.createElement("div", { className: "w-guide-wrap", onClickCapture: _onClickCapture }, React.cloneElement(children, {
            children: (React.createElement(React.Fragment, null,
                children.props.children,
                React.createElement("div", { className: `w-guide-text ${position}`, onClick: _preventClickEvent }, text))),
            className: children.props.className +
                (type === "button" ? " w-guide-tap-click" : type === 'input' ? " w-guide-input" : " "),
        })))) : (children);
}

var css_248z = ".w-guide-tour-cp{\n  background-color: #fff;\n  border-radius: 5px;\n  color: #1a1a1a;\n  max-width: 300px;\n  padding: 12px 15px;\n  position: absolute;\n  text-align: left;\n  width: max-content;\n  z-index: 15;\n}\n\n.w-guide-tour-cp.left{\n  top: 0;\n  right: calc(100% + 10px);\n}\n\n.w-guide-tour-cp.right{\n  top: 0;\n  left: calc(100% + 10px);\n}\n\n.w-guide-tour-cp.bottom{\n  top: calc(100% + 10px);\n  left: 0;\n}\n\n.w-guide-tour-cp.top{\n  bottom: calc(100% + 10px);\n  left: 0;\n}\n\n.w-guide-tour-title {\n  font-weight: 600;\n}\n\n.w-guide-tour-message {\n  margin-top: 10px;\n  opacity: 0.8;\n}\n\n.w-guide-tour-footer {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n}\n\n.w-guide-tour-step {\n  font-size: 90%;\n  font-style: italic;\n  opacity: 0.5;\n}\n\n.w-guide-tour-next {\n  background-color: #22402F;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  margin-left: 20px;\n  opacity: 0.7;\n  outline: 0;\n  padding: 5px 8px;\n  transition: opacity 0.2s;\n}\n.w-guide-tour-next:hover{\n  opacity: 1;\n}\n\n.w-guide-tour-arrow{\n  position: relative;\n}\n.w-guide-tour-arrow:after{\n  content: '';\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.w-guide-tour-arrow.left:after{\n  border-bottom: 6px solid transparent;  \n  border-left:10px solid #fff;\n  border-top: 6px solid transparent;\n  left: -10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.w-guide-tour-arrow.right:after{\n  border-bottom: 6px solid transparent; \n  border-right:10px solid #fff;\n  border-top: 6px solid transparent;\n  right: -10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.w-guide-tour-arrow.bottom:after{\n  border-bottom: 10px solid #fff;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  left: 50%;\n  bottom: -10px;\n  transform: translate(-50%, 0);\n}\n\n.w-guide-tour-arrow.top:after{\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 10px solid #fff;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, 0);\n}\n";
styleInject(css_248z);

function TourComponent ({ children, position = "bottom", step, title, message, }) {
    const { run, step: stepContext, nextStep, total } = useContext(GuideContext);
    const [active, setActive] = useState(false);
    const _preventClickEvent = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
    }, []);
    useEffect(() => {
        setActive(run && step === stepContext);
    }, [stepContext, run, step]);
    useEffect(() => { }, []);
    return active ? (React.createElement("div", { className: "w-guide" },
        React.createElement("div", { className: "w-guide-mark" }),
        React.createElement("div", { className: "w-guide-wrap" }, React.cloneElement(children, {
            children: (React.createElement(React.Fragment, null,
                children.props.children,
                React.createElement("div", { className: `w-guide-tour-cp ${position}`, onClick: _preventClickEvent },
                    title && React.createElement("div", { className: "w-guide-tour-title" }, title),
                    message && (React.createElement("div", { className: "w-guide-tour-message" }, message)),
                    React.createElement("div", { className: "w-guide-tour-footer" },
                        React.createElement("div", { className: "w-guide-tour-step" },
                            "Step ",
                            React.createElement("strong", null, step),
                            "/",
                            total),
                        React.createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? 'Finish' : 'Next'))))),
            onClick: () => { },
            className: children.props.className + ` w-guide-tour-arrow ${position} w-guide-relative`,
        })))) : (children);
}

function index (props) {
    const { mode } = useContext(GuideContext);
    return mode === "action-driven" ? (React.createElement(ActionDrivenComponent, Object.assign({}, props))) : (React.createElement(TourComponent, Object.assign({}, props)));
}

export default index;
export { GuideContext, GuideProvider };
//# sourceMappingURL=index.js.map
otal),
                        React__default['default'].createElement("button", { className: "w-guide-tour-next", onClick: nextStep }, step === total ? 'Finish' : 'Next'))))),
            onClick: () => { },
            className: children.props.className + ` w-guide-tour-arrow ${position} w-guide-relative`,
        })))) : (children);
}

function index (props) {
    const { mode } = React.useContext(GuideContext);
    return mode === "action-driven" ? (React__default['default'].createElement(ActionDrivenComponent, Object.assign({}, props))) : (React__default['default'].createElement(TourComponent, Object.assign({}, props)));
}

exports.GuideContext = GuideContext;
exports.GuideProvider = GuideProvider;
exports.default = index;
//# sourceMappingURL=index.js.map
