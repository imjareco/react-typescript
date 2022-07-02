import { ReactElement } from "react";
import { createRoot } from "react-dom/client";

import { IModule, IRoute } from "core/models";

export const render = (component: ReactElement): void => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement!);
  root.render(component);
}

export const setConfig = (): void => {
  window.addEventListener("unhandlerrejection", error => {
    error.preventDefault();
    if (process.env.NODE_ENV !== "production") {
      console.warn("Unhandler promise rejection warning.", error);
    }
  });
}
  
export const routesBuilder = (modules: IModule[]): IRoute[] => modules.reduce((result: IRoute[], { routes }) => result.concat(routes), []);
