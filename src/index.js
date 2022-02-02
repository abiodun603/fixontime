import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./styles/index.css"
import "./styles/index.css"
import { AuthContextProvider } from './context/authContext/AuthContext';
import { StaffContextProvider } from './context/staffContext/StaffContext';

document.title = "candidsolutionlimited"
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StaffContextProvider>
        <App />
      </StaffContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);