import React from 'react';
import User from './User';
import Card from 'components/Card';
import Suggestion from './Suggestion';
import suggestions from 'data/suggestions';

const Sidebar = function(props) {
    return (
        <div>
            <User />
            <Card>
                {suggestions &&
                    suggestions.length &&
                    suggestions.map(suggestion => (
                        <Suggestion key={`suggestion-${suggestion.username}`} {...suggestion} />
                    ))}
            </Card>
        </div>
    );
};

export default Sidebar;
