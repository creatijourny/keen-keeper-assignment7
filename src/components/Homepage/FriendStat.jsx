import React from 'react';

const FriendStat = () => {
    return (
        // Banner cards
        
            <div className="container mx-auto px-4 pt-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                        <h2 className="text-3xl font-bold text-green-800">10</h2>
                        <p className="text-gray-600 mt-2">Total Friends</p>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                        <h2 className="text-3xl font-bold text-green-800">3</h2>
                        <p className="text-gray-600 mt-2">On Track</p>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                        <h2 className="text-3xl font-bold text-green-900">6</h2>
                        <p className="text-gray-600 mt-2">Need Attention</p>
                    </div>
                    <div className="bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-100 p-8 text-center">        <h2 className="text-3xl font-bold text-green-800">12</h2>
                        <p className="text-gray-600 mt-2">Interactions This Month</p>
                    </div>
                </div>
            </div>
        
    );
};

export default FriendStat;