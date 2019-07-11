/** @jsx jsx */
import { jsx } from '@emotion/core';

const Card = () => (
  <div
    css={theme => ({
      backgroundColor: theme.colors.foreground,
      borderRadius: 4,
      fontSize: theme.fonts[4],
      margin: theme.space[3],
      padding: theme.space[3],
    })}
  >
    <h2
      css={theme => ({
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fonts.heading,
        margin: 0,
        fontSize: theme.fontSizes[3],
        [`@media (min-width: ${theme.breakpoints.md})`]: {
          fontSize: theme.fontSizes[4],
        },
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
          fontSize: theme.fontSizes[5],
        },
      })}
    >
      Heading
    </h2>
    <div>A short tagline</div>
    <p>Lorem ipsum dolor...</p>
    <a href="/">Read more</a>
  </div>
);

export default Card;
