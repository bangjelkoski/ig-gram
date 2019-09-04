const defaultColors = {
    transparent: 'transparent',

    black: '#1b1b1b',
    white: '#fff',

    grey: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
    },

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
    bodyBackground: defaultColors.grey[100],
    headerBackground: defaultColors.white,
    logo: {
        icon: defaultColors.grey[800],
        text: defaultColors.grey[800],
    },
};

const dark = {
    ...defaultColors,
    bodyBackground: defaultColors.grey[800],
    headerBackground: defaultColors.grey[700],
    logo: {
        icon: defaultColors.primary[500],
        text: defaultColors.grey[300],
    },
};

export { light, dark };
