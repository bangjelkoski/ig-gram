const speed = 0.3;
const ease = 'ease-in-out';

export const transitions = {
    all: `
    transition: all ${speed}s ${ease};
  `,
    opacity: `
    transition: opacity ${speed}s ${ease};
  `,
    fill: `
    transition: fill ${speed}s ${ease};
  `,
    borderColor: `
    transition: border-color ${speed}s ${ease};
  `,
    backgroundColor: `
    transition: background-color ${speed}s ${ease};
  `,
    color: `
    transition: color ${speed}s ${ease};
  `,
};

export const transition = (...args) => {
    const transition = [...args].reduce((acc, transition) => {
        return (acc += `${transition} ${speed}s ${ease},`);
    }, '');

    return `transition: ${transition.substring(0, transition.length - 1)}`;
};
