import "./Food.css";
import React from "react";
import "../../index.css";
import { LiaBrushSolid } from "react-icons/lia";
import { BsCupHotFill, BsStarFill } from "react-icons/bs";
import { FaRegGem } from "react-icons/fa";
import Data from "./Data";
import { Link } from "react-router-dom";

const Food = ({ VFood }) => {
  return (
    <section className="FoodPage md:px-4 lg:px-40 py-10" ref={VFood}>
      <div className="py-28 grid md:gap-4 md:grid-cols-1 md:justify-center md:items-center lg:grid-cols-2 justify-between items-center">
        <div className="text-center">
          <h3 className="Basic ">Basic info about online food</h3>
          <h1 className="delicious leading-none py-4 md:w-full ">
            delicious food is our aim.
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-3 gap-10 ">
          <div className="flex flex-col justify-center items-center gap-1 text-white text-lg parent">
            <LiaBrushSolid className="icon" />
            <h2>1052+</h2>
            <h2>Online Orders</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-white text-lg parent">
            <FaRegGem className="icon" />
            <h2>9800+</h2>
            <h2>Satisfied Customers</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-white text-lg parent">
            <BsCupHotFill className="icon" />
            <h2>3785+</h2>
            <h2>Cup of Teas</h2>
          </div>
        </div>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((item) => {
          return (
            <>
              <div class="hover-trigger relative rounded overflow-hidden border  bg-black mx-3 md:mx-0 lg:mx-0">
                <div className="circle-price p-0 bg-gradient-to-r from-red-700 to-orange-400">
                  <div className="text-white flex flex-col pt-7 items-center leading-none">
                    <p>{item.price}</p>
                    <p>min</p>
                  </div>
                </div>
                <div className="overflow-hidden ">
                    <img class="w-full bg-cover imageData duration-500" src={item.image} alt="" />
                </div>
                <div class="px-4 py-2 ">
                  <div class="pt-2 flex justify-between items-center">
                    <h1 class="text-xl text-white font-medium title duration-500">
                      {item.title}
                    </h1>
                    <div className="flex gap-2 ">
                      <BsStarFill className="text-yellow-300" />
                      <BsStarFill className="text-yellow-300" />
                      <BsStarFill className="text-yellow-300" />
                      <BsStarFill className="text-yellow-300" />
                      <BsStarFill className="text-yellow-300" />
                    </div>
                  </div>
                  <div class="pt-2 mb-2 text-md text-gray-300">
                  {item.details}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="FoodOption">
        <Link className="">Brows More Food Option</Link>
      </div>
    </section>
  );
};

export default Food;
