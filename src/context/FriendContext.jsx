import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {
     const [callFriend, setCallFriend] = useState([]);
     const [textFriend, setTextFriend] = useState([]);
     const [videoCall, setVideoCall] = useState([]);
    
    const handleCallAFriend = (currentFriend) => {
      
      const isCalled = callFriend.find((friend) => friend.id === currentFriend.id);
      if(isCalled){
        toast.error("This friend is already called");
        
      } else {
        setCallFriend([...callFriend, currentFriend])
        toast.success(`${currentFriend.name} is called, added in timeline`);
      }
      console.log(currentFriend, callFriend, "currentFriend");
    };

     const handleTextAFriend = (currentFriend) => {      
        textFriend.find((friend) => friend.id === currentFriend.id);
        setTextFriend([...textFriend, currentFriend]);      
        toast.success(`${currentFriend.name} is texted, added in timeline`);
        };
     const handleVideoCall = (currentFriend) => {      
        videoCall.find((friend) => friend.id === currentFriend.id);
        setVideoCall([...videoCall, currentFriend])      
        toast.success(`Video with ${currentFriend.name}`);
        };

    const data = {
        callFriend,
        setCallFriend,
        handleCallAFriend,
        textFriend,
        setTextFriend,
        handleTextAFriend,
        videoCall,
        setVideoCall,
        handleVideoCall,
    };

    return <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
};

export default FriendProvider;