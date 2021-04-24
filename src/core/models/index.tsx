import { FunctionComponent } from "react";

export interface IAppBuilder {
    modules: IModule[];
};

export interface IApplication {
    routes: IRoute[];
    translations: ITranslations;
};

export interface IModule {
    key: string;
    routes: IRoute[];
    translations: ITranslations;
};

export interface IRoute {
    path: string;
    exact: boolean;
    component: FunctionComponent;
};

export interface ITranslations {
    [x: string]: Object;
    en: Object;
    es: Object;
};
