const themeKeys = {
  universalNormalizerKey: '*,*::before,*::after',
  htmlBodyKey: 'html,body',
};

const theme = {
  size: {
    pageWidth: '100%',
    pageMaxWidth: '1200px',
  },
  maxWidth: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  centerWidth: '86.75rem',
  font: {
    fontFamily: '"Red Hat Text",sans-serif',
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  space: {
    noSpacing: 0,
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    letterSpacings: {
      normal: 'normal',
      tracked: '0.1em',
      tight: '-0.05em',
      mega: '0.25em',
    },
    lineHeights: {
      solid: 1,
      title: 1.25,
      copy: 1.5,
    },
  },
  colors: {
    black: {
      dark: '#000',
      semi: '#333',
      light: '#eee',
    },
    blue: {
      dark: '#003DA5',
      semi: '#007BFF',
      light: '#E1ECF9',
    },
    red: {
      dark: '#721C24',
      semi: '#F8D7DA',
      light: '#FFF8FA',
    },
    mustard: {
      dark: '#70721C',
      semi: '#F3F8D7',
      light: '#FFFFF8',
    },
    green: {
      dark: '#1E721C',
      semi: '#D8F8D7',
      light: '#F8FFF8',
    },
    purple: {
      dark: '#1C2572',
      semi: '#D7D8F8',
      light: '#F8F8FF',
    },
    yellow: {
      dark: '#856404',
      semi: '#FFF3CD',
      light: '#FFFCF1',
    },
    white: {
      light: '#fff',
      semi: '#eee',
    },
    natural: '#737581',
    textColorsFor: {
      blueDark: '#fff',
      blueSemi: '#fff',
      blueLight: '#007BFF',

      redDark: '#fff',
      redSemi: '#721C24',
      redLight: '#721C24',

      mustardDark: '#fff',
      mustardSemi: '#70721C',
      mustardLight: '#70721C',

      greenDark: '#fff',
      greenSemi: '#1E721C',
      greenLight: '#1E721C',

      purpleDark: '#fff',
      purpleSemi: '#1C2572',
      purpleLight: '#1C2572',

      yellowDark: '#fff',
      yellowSemi: '#856404',
      yellowLight: '#856404',
    },
  },
  styles: {
    global: {
      [themeKeys.htmlBodyKey]: {
        bg: 'black',
        color: 'white',
        minH: '100vh',
        overflowX: 'hidden',
        'font-family': 'Red Hat Text',
      },
      [themeKeys.universalNormalizerKey]: {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },
    } as const,
  },
};

const TYPE_VARIANTS = {
  success: {
    bg: '#F6FFF8',
    color: '#155724',
    dashColor: '#C3E6CB',
  },
  warning: {
    bg: '#FFFCF1',
    color: '#856404',
    dashColor: '#FFEEBA',
  },
  danger: {
    bg: '#FFF6F6',
    color: '#721C24',
    dashColor: '#E1C0CA',
  },
};

export { theme, themeKeys, TYPE_VARIANTS };
