import React from 'react';
import Attendance from '../../components/Mobile/Attendance/Attendance';

const index= ({isMobile}) => {
    return (
        <div>{isMobile ? <Attendance /> : <Attendance />}</div>
    );
};

export default index;