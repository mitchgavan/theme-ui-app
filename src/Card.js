/** @jsx jsx */
import { jsx } from 'theme-ui';

const Card = () => (
  <div
    sx={{
      backgroundColor: 'foreground', // picks up value from `theme.colors.muted`
      borderRadius: 4,
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      margin: 3,
      padding: 3,
    }}
  >
    <h2
      sx={{
        fontWeight: 'bold',
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        marginTop: 0,
        marginBottom: 2,
      }}
    >
      Heading
    </h2>
    <div
      sx={{
        fontWeight: 'bold',
        fontSize: 2, // picks up value from `theme.fontSizes[4]`
        color: 'muted', // picks up value from `theme.colors.primary`
      }}
    >
      A short tagline
    </div>
    <p
      sx={{
        fontSize: 2, // picks up value from `theme.fontSizes[4]`
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
        fontSize: 1, // picks up value from `theme.fontSizes[4]`
        fontWeight: 'bold',
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
