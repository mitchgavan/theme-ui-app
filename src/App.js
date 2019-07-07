import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import Card from './Card'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
