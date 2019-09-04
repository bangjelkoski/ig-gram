import React from 'react';
import Toggle from './toggle';
import styled from 'styled-components';
import { flex } from 'styles';

const UserWrap = styled.div`
    width: 25%;
    ${flex.horizontal}
    ${flex.centerHorizontalV}
    ${flex.justifyEnd}
`;

const User = function(props) {
    return (
        <UserWrap>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        </UserWrap>
    );
};

export default User;
