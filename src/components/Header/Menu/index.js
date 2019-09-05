import React from 'react';
import Toggle from './Toggle';
import ProfileIcon from './ProfileIcon';
import { UserWrap } from './styles';

const User = function(props) {
    return (
        <UserWrap>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
            <ProfileIcon />
        </UserWrap>
    );
};

export default User;
