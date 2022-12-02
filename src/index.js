import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import './sass/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/ConfigureStore.js';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
