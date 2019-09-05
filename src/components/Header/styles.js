import styled from 'styled-components';
import { flex, transition, sizes, container } from 'styles';
import { boxShadows } from 'styles';

const Header = styled.header`
    background: ${({ theme }) => theme.header.background};
    border-bottom: 2px solid ${({ theme }) => theme.header.borderBottom};
    position: fixed;
    height: ${sizes.header};
    width: 100%;
    box-shadow: ${boxShadows['sm']};

    ${transition('background-color', 'border-color')};
    ${flex.horizontal};
    ${flex.centerHorizontalV};
`;

const HeaderInner = styled.div`
    padding: 0 0.5rem;
    ${container};
    ${flex.horizontal};
    ${flex.centerHorizontalV};
    ${flex.spaceBetween};
`;

Header.HeaderInner = HeaderInner;

export default Header;
