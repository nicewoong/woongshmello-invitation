import React from "react";
import TextLoop from "react-text-loop";

const Slider = () => {
    return (
        <div className="slider">
            <div className="woongshmello_hero" id="home" data-style="one">
                <div className="background">
                    <div
                        className="image"
                        style={{ backgroundImage: "url(img/slider/1-3.jpg)" }}
                    ></div>
                </div>
                {/* End .background */}

                <div className="container">
                    <div className="content">
                        <div className="name_wrap">
                            <h3>
                                <span>
                                    Wedding
                                    <br />
                                </span>{" "}
                                <TextLoop>
                                    <span className="loop-text">Woongje</span>
                                    <span className="loop-text">Eungyung</span>
                                </TextLoop>{" "}
                                <span className="overlay_effect"></span>
                            </h3>
                        </div>
                        {/* End title */}

                        <div className="job_wrap">
                            <span className="job">
                                24.06.30 SUN 11:00 AM
                                <span className="overlay_effect"></span>
                            </span>
                        </div>
                        {/* End designation */}
                        <a
                            href="#photos"
                            className="white-fill-bg btn-outline btn-medium"
                        >
                            Gallery
                            <span className="overlay_effect"></span>
                        </a>
                    </div>
                    {/* End content */}
                </div>
                {/* End .container */}
            </div>
        </div>
    );
};

export default Slider;
