const breakpoints = ['40em', '64em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const space = [0, 4, 8, 16, 32, 48];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

export default {
  fonts: {
    main: 'Raleway, sans-serif',
    body: 'Roboto, sans-serif',
    heading: '"Great Vibes", cursive',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#392a25',
    background: '#fff',
    muted: '#f9f4f1',
    primary: '#92b955',
    secondary: '#9f8a6d',
  },
  space,
  breakpoints,
  styles: {
    Header: {
      // references values in `theme.colors`
      color: 'header.text',
      bg: 'header.background',
    },
    Container: {
      maxWidth: 1160,
      px: 3,
      py: 0,
    },
  },
};
