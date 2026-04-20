import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
        <div className='bg-[#FFFFFF] shadow-sm'>
            <nav className='container mx-auto flex flex-col md:flex-row md:justify-between items-center'>
                <div>
                    <h2 className='text-3xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>
                </div>
                <ul className='flex justify-between gap-1 items-center my-2'>
                    <li>                       
                        <MyNavLink to={"/"}><HiOutlineHome />Home</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={"/timeline"} ><IoMdTime />Timeline</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={"/stats"} ><FaChartLine />Stats</MyNavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;