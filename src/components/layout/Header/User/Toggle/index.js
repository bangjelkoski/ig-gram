import React from 'react';
import { ToggleWrap } from './styles';

const Toggle = function(props) {
    return (
        <ToggleWrap>
            <input
                type="checkbox"
                id="theme-toggle"
                defaultChecked={props.theme !== 'light'}
                onChange={props.toggleTheme}
            />
            <label htmlFor="theme-toggle" className="label-left"></label>
            <label htmlFor="theme-toggle" className="label"></label>
        </ToggleWrap>
    );
};

export default Toggle;
