import { css } from 'styled-components';

export const sans = `
    font-family: 'Manjari', sans-serif;
`;

export const logoFont = `
    font-family: 'Grand Hotel', cursive;
`;

export const loadFonts = css`
    @font-face {
        font-family: 'Grand Hotel';
        src: url('./fonts/GrandHotel-Regular.eot');
        src: url('./fonts/GrandHotel-Regular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/GrandHotel-Regular.woff2') format('woff2'),
            url('./fonts/GrandHotel-Regular.woff') format('woff'),
            url('./fonts/GrandHotel-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Manjari';
        src: url('./fonts/Manjari-Regular.eot');
        src: url('./fonts/Manjari-Regular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Manjari-Regular.woff2') format('woff2'), url('./fonts/Manjari-Regular.woff') format('woff'),
            url('./fonts/Manjari-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Manjari';
        src: url('./fonts/Manjari-Bold.eot');
        src: url('./fonts/Manjari-Bold.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Manjari-Bold.woff2') format('woff2'), url('./fonts/Manjari-Bold.woff') format('woff'),
            url('./fonts/Manjari-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }
`;
