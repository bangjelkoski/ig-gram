import React from 'react';
import Logo from './logo';
import { Header, HeaderInner } from './styles';

const HeaderComponent = function(props) {
    return (
        <Header>
            <HeaderInner>
                <Logo />
            </HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
