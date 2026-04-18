import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm items-center">
            <figure>
                <img className='h-[160px] w-auto'
                    src={friend.picture}
                    alt={friend.name} />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">
                    {friend.name}
                </h2>
                <p>{friend.day_since_contact}d ago</p>
                <div className="flex justify-between gap-2">
                    {friend.tags.map((tag, ind) =>
                        (<div key={ind} className="badge bg-green-100 font-semibold text-green-800">{tag}</div>)
                    )}
                </div>
                <div className={`badge text-white font-semibold ${friend.status === "overdue"
                        ? "bg-red-500"
                        : friend.status === "almost-due"
                            ? "bg-yellow-500"
                            : "bg-green-600"
                    }`}>{friend.status}
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;