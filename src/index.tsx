import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
import Store from './data/store';
import { defaultTheme } from './presentation/base/themes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
