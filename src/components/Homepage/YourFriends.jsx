import React from 'react';
import FriendsCard from '../ui/FriendsCard';
import { PulseLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';


const YourFriends = () => {
    const {friends, loading} = useFriends();
    
    // console.log(friends, loading);

    return (
        <div className='container mx-auto my-[60px]'>
            <h2 className='text-3xl font-semibold text-[#1F2937] mb-5'>Your Friends</h2>
            
            {loading ? (<div className='flex justify-center items-center'><PulseLoader color="#0d6a32"/></div>) 
            : (<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                friends.map((friend, index) => {
                    return (
                      <FriendsCard friend={friend} key={index}/>
                    )
                })
            }
            </div>)}
            
        </div>

    );
};

export default YourFriends;