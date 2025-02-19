import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default MainLayout;