import React from 'react';
import Hr_style from '../../Shared/HrStyle/Hr_style';
import bankStyle from "../../../styles/submittedFile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPaperPlane, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

const Others_Bank = () => {
    const data = [
        { "name": "In Progress", "count": 23, "icon": "progress" },
        { "name": "Send Query", "count": 15, "icon": "query" },
        { "name": "Decline", "count": 30, "icon": "decline" },
        { "name": "Approved", "count": 40, "icon": "approved" },
    ]

    return (
        <div className="container mx-auto pb-10 ">
            <h2 className="text-3xl text-left text-[#0B0B6A] font-semibold">Others bank</h2>
            <Hr_style />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {data?.map(item =>
                    <>
                        <div className={`${bankStyle.singleCard} cursor-pointer`}>
                            <div className={`${bankStyle.bigCircle} -mb-24 border shadow-2xl text-center flex items-center justify-center w-44 h-44 mx-auto rounded-full`}>
                                <h2 className={`bg-[#015FDF] text-white text-center h-32 w-32 rounded-full flex items-center justify-center text-5xl font-semibold border border-[#015FDF]`}>{item?.count}</h2>
                            </div>
                            <div className="border rounded-md w-full pt-28 shadow-2xl">
                                <div className={`${bankStyle.cardHead} py-5 text-center bg-[#015FDF] text-white rounded-b-md text-xl font-semibold border border-[#015FDF] items-center`}>
                                    {/* Rendering Icon Conditionally */}
                                    {item?.icon === "progress" && <FontAwesomeIcon icon={faSpinner} className={`w-12 h-12 mx-auto text-white mb-2`} />}
                                    {item?.icon === "query" && <FontAwesomeIcon icon={faPaperPlane} className={`w-12 h-12 mx-auto text-white mb-2`} />}
                                    {item?.icon === "decline" && <FontAwesomeIcon icon={faXmark} className={`w-12 h-12 mx-auto text-white mb-2`} />}
                                    {item?.icon === "approved" && <FontAwesomeIcon icon={faCheck} className={`w-12 h-12 mx-auto text-white mb-2`} />}
                                    <h2 className={`${bankStyle.cardHead} text-xl font-semibold border border-[#015FDF]`}>{item?.name}</h2>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Others_Bank;