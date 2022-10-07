import React from "react";
import ReactDOM from 'react-dom';

const elem1 = React.createElement('span', { children: 'HELLO' });
const elem2 = React.createElement('span', { children: ' '});
const elem3 = React.createElement('span', { children: 'MY DEAR' });

const element = React.createElement('div', { children: [elem1, elem2, elem3] });

console.log('element =>', element);

ReactDOM.render(element, document.querySelector('#root'));


// ? ========================================
// import React from 'react';

// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
