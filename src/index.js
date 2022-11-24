/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './sass/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
  <App />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
