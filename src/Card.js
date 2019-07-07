/** @jsx jsx */
import { jsx } from 'theme-ui';

const Card = () => (
  <div
    sx={{
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: 'primary', // picks up value from `theme.colors.primary`
    }}
  >
    <img src="https://source.unsplash.com/user/erondu/400x280" />
    Hello
  </div>
);

export default Card;
