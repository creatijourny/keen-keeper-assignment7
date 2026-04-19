import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdCall } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { GiVideoCamera } from 'react-icons/gi';

const Timeline = () => {
    const { callFriend } = useContext(FriendContext);
    // console.log(callFriend);
    const { textFriend } = useContext(FriendContext);    
    const { videoCall } = useContext(FriendContext);    

    return (
        <div className='container mx-auto my-10 space-y-5'>
            {
                callFriend.map((friend, ind) => {
                    return (
                        <div key={ind} className='flex gap-4 items-center shadow-sm p-4 rounded-md bg-white'>
                            <MdCall className='text-4xl'/>
                            <div>
                                <h3><span className='font-bold'>Call</span> with {friend.name}</h3>
                                <p>{(() => new Date().toDateString())()}</p>
                            </div>


                        </div>
                    )
                })
            }
            {
                textFriend.map((friend, ind) => {
                    return (
                        <div key={ind} className='flex gap-4 items-center shadow-sm p-4 rounded-md bg-white'>
                            <AiOutlineMessage className='text-4xl'/>
                            <div>
                                <h3><span className='font-bold'>Text</span> with {friend.name}</h3>
                                <p>{(() => new Date().toDateString())()}</p>
                            </div>


                        </div>
                    )
                })
            }
            {
                videoCall.map((friend, ind) => {
                    return (
                        <div key={ind} className='flex gap-4 items-center shadow-sm p-4 rounded-md bg-white'>
                            <GiVideoCamera className='text-3xl'/>
                            <div>
                                <h3><span className='font-bold'>Video</span> with {friend.name}</h3>
                                <p>{(() => new Date().toDateString())()}</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    );
};

export default Timeline;