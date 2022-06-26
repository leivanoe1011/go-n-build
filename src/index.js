
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext';
import { HashRouter as Router } from "react-router-dom";


import "./styles/common.css";
import "./styles/chatroom.css";

ReactDOM.render(
  
    <AuthProvider>
        <Router>
          <App />
        </Router>
    </AuthProvider>, document.getElementById('root')
);
