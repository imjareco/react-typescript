// import "core/assets/css/index.css";
import { render, setConfig, modulesBuilder, routesBuilder, translationsBuilder } from "core/functions";
import Application from "core/application";
import languages from "core/translations";
import { IAppBuilder } from "core/models";
import reportWebVitals from "reportWebVitals";

const appBuilder = ({ modules }: IAppBuilder): void => {
  setConfig();
  
  const app = modulesBuilder(modules);
  const routes = routesBuilder(app);
  const translations = translationsBuilder(Object.keys(languages), app);
  
  render(
    <Application
      routes={routes}
      translations={translations}
    />
  );
      
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

export default appBuilder;