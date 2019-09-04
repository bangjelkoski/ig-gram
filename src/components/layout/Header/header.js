import React from 'react';
import Header from './styles';
import LogoIcon from './icon';
import Search from './search';
import User from './user';

const HeaderComponent = function(props) {
    return (
        <Header>
            <Header.HeaderInner>
                <Header.Logo>
                    <LogoIcon />
                    <Header.Logo.Brand>Iggram</Header.Logo.Brand>
                </Header.Logo>
                <Search placeholder="Press '/' to search Iggram" />
                <User theme={props.theme} toggleTheme={props.toggleTheme} />
            </Header.HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
