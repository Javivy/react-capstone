import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies } from './redux/Coincap';
import Home from './components/Home/Home';
import Cryptos from './components/Cryptos/Cryptos';
import Details from './components/Details/Details';

const App = () => {
  const currenciesData = useSelector((store) => store.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currenciesData.length) {
      dispatch(fetchCurrencies());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptos" element={<Cryptos />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
