import { css } from 'styled-components';
import { above } from 'styles';

const container = css`
    ${`margin: 0 auto;
    width: 90%;`}

    ${above['md']`
        width: 75%;
    `}

    ${above['lg']`
        width: 60%;
    `}
`;

export { container };
