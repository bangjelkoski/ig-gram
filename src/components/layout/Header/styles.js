import styled from 'styled-components';
import { above, flex, transition } from 'styles';
import { boxShadows } from 'styles';

const Header = styled.header`
    background: ${({ theme }) => theme.header.background};
    border-bottom: 2px solid ${({ theme }) => theme.header.borderBottom};
    position: fixed;
    height: 3rem;
    width: 100%;
    box-shadow: ${boxShadows['sm']};

    ${transition('background-color', 'border-color')};
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

Header.HeaderInner = HeaderInner;

export default Header;
