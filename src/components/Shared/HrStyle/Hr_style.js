import React from 'react';
import hrStyles from "../../../styles/HrStyle.module.css";
const Hr_style = () => {
    return (
        <>
            <div className="relative">
                <div className={`${hrStyles?.skills}`}>
                    <hr className={`${hrStyles?.hrText}`} />
                </div>
            </div>
        </>
    );
};

export default Hr_style;