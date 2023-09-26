

import './navbar.css';
import '../../index.css'
import logo from '../../images/logo.png'
import logoSmall from '../../images/logo-white-small.png'
import { BsFillBasket2Fill, BsPerson, BsFillCCircleFill } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import { FaRegHandPointRight } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaBars, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { useState } from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';


const CustomLink = ({ href, text, className, onClick }) => {

    return (
        <>
            <NavLink
                to=""
                onClick={onClick}
                className={`text-white text-base mx-10 relative py-5 px-2  hover-parent duration-5000`} >
                {text}
                <span className={`h-0.5 w-0 bg-gradient-to-r from-red-700 to-orange-600
                                absolute bottom-0 left-0  hover-child `}>
                    &nbsp;
                </span>
            </NavLink>
        </>
    )
}
function NavBar() {
    const [isAnimating, setAnimating] = useState(0)
    return (
        <>
            <header className="bigScreen ">
                <div className="flex justify-between py-2 lg:px-40 md:px-2">
                    <img src={logo} alt="" />
                    <div className='flex items-center'>
                        <CustomLink text="Browse Food" to="#" />
                        <CustomLink text="Download App" to="#" />
                        <CustomLink text="About Us" to="#" />
                    </div>
                    <div className="flex items-center  text-white text-2xl gap-5  ">
                        <BsFillBasket2Fill className='cursor-pointer ' />
                        <div className="trigger relative ">
                            <BsPerson className=' cursor-pointer' />
                            <ul className='target  text-lg bg-gray-800 w-48 absolute top-10 -right-20 z'>

                                <li className='flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <BiKey className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Login</div>
                                </li>
                                <li className='flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <FaRegHandPointRight className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Register</div>
                                </li>
                                <li className='flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <BsPerson className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Account</div>
                                </li>
                                <li className='flex cursor-pointer py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <HiOutlineLockClosed className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > LogOut</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {/* ****** screen 768px ****** */}
            <header className="smallScreen ">
                <div className="flex justify-between py-4  px-4 ">
                    <img src={logo} alt="" />

                    <div className="flex items-center  text-white text-2xl gap-5  ">
                        <BsFillBasket2Fill className='cursor-pointer' />
                        <div className="trigger relative">
                            <BsPerson className='trigger cursor-pointer' />
                            <div className='target  text-lg bg-gray-800 w-48 absolute top-10 -right-0  '>

                                <div className='flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <BiKey className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Login</div>
                                </div>
                                <div className='flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <FaRegHandPointRight className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Register</div>
                                </div>
                                <div className='flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <BsPerson className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > Account</div>
                                </div>
                                <div className='flex py-4 hover-trigger hover:bg-gradient-to-l from-orange-500 to-pink-500 border-b border-gray-600'>
                                    <HiOutlineLockClosed className='  ps-2 text-3xl mr-3' />
                                    <div className="hover-target" > LogOut</div>
                                </div>
                            </div>
                        </div>
                        <FaBars  onClick={() => setAnimating(0)}/>
                    </div>
                </div>
            </header>
            <motion.div className='screenLinks '
                initial={{ y:"0"  }} 
                animate={{ y: isAnimating }} 
                transition={{duration:0.5 ,type :"tween"}}>
                <div  className='w-full h-screen relative  flex flex-col justify-center items-center links'>
                    <AiOutlineClose className='absolute top-10 right-10 text-2xl text-white'
                        onClick={() => setAnimating("100vh")} />
                    <img src={logoSmall}alt="" className='my-5' />
                    <div className=' flex flex-col justify-center items-center my-5'>
                        <NavLink href="#" onClick={() => setAnimating("100%")}
                                className=' my-4 font-bold text-2xl text-white'>Browse Food</NavLink>
                        <NavLink href="#" onClick={() => setAnimating("100%")}
                                className=' my-4 font-bold text-2xl text-white'>Download App</NavLink>
                        <NavLink href="#" onClick={() => setAnimating("100%")}
                                className=' my-4 font-bold text-2xl text-white'>About Us</NavLink>
                    </div>
                    <p className=' font-bold text-md text-white' > +1 631 123 4567</p>
                    <p className=' font-bold text-md text-white' > email@website.com</p>
                    <div className='my-5 flex gap-5'>
                        <FaFacebookF className='text-white cursor-pointer' />
                        <FaXTwitter className='text-white cursor-pointer' />
                        <FaYoutube className='text-white cursor-pointer' />
                        <AiFillInstagram className='text-white cursor-pointer' />
                    </div>
                    <p className='flex gap-2 text-white p-5 justify-center border-b-2'>
                        <BsFillCCircleFill />
                        2023 MegaOne. Made With <br />
                        .. Tamer Fouad Beshara ..
                    </p>

                </div>

            </motion.div>
        </>
    )
}
export default NavBar;