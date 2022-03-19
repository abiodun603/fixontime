import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./styles/index.css"
import "./styles/index.css"
import { AuthContextProvider } from './context/authContext/AuthContext';
import { BlogContextProvider } from './context/blogContext/BlogContext';
import { LearnContextProvider } from './context/learningContext/LearnContext';

document.title = "candidsolutionlimited"
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <LearnContextProvider>
          <App />
        </LearnContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
); 