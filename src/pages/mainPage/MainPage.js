
import React, { useRef } from "react";
import '../../index.css'
import Food from "../food/Food";
import DownloadApp from '../DownloadApp/DownloadApp';
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../../component/NavBar/NavBar";
import ScrollingButton from "../../component/ScrollButton/ScrollingButton"
import Home from "../Home/Home";

const MainPage = () => {
    
    const VFood = useRef();
    const VDownloadApp = useRef();
    const VAboutUs =useRef()

    const scrollToSection = (elementRef) =>{
        window.scrollTo({ top:elementRef.current.offsetTop,
        behavior: "smooth",})}
    return (
        <div>
            <ScrollingButton />
            <NavBar scrollToSection={scrollToSection} VFood={VFood} 
            VDownloadApp={VDownloadApp} VAboutUs={VAboutUs}/ >

            <Home />

            <Food VFood={VFood} />

            <DownloadApp  VDownloadApp={VDownloadApp}/>

            <AboutUs VAboutUs={VAboutUs}/>
        </div>
    );
}

export default MainPage;
