import { FunctionComponent } from "react";

export interface IAppBuilder {
    modules: IModule[];
}

export interface IApplication {
    routes: IRoute[];
    translations: ITranslations;
}

export interface IModule {
    key: string;
    routes: IRoute[];
    translations: ITranslations;
}

export interface IRoute {
    path: string;
    exact: boolean;
    component: FunctionComponent;
}

export type ITranslations = {
    [x: string]: Record<string, unknown>;
    en: Record<string, unknown>;
    es: Record<string, unknown>;
}
