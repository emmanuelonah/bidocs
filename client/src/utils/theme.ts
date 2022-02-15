const theme = {
  size: {
    pageWidth: '100%',
    pageMaxWidth: '1200px',
  },
  font: {
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    fontFamily: '',
    fontSize: ['0.9rem', '1rem', '1.2rem'],
  },
  space: {
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
  colors: {},
} as const;

export { theme };
