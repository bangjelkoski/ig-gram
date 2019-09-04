import styled from 'styled-components';
import { above } from 'styles';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
`;

const Col = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin: 0.5rem 0;
`;

const ColHalf = styled(Col)`
    ${above['lg']`
        width: 50%;
    `}
`;

const ColThird = styled(Col)`
    ${above['lg']`
        width: 33.3333%;
    `}
`;

const ColTwoThird = styled(Col)`
    ${above['lg']`
        width: calc(100% - 33.3333%);
    `}
`;

export { Row, ColHalf, ColThird, ColTwoThird };
