import React, { useState } from 'react';

const PostCard = ({ profilePicture, username, postContent }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="post-card">
            <div className="post-header">
                <img src={profilePicture} alt={`${username}'s profile`} className="profile-picture" />
                <span className="username">{username}</span>
            </div>
            <div className="post-content">
                <p>{postContent}</p>
            </div>
            <div className="post-actions">
                <button onClick={handleLike} className="like-button">Like</button>
                <span className="like-count">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
            </div>
        </div>
    );
};

export default PostCard;