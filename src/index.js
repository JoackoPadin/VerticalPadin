import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwdWuuNt6Lx25OInjOyNCfyEGpCLLv-gI",
  authDomain: "vertical-a308c.firebaseapp.com",
  projectId: "vertical-a308c",
  storageBucket: "vertical-a308c.appspot.com",
  messagingSenderId: "719824444305",
  appId: "1:719824444305:web:166b4cd19cb83ea7bf9830"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);
