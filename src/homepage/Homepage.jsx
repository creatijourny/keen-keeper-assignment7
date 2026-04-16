import React from 'react';
import Banner from '../components/Homepage/Banner';
import YourFriends from '../components/Homepage/YourFriends';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    const data = useLoaderData();
    console.log(data, "data from homepage");
    return (
        <>
            <Banner />
            <YourFriends />
        </>
    );
};

export default Homepage;