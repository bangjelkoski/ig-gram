import React from 'react';
import CommentWrap from './styles';

const Comment = function({ user: { username }, comment }) {
    return (
        <CommentWrap>
            <h4>{username}</h4>
            <p>{comment.comment}</p>
        </CommentWrap>
    );
};

export default Comment;
