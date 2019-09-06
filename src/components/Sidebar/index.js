import React, { Component } from 'react';
import User from 'components/User';
import Card from 'components/Card';
import Suggestion from './Suggestion';
import users from 'data/users';
import user from 'data/user';
import Sticky from 'react-stickynode';
import { isMobile } from 'react-device-detect';
import { randomize } from 'utils/random';

class Sidebar extends Component {
    /**
     * Prevent the component to update on theme
     * change, because we dont want to get new
     * data but the keep the old one
     */
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const suggestions = randomize(users);

        return (
            <Sticky enabled={!isMobile} top={70}>
                <User {...user} />
                <Card>
                    {suggestions &&
                        suggestions.length &&
                        suggestions.map(suggestion => (
                            <Suggestion key={`suggestion-${suggestion.id}`} {...suggestion} />
                        ))}
                </Card>
            </Sticky>
        );
    }
}

export default Sidebar;
