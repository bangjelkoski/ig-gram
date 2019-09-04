import styled from 'styled-components';
import { above, logoFont, flex } from 'styles';
import { boxShadows } from 'styles';

const Header = styled.header`
    background: ${({ theme }) => theme.headerBackground};
    border-bottom: 2px solid ${({ theme }) => theme.grey[300]};
    position: fixed;
    height: 3rem;
    width: 100%;
    box-shadow: ${boxShadows['sm']};

    ${flex.horizontal};
    ${flex.centerHorizontalV};
`;

const HeaderInner = styled.div`
    padding: 0 0.5rem;
    margin: 0 auto;
    width: 100%;

    ${flex.horizontal};
    ${flex.centerHorizontalV};
    ${flex.spaceBetween};

    ${above['md']`
        width: 75%;
    `}

    ${above['lg']`
        width: 60%;
    `}
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary[700]};
    cursor: pointer;
    width: 25%;
    ${flex.horizontal}
    ${flex.centerHorizontalV}
`;

const Brand = styled.span`
    ${logoFont}
    border-left: 1px solid ${({ theme }) => theme.grey[700]};
    padding-left: 1.5rem;
    font-size: 1.75rem;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.logo.text};
`;

Header.HeaderInner = HeaderInner;
Header.Logo = Logo;
Header.Logo.Brand = Brand;

export default Header;
