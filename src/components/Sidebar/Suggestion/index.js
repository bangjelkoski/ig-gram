import React from 'react';
import SuggestionWrap from './styles';

const Suggestion = function(props) {
    const { username, first_name, last_name, image } = props;

    return (
        <SuggestionWrap>
            <SuggestionWrap.Avatar src={image} alt={username}></SuggestionWrap.Avatar>
            <SuggestionWrap.Data>
                <h3>{username}</h3>
                <p>{`${first_name} ${last_name}`}</p>
            </SuggestionWrap.Data>
            <SuggestionWrap.Button>Follow</SuggestionWrap.Button>
        </SuggestionWrap>
    );
};

export default Suggestion;
