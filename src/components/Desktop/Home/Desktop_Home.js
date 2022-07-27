import React from 'react';
import Company_Status from '../CompanyStatus/Company_Status';
import Desktop_Bannar from '../Desktop_Bannar/Desktop_Bannar';
import Others_Bank from '../Others_Bank/Others_Bank';
import Submitted_Files from '../Submitted_Files/Submitted_Files';


const Desktop_Home = () => {
    return (
        <>
            {/* <Dashboard /> */}
            <Desktop_Bannar />
            <Company_Status />
            <Submitted_Files />
            <Others_Bank />
            {/* <About />
            <Pictiure />
            <States />
            <User /> */}
        </>
    );
};

export default Desktop_Home;