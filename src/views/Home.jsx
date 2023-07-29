import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Photos from "../components/Photos";

const Home = () => {
    return (
        <div className="home">
            <Slider></Slider>
            {/* <a href="#photos">이곳을 클릭하여 Photos 컴포넌트로 이동</a> */}
            <About></About>
            <Photos></Photos>
        </div>
    );
};

export default Home;
