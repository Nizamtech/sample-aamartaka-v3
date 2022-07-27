import React from 'react';
import { Image } from 'next/image';
import statusStyle from "../../../styles/CompanyStatus.module.css";
import Link from 'next/link';

const Company_Status = () => {
    const data = [
        {
            "image": "https://i.ibb.co/QdPPdGN/icons8-statistic-64.png",
            "head": "Lead Section",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
        {
            "image": "https://i.ibb.co/8j1pHjn/icons8-signal-64.png",
            "head": "Sales Plans",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
        {
            "image": "https://i.ibb.co/VB2X2xB/icons8-company-96.png",
            "head": "Company Status",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
        {
            "image": "https://i.ibb.co/zHwnrsw/icons8-visit-80.png",
            "head": "Visited Company",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
        {
            "image": "https://i.ibb.co/bHvMPpL/icons8-digital-learning-66.png",
            "head": "Learning Section",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
        {
            "image": "https://i.ibb.co/WDRTzYw/icons8-privacy-policy-64.png",
            "head": "New Policy",
            "subHead": "Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem.",
            "link": ""
        },
    ]
    return (
        <div className={`${statusStyle?.statusBackground} py-10`}>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 container mx-auto">
                {data.map((item, index) =>
                    <>
                        <div key={index} className="bg-[#015FDF] hover:bg-[#0346a5] duration-300 p-5 rounded-lg">
                            <div className="flex items-center">
                                <img src={item?.image} alt="LeadImage" className="w-20" />
                                <h5 className="text-3xl font-semibold text-white ml-5">{item?.head}</h5>
                            </div>
                            <div className="px-4 mb-1">
                                <p className="text-gray-300 mb-4 lg:block hidden">{item?.subHead}</p>
                                <Link href="/">
                                    <a className="border hover:border-orange-500 hover:bg-orange-500 duration-300 text-white py-2 lg:w-1/3 w-full rounded-md block text-center">View More</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Company_Status;