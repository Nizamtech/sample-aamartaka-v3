import React from 'react';
import homeStyle from "../../../styles/Bannar.module.css";

const Desktop_Bannar = () => {
    return (
        <div className={`${homeStyle.bgContainer} lg:block md:block sm:flex items-center `}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="lg:w-2/5 md:w-2/5 w-full text-white lg:text-left md:text-left text-center">
                    <h1 className="text-6xl font-bold">This is Bannar Heading</h1>
                    <h5 className="text-lg lg:mb-10 md:mb-8 mb-2 mt-3">This is Bannar Sub Heading</h5>
                    <button className="border border-orange-600 bg-white hover:bg-orange-600 text-orange-600 hover:text-white duration-300 px-5 py-2.5 rounded-md text-lg font-semibold">Get Started</button>
                </div>
                <div className="lg:w-3/5 md:w-3/5 w-full lg:pt-14 md:pt-12 pt-0 lg:block md:block hidden">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1658921799/Office/Bannar_Image_fa51i4.png" alt="BannarImage" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Desktop_Bannar;