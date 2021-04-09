# w-guide

Guide for first user

### Install
```
  npm install w-guide
```

### Usage 
```
  import Guide, { GuideProvider } from 'w-guide';

  ....
  <GuideProvider>
    ...
    <Guide
      step={1}
      text="This is text to guide"
    >
    ...
  </GuideProvider>
```

### Section

#### GuideProvider
Have one properties is <b>value</b>
Properties of it 
```
  mode?: "tour" | "action-driven";
  nextStep?: function;
  previousStep?: function;
  run: boolean;
  setStep?: function;
  setTotal?: function;
  step: number;
  total?: number;
```
and default value is 
```
  mode: "action-driven"
```
#### Guide
Have 2 mode is <b>tour</b> or <b>action-driven</b>, so have 2 props for components.
With <b>tour</b>:
```
  children: JSX.Element;
  position?: [("left" | "right" | "top" | "bottom")];
  step: number;
  title?: string;
  message?: string;
```

With <b>action-driven</b>
```
  children: JSX.Element;
  position?: ("left" | "right" | "top" | "bottom")[];
  step: number;
  text?: string;
  type?: "button" | "input";
```

### GuideContext
Use with <b>useConext</b> hook
```
  ...
  const { 
    nextStep,
    previousStep,
    run, 
    setStep, 
    setTotal
    step, 
    total,
  } = useContext(
    GuideContext
  );
  ...
```