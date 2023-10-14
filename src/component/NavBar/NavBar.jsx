import "./navbar.css";
import "../../index.css";
import logo from "../../images/logo.png";
import logoSmall from "../../images/logo-white-small.png";
import { BsFillBasket2Fill, BsPerson, BsFillCCircleFill } from "react-icons/bs";
import { BiChevronDown, BiKey } from "react-icons/bi";
import { FaRegHandPointRight } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaBars, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import {  useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = ({ scrollToSection,VFood ,VDownloadApp,VAboutUs}) => {
    // *** to move screen links ***
    const [isAnimating, setAnimating] = useState("100%");

    // *** start apeare navbar ****
    const [visible, setVisible] = useState(false);
    const [visib, setVisib] = useState(false);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {setVisib(true);  } 
        else if (window.scrollY <= 250) {setVisib(false); }    
        if (window.scrollY > 280) {setVisible(true);}
        else if (window.scrollY <= 280) { setVisible(false);}        
    });
    // *** end apeare navbar **** 
    // *** start scale span underLine ***
    const [state , setstate] = useState()
    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {setstate(0);  } 
        if (window.scrollY > 2600) {setstate(1); }     
        if (window.scrollY > 3500) {setstate(2);}
        else if (window.scrollY <= 400) { setstate(4);}        
    });
     // *** end scale span ***
        return (
        <>
            <header
                className={`bigScreen ${visible ? "apeare" : ""}
                                    ${visib ? "transfor" : ""  }`}>
                <div className="flex justify-between py-2 lg:px-40 md:px-2">
                    <img src={logo} alt="" />
                    <div className="flex items-center">
                        <NavLink
                            to=""
                            onClick={()=>{scrollToSection(VFood) ; setstate(0)}}
                            className={`text-white text-base mx-10 relative py-5 px-2
                                hover-parent duration-5000`} >
                            Browse Food
                            <span
                            activeClassName="w-full"
                                className={`h-0.5 w-0 bg-gradient-to-r from-red-700 to-orange-600
                                absolute bottom-0 left-0  hover-child duration-500
                                ${state===0? "w-full":"w-0"}  }`} 
                            >
                                &nbsp;
                            </span>
                        </NavLink>

                        <NavLink
                            to=""
                            onClick={()=>{scrollToSection(VDownloadApp) ;  setstate(1)}}
                            className={`text-white text-base mx-10 relative py-5 px-2
                                hover-parent duration-5000`} >
                            Download App
                            <span
                            activeClassName="w-full"
                                className={`h-0.5 w-0 bg-gradient-to-r from-red-700 to-orange-600
                                absolute bottom-0 left-0  hover-child duration-500
                                ${state===1? "w-full":"w-0"}`}
                            >
                                &nbsp;
                            </span>
                        </NavLink>

                        <NavLink
                            to=""
                            onClick={()=>{scrollToSection(VAboutUs) ;  setstate(2)}}
                            className={`text-white text-base mx-10 relative py-5 px-2
                                hover-parent duration-5000`} >
                            About Us
                            <span
                            activeClassName="w-full"
                                className={`h-0.5 w-0 bg-gradient-to-r from-red-700 to-orange-600
                                absolute bottom-0 left-0  hover-child duration-500
                                ${state===2? "w-full":"w-0"} `}
                            >
                                &nbsp;
                            </span>
                        </NavLink>

                    </div>
                    <div className="flex items-center  text-white text-2xl gap-6  ">
                        <BsFillBasket2Fill className="cursor-pointer " />
                        <div className="trigger relative ">
                            <div className=" cursor-pointer flex">
                                <BsPerson />
                                <BiChevronDown />
                            </div>
                            <ul className="target  text-lg bg-gray-800 w-48 absolute top-10 -right-20 z">
                                <li className="flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <BiKey className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Login</div>
                                </li>
                                <li className="flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <FaRegHandPointRight className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Register</div>
                                </li>
                                <li className="flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <BsPerson className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Account</div>
                                </li>
                                <li className="flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <HiOutlineLockClosed className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> LogOut</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {/* ****** screen 768px ****** */}
            <header
                className={`smallScreen ${visible ? "apeare" : ""}
                                    ${visib ? "transfor" : ""  }`}
            >
                <div className="w-full flex justify-between py-4  px-4 ">
                    <img src={logo} alt="" />

                    <div className="flex items-center  text-white text-2xl gap-5  ">
                        <BsFillBasket2Fill className="cursor-pointer" />
                        <div className="trigger relative">
                            <div className=" cursor-pointer flex">
                                <BsPerson />
                                <BiChevronDown />
                            </div>
                            <div className="target  text-lg bg-gray-800 w-48 absolute top-10 -right-0  ">
                                <div className="flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <BiKey className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Login</div>
                                </div>
                                <div className="flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <FaRegHandPointRight className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Register</div>
                                </div>
                                <div className="flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <BsPerson className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> Account</div>
                                </div>
                                <div className="flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600">
                                    <HiOutlineLockClosed className="  ps-2 text-3xl mr-3" />
                                    <div className="hover-target"> LogOut</div>
                                </div>
                            </div>
                        </div>
                        <FaBars onClick={() => setAnimating(0)} />
                    </div>
                </div>
            </header>
            <motion.div
                className="screenLinks "
                initial={{ y: "0" }}
                animate={{ y: isAnimating }}
                transition={{ duration: 0.5, type: "tween" }}
            >
                <div className="w-full h-full relative  flex flex-col justify-center items-center links">
                    <AiOutlineClose
                        className="absolute top-10 right-10 text-2xl text-white"
                        onClick={() => setAnimating("100%")}
                    />
                    <img src={logoSmall} alt="" className="my-5" />
                    <div className=" flex flex-col justify-center items-center my-5">
                        <NavLink
                            href="#"
                            onClick={()=>{scrollToSection(VFood);  setAnimating("100%")}}
                            className=" my-4 font-bold text-2xl text-white"
                        >
                            Browse Food
                        </NavLink>
                        <NavLink
                            href="#"
                            onClick={()=>{scrollToSection(VDownloadApp);  setAnimating("100%")}}
                            className=" my-4 font-bold text-2xl text-white"
                        >
                            Download App
                        </NavLink>
                        <NavLink
                            href="#"
                            onClick={()=>{scrollToSection(VAboutUs) ;  setAnimating("100%")}}
                            className=" my-4 font-bold text-2xl text-white"
                        >
                            About Us
                        </NavLink>
                    </div>
                    <p className=" w-full text-center font-bold text-md text-white"> +1 631 123 4567</p>
                    <p className=" font-bold text-md text-white"> email@website.com</p>
                    <div className="my-5 flex gap-5">
                        <FaFacebookF className="text-white cursor-pointer" />
                        <FaXTwitter className="text-white cursor-pointer" />
                        <FaYoutube className="text-white cursor-pointer" />
                        <AiFillInstagram className="text-white cursor-pointer" />
                    </div>
                    <p className=" w-full flex flex-col items-center gap-2 text-white py-5 justify-center border-b-2">
                       <div className=" w-full flex justify-center items-center gap-2"> 
                         <BsFillCCircleFill />
                         2023 MegaOne. Made With 
                       </div>
                       <div className=" w-full text-center">
                         <p >.. Tamer Fouad Beshara ..</p>
                       </div>
                    </p>
                </div>
            </motion.div>
        </>
    );
};
export default NavBar;
