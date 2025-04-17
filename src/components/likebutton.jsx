import React, { useState } from 'react';
import './likebutton.css';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
        >
            {liked ? 'Liked' : 'Like'}
        </button>
    );
};

export default LikeButton;