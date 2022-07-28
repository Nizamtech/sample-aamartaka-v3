import React from 'react';
import homeStyle from "../../../styles/Bannar.module.css";

const Desktop_Bannar = () => {
    return (
        <div className={`${homeStyle.bgContainer} lg:block md:block sm:flex items-center `}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="lg:w-2/5 md:w-2/5 w-full text-white lg:text-left md:text-left text-center lg:pl-20 pl-0">
                    <h1 className="text-6xl font-bold">Welcome to Our Website</h1>
                    <h5 className="text-lg lg:mb-10 md:mb-8 mb-2 mt-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae magnam et, velit quaerat eos. Animi non perferendis ipsam maiores!</h5>
                    <button className="grow_skew_forward border border-orange-600 bg-orange-600 hover:bg-white text-white hover:text-orange-600 duration-1000 px-5 py-2.5 rounded-md text-lg tracking-widest font-semibold overflow-hidden z-50 relative btn">Get Started</button>
                </div>
                <div className="lg:w-3/5 md:w-3/5 w-full lg:block md:block hidden">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1658921799/Office/Bannar_Image_fa51i4.png" alt="BannarImage" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Desktop_Bannar;