import React, { useEffect } from "react";
import { HashRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import Reading from "./reading/Reading";
import YoutubeList from "./youtube/YoutubeList";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <HashRouter>
          <ScrollToTop />
          <Header />
          <div className="main-content-wrapper">
            <Switch>
              <Route exact path="/" component={Greeting} />
              <Route path="/experience" component={WorkExperience} />
              <Route path="/reading" component={Reading} />
              <Route path="/youtube" component={YoutubeList} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer />
          <ScrollToTopButton />
        </HashRouter>
      </StyleProvider>
    </div>
  );
};

export default Main;
