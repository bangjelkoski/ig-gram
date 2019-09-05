import styled from 'styled-components';
import { transitions } from 'styles';

const IconStyle = styled.div`
    svg {
        width: 2rem;
        height: 2rem;
        margin-left: 0.5rem;
        display: flex;
        cursor: pointer;

        path {
            fill: ${({ theme }) => theme.logo.icon};
            ${transitions.fill}
        }
    }

    &:hover {
        svg {
            path {
                fill: ${({ theme }) => theme.primary[500]};
            }
        }
    }
`;

export default IconStyle;
