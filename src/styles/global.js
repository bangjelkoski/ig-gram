import reset from 'styled-reset';
import { above, sans } from 'styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css?family=Manjari:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap');

    html {
        font-size: 13px;

        ${above['md']`
            font-size: 14px;
        `}

        ${above['lg']`
            font-size: 16px;
        `}
    }

    body {
        background: ${({ theme }) => theme.bodyBackground};
        font-size: 1rem;
        ${sans}
    }
`;

export default GlobalStyle;
