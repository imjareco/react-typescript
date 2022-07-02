export interface IModule {
    key: string;
    routes: IRoute[];
}

export interface IApplication {
    modules: IModule[];
}

export interface IRoute {
    labelKey: string;
    path?: string;
    subpaths?: this[];
    index?: boolean;
    icon?: React.ReactNode;
    element?: React.ReactNode | null;
}

export type ITranslations = {
    [x: string]: Record<string, unknown>;
    en: Record<string, unknown>;
    es: Record<string, unknown>;
}
