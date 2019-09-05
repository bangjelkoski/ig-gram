import React, { Component } from 'react';
import UserWrap from './styles';
import user from 'data/user.json';

class User extends Component {
    render() {
        return (
            <UserWrap>
                <UserWrap.Avatar src={user.image} alt={user.username}></UserWrap.Avatar>
                <UserWrap.Data>
                    <h2>{user.username}</h2>
                    <p>{`${user.first_name} ${user.last_name}`}</p>
                </UserWrap.Data>
            </UserWrap>
        );
    }
}

export default User;
