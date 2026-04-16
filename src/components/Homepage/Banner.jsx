import React from 'react';
import FriendStat from './FriendStat';


const Banner = () => {
    return (
        <div>
            <div className="text-center space-y-5 pt-[50px]">
            <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#627382] max-w-[50%] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
                relationships that matter most.</p>
            <div className='flex justify-center gap-2'>
                <button className='btn bg-green-800 text-xl rounded p-2 text-white'>+ Add a Friend</button>
            </div>            
        </div>            
        <FriendStat />
        </div>
           
    );
};

export default Banner;