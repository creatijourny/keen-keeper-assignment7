import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `${isActive ? "bg-green-800 text-white" : ""} flex gap-1 p-2 justify-between items-center text-lg font-semibold`}>            
            {children}</NavLink>
    );
};

export default MyNavLink;