import "./Home.css";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import bread from "../../images/slider-ele4.png";
import pitza from "../../images/slider-ele3.png";
import tree from "../../images/slider-ele5.png";
import plate from "../../images/slider-ele1.png";
import React, { useRef } from "react";
import Food from "../food/Food";
import DownloadApp from "../DownloadApp/DownloadApp";
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../../component/NavBar/NavBar";
import ScrollingButton from "../../component/ScrollButton/ScrollingButton";
import ScrollToTop from "../../component/ScrollToTop";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

const Home = () => {
  const VFood = useRef();
  const VDownloadApp = useRef();
  const VAboutUs = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div>
      <div className="home ">
        <ScrollingButton />
        <ScrollToTop />
        <NavBar
          scrollToSection={scrollToSection}
          VFood={VFood}
          VDownloadApp={VDownloadApp}
          VAboutUs={VAboutUs}
        />

        <div className="fristPage md:px-4 lg:px-40 flex flex-col items-center ">
          {/* *** start social ***  */}
          <div className="w-5 absolute inset-16 inset-y-1/4 text-white social">
            <FaFacebookF className="my-6 cursor-pointer hover:scale-150 duration-500" />
            <FaTwitter className="my-6 cursor-pointer hover:scale-150 duration-500" />
            <FaLinkedinIn className="my-6 cursor-pointer hover:scale-150 duration-500" />
            <FaInstagramSquare className="my-6 cursor-pointer hover:scale-150 duration-500" />
          </div>
          {/* *** end social ***  */}
          {/* *** start details *** */}
          <div className="info h-50 text-white ">
            <motion.h3
              className="mt-16"
              initial={{ translateY: "25px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "tween" }}
            >
              Lorem ipsum dolor sit amet purus
            </motion.h3>
            <motion.h1
              className="text-6xl my-7 px-4 "
              initial={{ scale: 0.7, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "tween" }}
            >
              Delicious Food at your door step
            </motion.h1>
            <motion.h3
              className="leading-relaxed"
              initial={{ translateY: "15px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "tween" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              labore, fugiat excepturi accusantium deserunt{" "}
            </motion.h3>
          </div>
          {/* *** end details *** */}
          {/* *** input *** */}
          <div className="boxInput ">
            <input placeholder="Your Address" />
            <label>Check Food delivery</label>
            <FaMapMarkerAlt className=" map  " />
          </div>
          {/* *** images *** */}
          <img src={bread} alt="" className="absolute left-0 bottom-5 bread" />
          <img src={pitza} alt="" className="pitza " />
          <img src={tree} alt="" className="tree " />
          <img src={plate} alt="" className="plate " />
        </div>

        <Food VFood={VFood} />

        <DownloadApp VDownloadApp={VDownloadApp} />

        <AboutUs VAboutUs={VAboutUs} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
