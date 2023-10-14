import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import images from "./DataCarousel";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative h-3/4 ">
      <div
        className={`flex justify-center item-center transition ease-out duration-40 `}
        // style={{
        //   transform: `translateX(-${current * 100}%)`,
        // }}
      >
        {images.map((s) => {
          return <>
          <div className="w-full h-full">
        <img src={s} alt="" className="w-full h-full "/>
        </div>
        </>;
        })}
      </div>

      <div className=" absolute top-0 h-full w-full justify-between items-center flex text-white md:px-0 lg:px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className=" absolute bottom-0  flex justify-center gap-3  w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  
              ${ i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
