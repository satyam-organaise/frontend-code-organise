import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Route, Router, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';


function App() {

  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5454d3',
      },
      secondary: {
        main: '#FF5353',
      },
    },
    typography: {
      fontFamily: 'Nunito'
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />

        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
