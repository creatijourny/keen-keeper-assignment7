import React from 'react';
import { useParams } from 'react-router';


const FriendDetails = () => {
    const params = useParams();
    console.log(params, "params");

    return (
        <div>
            Friend details page
        </div>
    );
};

export default FriendDetails;