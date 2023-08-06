import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import MyPhotos from "../components/MyPhotos";

const Home = () => {
    return (
        <div className="home">
            <Slider></Slider>
            <About></About>
            <MyPhotos></MyPhotos>
        </div>
    );
};

export default Home;
