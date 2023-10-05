import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import slides from "./slide";


export default function Carousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (

    <div className="relative h-full w-full md:w-1/2 flex justify-center items-center ">
      <div className="   overflow-hidden w-60 h-60 mx-auto">
        <div
          className={`flex  transition ease-out duration-40  `}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img src={s} alt=""
              className="block  rounded-full w-60 h-60 " />
          })}
        </div>
      </div>
        {/* *** arrow right and left *** */}
        <div className="absolute  h-full w-full justify-between items-center flex text-white  text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        {/* ********************************* */}
        {/* *** circle  *** */}
        <div className="absolute bottom-5 py-4 flex justify-center gap-3 w-full ">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-4 h-4 cursor-pointer  ${i === current ? "bg-white" : "bg-gray-500"
                  }`}
              ></div>
            );
          })}
        </div>
        {/* ********************************* */}
      </div>

    
  );
}
