/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useColorMode } from 'theme-ui';

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div sx={{ textAlign: 'center' }}>
      <button
        onClick={() => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }}
        sx={{
          backgroundColor: 'secondary',
          borderRadius: '100em',
          border: 0,
          color: 'foreground',
          fontFamily: 'heading',
          fontSize: [0, 1],
          fontWeight: 'bold',
          margin: 3,
          px: 4,
          py: 3,
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ColorSwitch;
