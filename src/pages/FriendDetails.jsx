import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineArchive } from 'react-icons/hi';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../context/FriendContext';



const FriendDetails = () => {

  const { id } = useParams();
  // console.log(friendId, "friendId");
  // console.log(friends, loading);
  const friends = useLoaderData();

  const seekFriend = friends.find(friend => friend.id == id);
  // console.log(seekFriend);
  const { name, picture, email, day_since_contact,
    status, tags, bio, goal, next_due_date } = seekFriend;

    const {handleCallAFriend} = useContext(FriendContext);
    const {handleTextAFriend} = useContext(FriendContext);
    const {handleVideoCall} = useContext(FriendContext);

    // console.log(handleCallAFriend, callFriend, "handleCallAFriend");
    
  return (
    <div className="card lg:card-side container mx-auto shadow-sm flex justify-between items-center gap-3 mt-5">
      <div className='w-full p-8'>
        <div className='bg-white'>
          <figure className='flex justify-center'>
            <img
              src={picture}
              alt={name}
              className='h-[200px] w-auto' />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">{name}</h2>
            <div className={`badge text-white font-semibold ${status === "overdue"
              ? "bg-red-500"
              : status === "almost-due"
                ? "bg-yellow-500"
                : "bg-green-600"
              }`}>{status}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, ind) =>
                (<div key={ind} className="badge bg-green-100 font-semibold text-green-800">{tag}</div>)
              )}
            </div>
            <p>{bio}</p>
            <p>Preferred {email}</p>
          </div>
          <div className='px-7 space-y-4'>
            <button className='btn w-full bg-[#FFFFFF]'><HiOutlineBellSnooze className='text-xl'/> Snooze 2 Weeks</button>
            <button className='btn w-full bg-[#FFFFFF]'><HiOutlineArchive className='text-xl'/> Archive</button>
            <button className='btn w-full bg-[#FFFFFF] text-red-500'><RiDeleteBin6Line className='text-xl'/> Delete</button>
          </div>
        </div>
      </div>
      <div className='w-full px-8'>
        <div className='flex justify-between gap-4 mb-10'>
          <div className='bg-[#FFFFFF] shadow w-[200px] min-h-[100px] flex flex-col items-center justify-center'>
            <h3 className='text-xl font-bold'>{day_since_contact}</h3>
            <p>Day Since Contact</p>
          </div>
          <div className='bg-[#FFFFFF] shadow w-[200px] min-h-[100px] flex flex-col items-center justify-center'>
            <h3 className='text-xl font-bold'>{goal}</h3>
            <p>Goal (Days)</p>
          </div>
          <div className='bg-[#FFFFFF] shadow w-[200px] min-h-[100px] flex flex-col items-center justify-center'>
            <h3 className='text-xl font-bold'>{next_due_date}</h3>
            <p>Next Due Date</p>
          </div>
        </div>
        <div className='flex justify-between items-center bg-[#FFFFFF] shadow-sm w-full h-[80px] p-5'>
          <div>
            <h3 className='text-2xl font-semibold text-green-700'>Relationship Goal</h3>
            <p>Connect every <span className='font-bold'>{goal} days</span></p>
          </div>
          <button className='btn px-4'>Edit</button>
        </div>
        <div className='mt-8 bg-white shadow-sm p-8'>
          <h3 className='mb-3'>Quick Check-In</h3>
          <div className='flex justify-between items-center gap-5'>
            <div>
              <button onClick={()=> handleCallAFriend(seekFriend)} className='btn px-20 py-10 flex flex-col items-center justify-center gap-1'><FiPhoneCall className='text-xl shrink-0' /><span>Call</span></button>
            </div>
            <div>
              <button onClick={()=> handleTextAFriend(seekFriend)} className='btn px-20 py-10 flex flex-col items-center justify-center gap-1'><MdOutlineTextsms className='text-xl shrink-0' /><span>Text</span></button>
            </div>
            <div>
              <button onClick={()=> handleVideoCall(seekFriend)} className='btn px-20 py-10 flex flex-col items-center justify-center gap-1'><MdOutlineVideocam className='text-2xl shrink-0' /><span>Video</span></button>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default FriendDetails;