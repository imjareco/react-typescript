import i18n, { useTranslations } from "core/i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

import { routesBuilder } from "core/functions";
import { IApplication } from "core/models";
import UserProvider from "core/context/UserContext";
import RoutesProvider from "core/providers/RoutesProvider";
import { Navbar } from "core/components/Navbar";

import "assets/styles/custom.css";

const Application = ({ modules }: IApplication) => {
  const t = useTranslations();

  return (
    <I18nextProvider i18n={i18n} >
      <Router>
        <UserProvider>
          <Navbar title={t("core.app.title", { app: "app" })} />
          <RoutesProvider routes={routesBuilder(modules)} />
        </UserProvider>
      </Router>
    </I18nextProvider>
  );
}

export default Application;