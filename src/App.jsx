import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Route, Router, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';
import Folder from './pages/Folder';
import Message from './pages/Message';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Setting from './pages/Setting';
import Login from "./pages/Login";
import ForgetPassword from './pages/ForgetPassword';
import SignUp from './pages/signup';

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
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/message" element={<Message />} />
          <Route path="/folder" element={<Folder />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/settings" element={<Setting />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<>404 page</>} />
        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
