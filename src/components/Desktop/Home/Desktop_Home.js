import React from 'react';
import About from '../About/About';
import Company_Status from '../CompanyStatus/Company_Status';
import Dashboard from '../Dashboard/Dashboard';
import Others_Bank from '../Others_Bank/Others_Bank';
import Pictiure from '../Picture/Pictiure';
import States from '../States/States';
import Submitted_Files from '../Submitted_Files/Submitted_Files';
import User from '../User/User';

const Desktop_Home = () => {
    return (
        <>
            {/* <Dashboard /> */}
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