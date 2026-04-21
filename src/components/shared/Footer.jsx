import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] border-t pt-5 pb-5">
            <div className="w-full mx-auto">
                <div>
                    <div className="flex flex-col justify-center items-center gap-3">

                        <h2 className="text-4xl font-bold tracking-tighter text-white">
                            KeenKeeper
                        </h2>
                    </div>
                    <p className='text-center text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-[#FFFFFF] font-semibold mb-2 text-center text-lg">Social Links</h3>
                    <div className="flex justify-center items-center gap-6 text-3xl text-white">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>

                {/* Copyright info */}
                <div className="mt-8 pt-4 border-t border-zinc-600 flex flex-col md:flex-row items-center justify-center gap-10 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</div>
                    <div className='flex justify-between gap-3 px-2'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;