import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import i18n from "core/i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "core/routes";
import { IApplication } from "core/models";
import { Navbar } from "core/components/navbar";
import "core/sanitize/reset.css"

const Application: FunctionComponent<IApplication> = ({ routes, translations }) => {
  return (
    <I18nextProvider i18n={i18n(translations)} >
      <Router>
        <Navbar title={"App"} />
        <Routes routes={routes} />
      </Router>
    </I18nextProvider>
  );
}

Application.propTypes = {
  routes: PropTypes.array.isRequired,
  translations: PropTypes.any
}

export default Application;