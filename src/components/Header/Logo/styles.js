import styled from 'styled-components';
import { logoFont, flex, transition, transitions } from 'styles';

const Logo = styled.div`
    cursor: pointer;
    width: 25%;
    ${flex.horizontal}
    ${flex.centerHorizontalV}
`;

const Brand = styled.span`
    border-left: 1px solid ${({ theme }) => theme.logo.border};
    padding-left: 1.5rem;
    font-size: 1.75rem;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.logo.text};
    ${logoFont};
    ${transition('border-color', 'color')};
`;

const Icon = styled.div`
    svg {
        width: 2rem;
        height: 2rem;
        margin-right: 1.5rem;
        display: flex;

        path {
            fill: ${({ theme }) => theme.logo.icon};
            ${transitions.fill}
        }

        &:hover {
            path {
                fill: ${({ theme }) => theme.primary[500]};
            }
        }
    }
`;

export { Logo, Brand, Icon };
