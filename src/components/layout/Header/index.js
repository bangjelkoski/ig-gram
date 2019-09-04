import React from 'react';
import Header from './styles';
import Logo, { BrandIcon } from './Logo';
import Search from './Search';
import User from './User';

const HeaderComponent = function(props) {
    return (
        <Header>
            <Header.HeaderInner>
                <Logo>
                    <Logo.Icon>
                        <BrandIcon />
                    </Logo.Icon>
                    <Logo.Brand>Iggram</Logo.Brand>
                </Logo>

                <Search placeholder="Press '/' to search Iggram" />

                <User theme={props.theme} toggleTheme={props.toggleTheme} />
            </Header.HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
