import React from 'react';
import { useColorMode } from 'theme-ui';

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div>
      <button
        onClick={() => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ColorSwitch;
