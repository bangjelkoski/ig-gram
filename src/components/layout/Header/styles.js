import styled from 'styled-components';
import { above, logoFont, flex } from 'styles';
import { boxShadows } from 'styles';

const Header = styled.header`
    background: ${({ theme }) => theme.headerBackground};
    border-bottom: 1px solid ${({ theme }) => theme.grey[300]};
    position: fixed;
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    box-shadow: ${boxShadows['sm']};
`;

const HeaderInner = styled.div`
    margin: 0 auto;
    width: 100%;

    ${above['md']`
        width: 90%;
    `}

    ${above['lg']`
        width: 75%;
    `}
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary[700]};
    cursor: pointer;
    ${flex.horizontal}
    ${flex.centerHorizontalV}

    svg {
        width: 2.25rem;
        height: 2.25rem;
        padding-right: 2rem;

        path {
            fill: ${({ theme }) => theme.logo.icon};
        }
    }

    span {
        border-left: 1px solid ${({ theme }) => theme.grey[700]};
        padding-left: 2rem;
        font-size: 1.75rem;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.logo.text};
        ${logoFont}
    }
`;

export { Header, HeaderInner, Logo };
