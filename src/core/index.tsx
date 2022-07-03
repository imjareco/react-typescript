import reportWebVitals from "reportWebVitals";

import Application from "core/Application";
import { render, setConfig } from "core/functions";
import core from "core/module";
import home from "home/module";
import user from "user/module";

const appBuilder = (): void => {
  setConfig();
    
  render(<Application modules={[core, home, user]} />);
      
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

export default appBuilder;