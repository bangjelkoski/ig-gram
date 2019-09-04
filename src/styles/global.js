import reset from 'styled-reset';
import { above, sans, loadFonts } from 'styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${loadFonts}

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
    }
`;

export default GlobalStyle;
