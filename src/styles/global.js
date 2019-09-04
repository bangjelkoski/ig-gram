import reset from 'styled-reset';
import { above, sans, transitions } from 'styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

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
        ${transitions.backgroundColor}
    }
`;

export default GlobalStyle;
