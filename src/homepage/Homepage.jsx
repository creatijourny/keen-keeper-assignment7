import React from 'react';
import Banner from '../components/Homepage/Banner';
import YourFriends from '../components/Homepage/YourFriends';
// import { FriendContext } from '../context/FriendContext';


const Homepage = () => {
    // const frndContext = useContext(FriendContext);
    //     console.log(frndContext, "frndContext");
   
    return (
        <>
            <Banner />
            <YourFriends />
        </>
    );
};

export default Homepage;