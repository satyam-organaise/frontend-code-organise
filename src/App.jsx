import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Route, Router, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';
import Folder from './pages/Folder';
import Message from './pages/Message';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5454d3',

      },
      secondary: {
        main: '#FF5353',
        dark: "#333333",
      }
    },
    typography: {
      fontFamily: 'Nunito',
      color: "#333333",
      fontWeight: "600"
    },

  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/data" element={<Data />} />
          <Route path="/message" element={<Message />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/priva" element={<Folder />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="*" element={<>404 page</>} />


        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
