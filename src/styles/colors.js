const grey = {
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
};

const defaultColors = {
    grey: { ...grey },

    transparent: 'transparent',

    black: '#1b1b1b',
    white: '#fff',

    danger: {
        100: '#FFF5F5',
        200: '#FED7D7',
        300: '#FEB2B2',
        400: '#FC8181',
        500: '#F56565',
        600: '#E53E3E',
        700: '#C53030',
        800: '#9B2C2C',
        900: '#742A2A',
    },

    warning: {
        100: '#FFFAF0',
        200: '#FEEBC8',
        300: '#FBD38D',
        400: '#F6AD55',
        500: '#ED8936',
        600: '#DD6B20',
        700: '#C05621',
        800: '#9C4221',
        900: '#7B341E',
    },

    success: {
        100: '#F0FFF4',
        200: '#C6F6D5',
        300: '#9AE6B4',
        400: '#68D391',
        500: '#48BB78',
        600: '#38A169',
        700: '#2F855A',
        800: '#276749',
        900: '#22543D',
    },

    secondary: {
        100: '#E6FFFA',
        200: '#B2F5EA',
        300: '#81E6D9',
        400: '#4FD1C5',
        500: '#38B2AC',
        600: '#319795',
        700: '#2C7A7B',
        800: '#285E61',
        900: '#234E52',
    },

    primary: {
        100: '#EBF4FF',
        200: '#C3DAFE',
        300: '#A3BFFA',
        400: '#7F9CF5',
        500: '#667EEA',
        600: '#5A67D8',
        700: '#4C51BF',
        800: '#434190',
        900: '#3C366B',
    },

    /** primary: {
        100: '#EBF8FF',
        200: '#BEE3F8',
        300: '#90CDF4',
        400: '#63B3ED',
        500: '#4299E1',
        600: '#3182CE',
        700: '#2B6CB0',
        800: '#2C5282',
        900: '#2A4365',
    },
    */
};

const light = {
    ...defaultColors,
    ...grey,
    bodyBackground: grey[100],
    textColor: grey[800],
    border: grey[200],
    buttons: {
        primary: {
            text: defaultColors.white,
            background: defaultColors.primary[500],
            hover: defaultColors.primary[700],
        },
    },
    card: {
        background: defaultColors.white,
        border: grey[300],
    },
    header: {
        background: defaultColors.white,
        textColor: grey[800],
        borderBottom: grey[200],
    },
    inputs: {
        inverted: {
            background: grey[200],
            textColor: grey[800],
            border: grey[300],
        },
    },
    logo: {
        icon: grey[800],
        text: grey[800],
        border: grey[600],
    },
};

const dark = {
    ...defaultColors,
    bodyBackground: grey[800],
    textColor: grey[200],
    border: grey[700],
    buttons: {
        primary: {
            text: defaultColors.grey[700],
            background: defaultColors.primary[300],
            hover: defaultColors.primary[400],
        },
    },
    card: {
        background: grey[700],
        border: grey[800],
    },
    header: {
        background: grey[900],
        textColor: grey[200],
        borderBottom: grey[700],
    },
    inputs: {
        inverted: {
            background: grey[700],
            textColor: grey[200],
            border: grey[800],
        },
    },
    logo: {
        icon: grey[100],
        text: grey[100],
        border: grey[300],
    },
};

export { light, dark };
