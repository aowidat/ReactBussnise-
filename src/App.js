import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "../src/pages/PageNotFound";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <OurWork />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
