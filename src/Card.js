/** @jsx jsx */
import { jsx } from 'theme-ui';

const Card = () => (
  <div
    sx={{
      backgroundColor: 'foreground', // picks up value from `theme.colors.foreground`
      borderRadius: 4,
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      margin: 3,
      padding: 3,
    }}
  >
    <h2
      sx={{
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: [3, 4], // picks up value from `theme.fontSizes[4]`
        margin: 0,
      }}
    >
      Heading
    </h2>
    <div
      sx={{
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: [1, 2], // picks up value from `theme.fontSizes[4]`
        color: 'muted', // picks up value from `theme.colors.primary`
        marginBottom: 2,
      }}
    >
      A short tagline
    </div>
    <p
      sx={{
        fontSize: [1, 2], // picks up value from `theme.fontSizes[4]`
        marginTop: 0,
        marginBottom: 3,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a dui erat. Vivamus malesuada facilisis est, sit amet interdum turpis feugiat id.
    </p>
    <a 
      href="/"
      sx={{
        backgroundColor: 'primary',
        borderRadius: '100em',
        color: 'foreground',
        display: 'inline-block',
        fontFamily: 'heading',
        fontSize: [0, 1], // picks up value from `theme.fontSizes[4]`
        fontWeight: 'bold',
        marginBottom: 1,
        px: 3,
        py: 2,
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover, &:focus': { opacity: 0.75 },
      }}
    >
      Read more
    </a>
  </div>
);

export default Card;
