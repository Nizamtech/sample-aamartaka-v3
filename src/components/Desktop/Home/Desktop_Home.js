import React from 'react';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Pictiure from '../Picture/Pictiure';
import States from '../States/States';
import User from '../User/User';

const Desktop_Home = () => {
    return (
        <>
            <Dashboard />
            <About />
            <Pictiure />
            <States />
            <User />
        </>
    );
};

export default Desktop_Home;