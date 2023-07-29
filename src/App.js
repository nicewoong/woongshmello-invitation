import React, { useEffect } from "react";
import Router from "./router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  useEffect(() => {
    AOS.init();
    document.body.classList.add("loaded");
  }, []);

  return (
    <div className="woongshmello_all_wrap">
      <ScrollToTop />
      <Router />
    </div>
  );
};

export default App;
