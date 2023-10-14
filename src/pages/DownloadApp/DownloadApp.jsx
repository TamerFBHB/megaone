import React from 'react';
import "./DownloadApp.css"
import App from "../../images/app1.png"
import GoogleApp from "../../images/app2.png"


const DownloadApp = ({VDownloadApp}) => {
    return (
        <div className='bg-black md:px-4 lg:px-40 py-10' ref={VDownloadApp}>
            <div className='flex flex-col items-center ' >
                <h2 className='Basic '>Better experience on obile ordering.</h2>
                <h1 className='download md:w-3/4 lg:w-3/5'>download our latest app from mobile stores.</h1>
            </div>
            <div className='flex flex-wrap justify-center md:gap-10 lg:gap-32 my-20 mx-auto'>
                <div className='cursor-pointer parentApp flex basis-52 flex-col items-center'>
                    <img src={App} alt='' className='app duration-500' />
                    <p className='my-10 text-white text-xl duration-500'>Ios App Stotre</p>
                </div>
                <div className='cursor-pointer parentApp flex basis-52 flex-col items-center'>
                    <img src={GoogleApp} alt=''  className='app duration-500'/>
                    <p className='my-10 text-white text-xl duration-500'>Google App Stotre</p>
                </div>
                
            </div>
            
        </div>
    );
}

export default DownloadApp;
