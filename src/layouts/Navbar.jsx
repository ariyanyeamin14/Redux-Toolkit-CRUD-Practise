import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-center gap-5 text-center w-full mx-auto my-5'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/show-books'>Show Books</NavLink></li>
                <li><NavLink to='/add-books'>Add Books</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;