import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

/**
 * this is the predefined method by react to create custom reactElemnt
 */
const reactElement = React.createElement(
  'a',
  { href: 'https://react.dev',target:'_blank' },
  'Click me',
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);
