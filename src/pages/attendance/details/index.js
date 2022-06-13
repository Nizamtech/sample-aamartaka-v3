import React from 'react';
import Attendence_Details from '../../../components/Mobile/Attendance/Attendence_Details';

const index = ({isMobile}) => {
    return (
        <div>{isMobile ? <Attendence_Details/> : <Attendence_Details />}</div>
    );
};

export default index;