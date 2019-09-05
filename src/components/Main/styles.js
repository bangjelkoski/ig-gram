import styled from 'styled-components';
import { Row, sizes, container } from 'styles';

const MainWrap = styled.main`
    padding-top: ${sizes.header};
    ${container};

    ${Row} {
        margin: 2rem 0 0;
    }
`;

export default MainWrap;
