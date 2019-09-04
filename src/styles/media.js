import { css } from 'styled-components';

const sizes = {
    sm: '640px',
    md: '768px',
    lg: '1170px',
    xl: '1440px',
};

const [below, above] = Object.keys(sizes).reduce(
    ([below, above], label) => {
        below[label] = (...args) => css`
            @media (max-width: ${sizes[label]}) {
                ${css(...args)}
            }
        `;

        above[label] = (...args) => css`
            @media (min-width: ${sizes[label]}) {
                ${css(...args)}
            }
        `;
        return [below, above];
    },
    [{}, {}],
);

export { below, above };
