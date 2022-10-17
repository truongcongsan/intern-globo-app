import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";

import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

import "./App.scss";
import AppFrame from "./components/Routing/AppFrame";

function App() {
  return (
    <Router>
      <AppProvider i18n={enTranslations} linkComponent={Link}>
        <AppFrame />
      </AppProvider>
    </Router>
  );
}

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;
function Link({ children, url = "", external, ref, ...rest }) {
  // react-router only supports links to pages it can handle itself. It does not
  // support arbirary links, so anything that is not a path-based link should
  // use a reglar old `a` tag
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = "_blank";
    rest.rel = "noopener noreferrer";
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
}
export default App;
