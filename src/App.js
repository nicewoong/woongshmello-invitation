import React, { useEffect } from "react";
import Router from "./router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import ScrollToTop from "./components/ScrollToTop";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1K_xkWQM9UqxL8YEPVAgF5TYraDjxwMY",
  authDomain: "woongshmello.firebaseapp.com",
  projectId: "woongshmello",
  storageBucket: "woongshmello.appspot.com",
  messagingSenderId: "97751048916",
  appId: "1:97751048916:web:f8207c5d4a5d9f2c4ad141"
};


const App = () => {

  useEffect(() => {
    AOS.init();
    document.body.classList.add("loaded");
    const app = initializeApp(firebaseConfig);
  }, []);

  return (
    <div className="woongshmello_all_wrap">
      <ScrollToTop />
      <Router />
    </div>
  );
};

export default App;
