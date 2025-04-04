import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../actions/UserAction';

const UserFollow = ({ person }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));
    const [followerCount, setFollowerCount] = useState(person.followers.length);

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleFollow = () => {
        if (following) {
            dispatch(unFollowUser(person._id, user));
            setFollowerCount(prev => prev - 1);
        } else {
            dispatch(followUser(person._id, user));
            setFollowerCount(prev => prev + 1);
        }
        setFollowing((prev) => !prev);
    }

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture?.startsWith("data:image") ? person.profilePicture : serverPublic + "defaultProfile.png"} alt="" className='followerImg' />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>@{person.firstname} {person.lastname}</span>
                    <span>{followerCount} followers</span>
                </div>
            </div>

            <button className='button fc-button' onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default UserFollow
