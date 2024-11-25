import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import { initializeApp } from "firebase/app";
// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAYS3MDpTcEQnlREKtCREmzKe2NLHo7y0c",
//   authDomain: "foo-delete-b5e24.firebaseapp.com",
//   projectId: "foo-delete-b5e24",
//   storageBucket: "foo-delete-b5e24.appspot.com",
//   messagingSenderId: "217714342491",
//   appId: "1:217714342491:web:5bc66608a00079d621dd7e"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);