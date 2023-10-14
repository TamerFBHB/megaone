import React from "react";
import "./AboutUs.css";
import { PiLightbulbFilament } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBicycleDuotone } from "react-icons/pi";

const AboutUs = ({ VAboutUs }) => {
    return (
        <div className="py-20 md:px-10 lg:px-40" ref={VAboutUs}>
            <div className="flex  flex-wrap ">
                <div className=" md:w-full lg:w-1/2 basis-52 grow text-center lg:text-start">
                    <h2 className="Basic  pb-10">Basic info about food delivery.</h2>
                    <h1 className="about ">we are behind the delicious food delivery.</h1>
                </div>
                <div className="w-1/2 px-5 text-white basis-52 grow mt-20 text-center lg:text-start">
                    <p className="text-base">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                        metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor
                        justo sed mi finibus, vel tristique risus faucibus.
                    </p>
                    <p className="mt-10 text-base">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                        metus sollicitudin. Quisque vitae sodales lectus.
                    </p>
                </div>
            </div>

    {/* ****** to give gradient color to icon ****** */}
            <svg width="1em" height="1em">
                <linearGradient id="blue-gradient" x1="0" y1="0" x0="100%" y0="100%">
                    <stop stopColor="#ff00aa" offset="0%" />
                    <stop stopColor="#ff9100f3" offset="100%" />
                </linearGradient>
            </svg>
        {/* ********** */}
            <div className="toto flex  gap-10 flex-wrap my-40 ">
                <div className="trigger px-10 flex flex-col items-center basis-52 grow gap-5 text-white cursor-pointer">
                    <PiLightbulbFilament className="text-8xl targett duration-500" />
                    <p className="text-2xl text-center ">
                        We have new ideas for your food business.
                    </p>
                </div>
                <div className="trigger px-10 flex flex-col items-center basis-52 grow gap-5 text-white cursor-pointer">
                    <PiBicycleDuotone
                        className="cycle text-8xl targett duration-500" />
                    <p className="text-2xl text-center">
                        Join our amazing delivery staff.
                    </p>
                </div>
                <div className="trigger px-10 flex flex-col items-center basis-52 grow gap-5 text-white cursor-pointer">
                    <AiOutlineHeart className="text-8xl targett duration-500" />
                    <p className="text-2xl text-center">
                        We love our valued food customers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
