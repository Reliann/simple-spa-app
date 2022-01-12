import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    </ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

