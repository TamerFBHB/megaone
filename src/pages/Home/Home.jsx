import React  from "react";
import "./Home.css";
import "../../index.css";
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


const Home = () => {
  return (
    <div className="home flex flex-col items-center">
      {/* *** start social ***  */}
      <div className="w-5 absolute inset-16 inset-y-1/4 text-white social">
        <FaFacebookF className="my-6 cursor-pointer" />
        <FaTwitter className="my-6 cursor-pointer" />
        <FaLinkedinIn className="my-6 cursor-pointer" />
        <FaInstagramSquare className="my-6 cursor-pointer" />
      </div>
      {/* *** end social ***  */}
      {/* *** start details *** */}
      <div className="info h-50 text-white ">
        <h3 className="mt-16">Lorem ipsum dolor sit amet purus</h3>
        <h1 className="text-6xl my-7 px-4 ">
          {" "}
          Delicious Food at your door step
        </h1>
        <h3 className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore,
          fugiat excepturi accusantium deserunt{" "}
        </h3>
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
  );
};

export default Home;
