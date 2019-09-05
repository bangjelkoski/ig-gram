import styled from 'styled-components';
import { boxShadows, transition } from 'styles';

const CardWrap = styled.div`
    border-radius: 0.25rem;
    width: 100%;
    background: ${({ theme }) => theme.card.background};
    border: 1px solid ${({ theme }) => theme.card.border};
    padding: ${({ marginless }) => (!marginless ? '1rem' : 0)};
    ${boxShadows['sm']};
    ${transition('background-color', 'border-color')};
`;

export default CardWrap;
