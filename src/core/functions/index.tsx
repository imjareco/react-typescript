import { ReactElement } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import core from "core/module";
import { IModule, IRoute, ITranslations } from "core/models";

export const render = (component: ReactElement): void => {
  ReactDOM.render(component, document.getElementById("root"));
}

export const setConfig = (): void => {
  window.addEventListener("unhandlerrejection", error => {
    error.preventDefault();
    if (process.env.NODE_ENV !== "production") {
      console.warn("Unhandler promise rejection warning.", error);
    }
  });
}

export const modulesBuilder = (modules: IModule[]): IModule[] => 
  (modules.length > 0) ? [ core, ...modules.slice() ] : [core];
  
export const routesBuilder = (modules: IModule[]): IRoute[] => modules.reduce((result: IRoute[], { routes }) => result.concat(routes), []);

export const translationsBuilder = (languages: string[], translations: IModule[]): ITranslations => 
  Object.assign({}, ...languages.map((lang: string) => ({ [lang]: Object.assign({}, ...translations.map(({ translations }) => translations[lang]) )} )) );  

export const routerElementsBuilder = (routes: IRoute[]): JSX.Element[] => 
  routes.map((route: IRoute) => <Route {...route} key={route.path} />);
