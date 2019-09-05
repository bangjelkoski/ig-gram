import React from 'react';
import MainWrap from './styles';
import { Row, ColThird, ColTwoThird } from 'styles';

const Main = function(props) {
    return (
        <MainWrap>
            <Row>
                <ColTwoThird>{props.content}</ColTwoThird>
                <ColThird>{props.sidebar}</ColThird>
            </Row>
        </MainWrap>
    );
};

export default Main;
