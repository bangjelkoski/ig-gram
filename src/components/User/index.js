import React from 'react';
import UserWrap from './styles';

const User = function({ image, username, first_name, last_name, marginless }) {
    return (
        <UserWrap marginless={marginless}>
            <UserWrap.Avatar src={image} alt={username}></UserWrap.Avatar>
            <UserWrap.Data>
                <h2>{username}</h2>
                <p>{`${first_name} ${last_name}`}</p>
            </UserWrap.Data>
        </UserWrap>
    );
};

export default User;
