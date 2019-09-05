import reset from 'styled-reset';
import { above, sans, transition } from 'styles';
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
        color: ${({ theme }) => theme.textColor};
        font-size: 1rem;
        ${sans}
        ${transition('background-color', 'color')}
    }
`;

export default GlobalStyle;
