import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdCall } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { GiVideoCamera } from 'react-icons/gi';

const Timeline = () => {
    const { callFriend, textFriend, videoCall } = useContext(FriendContext);
    // console.log(callFriend);

    const [filterType, setFilterType] = useState("All");

    const allTimeline = [
        ...callFriend.map(item => ({ ...item, type: "call" })),
        ...textFriend.map(item => ({ ...item, type: "text" })),
        ...videoCall.map(item => ({ ...item, type: "video" })),
    ];
    const getIcon = (type) => {
        if (type === "call") return <MdCall className='text-3xl' />;
        if (type === "text") return <AiOutlineMessage className='text-3xl' />;
        if (type === "video") return <GiVideoCamera className='text-3xl' />;
    }

    const filteredData =
        filterType === "All"
            ? allTimeline
            : allTimeline.filter(item => item.type === filterType);


    return (
        <div className='container mx-auto my-10 space-y-5'>
            <h2 className='text-5xl font-bold'>Timeline</h2>

            {/* fieldset label */}
            <div>
                <fieldset className="fieldset">
                    <select value={filterType} className="select"
                        onChange={(e) => setFilterType(e.target.value)}>
                        <option value={"All"}>Filter Timeline</option>
                        <option value={"call"}>Call</option>
                        <option value={"text"}>Text</option>
                        <option value={"video"}>Video</option>
                    </select>

                </fieldset>
            </div>

            <div className="space-y-4">
                {filteredData.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center p-4 shadow rounded bg-white">
                        {getIcon(item.type)}
                        <div>
                            <h3>
                                <span className="font-bold">{item.type}</span> with {item.name}
                            </h3>
                            <p>{new Date().toDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;