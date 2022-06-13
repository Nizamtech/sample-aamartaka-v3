import React from 'react';
import Attendance from '../../components/Mobile/Attendance/Attendance';
import { useRouter } from "next/router";
const Attend= ({isMobile}) => {
    const router = useRouter();
    const details = router.query.attend;

    return (
        <div>{isMobile ? <Attendance attend={details} /> : <Attendance attend={details} />}</div>
    );
};

export default Attend;