import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/FriendContext";

const Stats = () => {

    const { callFriend, textFriend, videoCall } = useContext(FriendContext);

    const data = [
        { name: "call", value: callFriend.length, fill: "#0058FF" },
        { name: "text", value: textFriend.length, fill: "#09FF88" },
        { name: "video", value: videoCall.length, fill: "#EF8444" },
    ];
    if(callFriend.length === 0 && 
        textFriend.length === 0 && 
        videoCall.length === 0)
        {
        return (
        <div>
            <h2 className="text-4xl font-bold text-orange-500 text-center my-10">No data available for analytics</h2>
        </div>
        );
    }

    

    return (
        <div className="container mx-auto border border-slate-200 shadow p-10 rounded-md my-10">
            <h2 className="text-3xl font-bold mb-5">Friendship Analytics</h2>
            <p className="text-xl">By Interaction Type</p>
             <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>        
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}        
      />
      <Tooltip />      
       <Legend />        
      
    </PieChart>
        </div>
    );
};

export default Stats;