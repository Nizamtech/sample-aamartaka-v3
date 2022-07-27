import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Hr_style from '../../Shared/HrStyle/Hr_style';
import submitStyle from "../../../styles/submittedFile.module.css"

const Submitted_Files = () => {
    return (
        <div className="container mx-auto pb-10 ">
            <h2 className="text-3xl text-left text-orange-600 font-semibold">Submitted Files</h2>
            <Hr_style />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                <div className={`border border-[#57CEFE] rounded-md hover:rounded-sm flex items-center text-center relative ${submitStyle.progressDiv}`}>
                    <div className={`h-full py-6 w-1/2 relative bg-[#57CEFE] ${submitStyle.iconBg}`}>
                        <FontAwesomeIcon icon={faSpinner} className={`w-16 h-16 mx-auto text-white ${submitStyle.icon}`} />
                    </div>
                    <div className={`py-6 text-[#57CEFE] w-1/2 ${submitStyle.textDiv}`}>
                        <h2 className="text-5xl font-semibold">23</h2>
                        <p className="text-xl font-semibold mt-1">In Progress</p>
                    </div>
                </div>
                <div className={`border border-[#015FDF] rounded-md hover:rounded-sm flex items-center text-center relative ${submitStyle.progressDiv}`}>
                    <div className={`h-full py-6 w-1/2 relative bg-[#015FDF] ${submitStyle.iconBg}`}>
                        <FontAwesomeIcon icon={faPaperPlane} className={`w-16 h-16 mx-auto text-white ${submitStyle.icon}`} />
                    </div>
                    <div className={`py-6 text-[#015FDF] w-1/2 ${submitStyle.textDiv}`}>
                        <h2 className="text-5xl font-semibold">15</h2>
                        <p className="text-xl font-semibold mt-1">Send Query</p>
                    </div>
                </div>
                <div className={`border border-red-700 rounded-md hover:rounded-sm flex items-center text-center relative ${submitStyle.progressDiv}`}>
                    <div className={`h-full py-6 w-1/2 relative bg-red-700 ${submitStyle.iconBg}`}>
                        <FontAwesomeIcon icon={faXmark} className={`w-16 h-16 mx-auto text-white ${submitStyle.icon}`} />
                    </div>
                    <div className={`py-6 text-red-700 w-1/2 ${submitStyle.textDiv}`}>
                        <h2 className="text-5xl font-semibold">30</h2>
                        <p className="text-xl font-semibold mt-1">Decline</p>
                    </div>
                </div>
                <div className={`border border-green-600 rounded-md hover:rounded-sm flex items-center text-center relative ${submitStyle.progressDiv}`}>
                    <div className={`h-full py-6 w-1/2 relative bg-green-600 ${submitStyle.iconBg}`}>
                        <FontAwesomeIcon icon={faCheck} className={`w-16 h-16 mx-auto text-white ${submitStyle.icon}`} />
                    </div>
                    <div className={`py-6 text-green-600 w-1/2 ${submitStyle.textDiv}`}>
                        <h2 className="text-5xl font-semibold">40</h2>
                        <p className="text-xl font-semibold mt-1">Approved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submitted_Files;