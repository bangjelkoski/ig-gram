import React from 'react';
import CardWrap from './styles';

const Card = function(props) {
    return <CardWrap marginless={props.marginless ? true : false}>{props.children}</CardWrap>;
};

export default Card;
