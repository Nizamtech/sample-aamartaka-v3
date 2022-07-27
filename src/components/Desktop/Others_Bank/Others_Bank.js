import React from 'react';
import Hr_style from '../../Shared/HrStyle/Hr_style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankStyle from "../../../styles/submittedFile.module.css";
import { faSpinner, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Others_Bank = () => {
    const data = [
        { "name": "In Progress", "count": 23, "icon": "progress" },
        { "name": "Send Query", "count": 15, "icon": "query" },
        { "name": "Decline", "count": 30, "icon": "decline" },
        { "name": "Approved", "count": 40, "icon": "approved" },
    ]

    return (
        <div className="container mx-auto pb-10 ">
            <h2 className="text-3xl text-left text-orange-600 font-semibold">Others bank</h2>
            <Hr_style />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {data.map(item =>
                    <>
                        <div className={`border border-[#57CEFE] rounded-md hover:rounded-sm flex items-center text-center relative ${bankStyle.progressDiv}`}>
                            {/* Rendering Icon Conditionally */}
                            <div className={`h-full py-6 w-1/2 relative bg-[#57CEFE] ${bankStyle.iconBg}`}>
                                {item.icon === "progress" && <FontAwesomeIcon icon={faSpinner} className={`w-16 h-16 mx-auto text-white ${bankStyle.icon}`} />}
                                {item.icon === "query" && <FontAwesomeIcon icon={faPaperPlane} className={`w-16 h-16 mx-auto text-white ${bankStyle.icon}`} />}
                                {item.icon === "decline" && <FontAwesomeIcon icon={faXmark} className={`w-16 h-16 mx-auto text-white ${bankStyle.icon}`} />}
                                {item.icon === "approved" && <FontAwesomeIcon icon={faCheck} className={`w-16 h-16 mx-auto text-white ${bankStyle.icon}`} />}
                            </div>
                            <div className={`py-6 text-[#57CEFE] w-1/2 ${bankStyle.textDiv}`}>
                                <h2 className="text-5xl font-semibold">{item?.count}</h2>
                                <p className="text-xl font-semibold mt-1">{item?.name}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Others_Bank;