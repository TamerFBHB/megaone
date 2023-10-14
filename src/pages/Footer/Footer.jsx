import React from 'react';
import {
    FaFacebookF,
    FaInstagramSquare,
    FaLinkedinIn,
    FaTwitter,
    } from "react-icons/fa";
    import "./footer.css"

const Footer = () => {
    return (
        <div className='lolo '>
            <div className="flex items-center justify-center  gap-10">
                <FaFacebookF className="text-white text-1xl cursor-pointer hover:scale-150 duration-500" />
                <FaTwitter className="text-white text-1xl cursor-pointer hover:scale-150 duration-500" />
                <FaLinkedinIn className="text-white text-1xl cursor-pointer hover:scale-150 duration-500" />
                <FaInstagramSquare className="text-white text-1xl cursor-pointer hover:scale-150 duration-500" />
            </div>
            <div>
                <p className='text-center text-white my-10'>© 2023 MegaOne. Made With Love By Themesindustry</p>
            </div>
        </div>
    );
}

export default Footer;
