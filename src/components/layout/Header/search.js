import React, { Component } from 'react';
import { InvertedTextInput, InputWrap, ColHalf } from 'styles';

class SearchInput extends Component {
    searchInput = React.createRef();

    handleSearchFocus(e) {
        if (e.keyCode === 191) {
            e.preventDefault();
            this.searchInput.current.focus();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', e => this.handleSearchFocus(e));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', e => this.handleSearchFocus(e));
    }

    render() {
        return (
            <ColHalf>
                <InputWrap marginless="{true}">
                    <InvertedTextInput {...this.props} ref={this.searchInput}></InvertedTextInput>
                </InputWrap>
            </ColHalf>
        );
    }
}

export default SearchInput;
