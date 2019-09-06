import styled from 'styled-components';
import { transitions } from 'styles';

const HeartWrap = styled.div`
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.25rem;
        user-select: none;
        cursor: pointer;

        path {
            fill: ${({ theme, active }) => (active ? theme.danger[500] : theme.textColor)};
            ${transitions['fill']}
        }
    }

    &:hover {
        svg {
            path {
                fill: ${({ theme, active }) => (active ? theme.danger[700] : theme.danger[500])};
            }
        }
    }
`;

export default HeartWrap;
