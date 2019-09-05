import styled from 'styled-components';
import { flex, below, transitions, boxShadows } from 'styles';

const SuggestionWrap = styled.div`
    margin-bottom: 1rem;
    ${flex.horizontal}
    ${flex.horizontalCenterV}

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const SuggestionAvatar = styled.img`
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
    border-radius: 100%;

    box-shadow: ${boxShadows['sm']};
    border: 1px solid ${({ theme }) => theme.border};
    ${transitions['borderColor']};

    ${below['md']`
        display: none;
    `}
`;

const SuggestionData = styled.div`
    h3 {
        font-size: 0.9rem;
        letter-spacing: -0.01em;
        margin-bottom: 0.25rem;
        padding-top: 0.25rem;
    }

    p {
        font-size: 0.7rem;
    }
`;

const SuggestionButton = styled.button`
    display: flex;
    margin-left: auto;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    font-size: 0.8rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.buttons.primary.background};
    ${transitions['color']};

    &:hover {
        color: ${({ theme }) => theme.buttons.primary.hover};
    }
`;

SuggestionWrap.Data = SuggestionData;
SuggestionWrap.Avatar = SuggestionAvatar;
SuggestionWrap.Button = SuggestionButton;

export default SuggestionWrap;
