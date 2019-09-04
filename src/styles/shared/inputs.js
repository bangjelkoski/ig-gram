import styled from 'styled-components';
import { boxShadows, transitions, transition } from 'styles';

const InputWrap = styled.div`
    margin-bottom: ${props => (props.marginless ? '0' : '1rem')};
`;

const TextInput = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.grey[300]};
    height: ${props => (props.size && props.size === 'small' ? '2rem' : '2rem')};
    border-radius: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 2rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.grey[700]};
    outline: none;
    appearance: none;
    ${boxShadows['md']}

    &:focus {
        border: 1px solid ${({ theme }) => theme.primary[500]};
    }

    &::placeholder {
        color: ${({ theme }) => theme.grey[700]};
        opacity: 0.75;
    }
`;

const InvertedTextInput = styled(TextInput)`
    background: ${({ theme }) => theme.inputs.inverted.background};
    color: ${({ theme }) => theme.inputs.inverted.textColor};
    border: 1px solid ${({ theme }) => theme.inputs.inverted.border};
    ${transition('background-color', 'color', 'border')};

    &::placeholder {
        color: ${({ theme }) => theme.inputs.inverted.textColor};
        opacity: 0.75;
        ${transitions.color}
    }
`;

export { InputWrap, TextInput, InvertedTextInput };
