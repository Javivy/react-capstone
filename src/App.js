import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cryptos from './components/Cryptos/Cryptos';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptos" element={<Cryptos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
