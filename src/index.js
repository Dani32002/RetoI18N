import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import 'bootstrap/dist/css/bootstrap.min.css';

import JobsList from "./components/jobslist";

const checkLanguage = () => {
    console.log(navigator.language);
    return navigator.language.startsWith("en");
}

ReactDOM.render(
    <IntlProvider locale={(checkLanguage())? "en": "es"} messages= {(checkLanguage())? localeEnMessages: localeEsMessages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root"));
