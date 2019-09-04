import React from 'react';
import styled from 'styled-components';

const ToggleWrap = styled.div`
    .label-left {
        &:empty {
            margin-left: -10px;
        }

        &:before,
        &:after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            transition: 0.5s ease-in-out;
            outline: none;
        }

        &:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            line-height: 34px;
            text-indent: 40px;
            height: 1.25rem;
            width: 1.25rem;
            margin: 4px;
            border-radius: 100%;
            right: 30px;
            bottom: 0px;
            background: ${({ theme }) => theme.warning[500]};
            transform: rotate(-45deg);
            box-shadow: 0 0 10px ${({ theme }) => theme.warning[400]};
        }

        &:after {
            content: '';
            display: inline-block;
            height: 1.75rem;
            width: 3rem;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.15);
            vertical-align: middle;
            margin: 0 10px;
            border: 1px solid ${({ theme }) => theme.warning[600]};
        }
    }

    input[type='checkbox'],
    input[type='checkbox']:active {
        position: absolute;
        top: -5000px;
        height: 0;
        width: 0;
        opacity: 0;
        border: none;
        outline: none;

        &:active {
            position: absolute;
            top: -5000px;
            height: 0;
            width: 0;
            opacity: 0;
            border: none;
            outline: none;
        }

        &:checked {
            & + .label-left {
                color: rgba(149, 149, 149, 0.51);
                font-weight: normal;

                &:before {
                    right: 18px;
                    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.grey[200]};
                    background: transparent;
                }

                &:after {
                    background: rgba(0, 0, 0, 0.15);
                    border: 1px solid ${({ theme }) => theme.grey[100]};
                }
            }

            & + .label-left + .label {
                color: rgba(250, 250, 250, 0.51);
                font-weight: bold;
            }
        }

        & + .label-left {
            color: rgba(250, 250, 250, 0.51);
            font-weight: bold;
        }
    }

    label {
        display: inline-block;
        position: relative;
        padding: 0px;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
        color: rgba(149, 149, 149, 0.51);
        font-weight: normal;
    }
`;

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
