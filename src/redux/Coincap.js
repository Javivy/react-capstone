import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
    const currencies = await response.json();
    return currencies;
  },
);

export const fetchAllCurrencies = createAsyncThunk(
  'currencies/fetchAllCurrencies',
  async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
    const currencies = await response.json();
    return currencies;
  },
);

export const searchCurrency = createAsyncThunk(
  'currencies/searchCurrency',
  async (term) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${term}`);
    const currency = await response.json();
    return currency;
  },
);

export const fetchChart = createAsyncThunk(
  'currencies/fetchChart',
  async (term) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${term}/market_chart?vs_currency=usd&days=30&interval=daily`);
    const currency = await response.json();
    return currency;
  },
);

export const changePage = createAsyncThunk(
  'currencies/changePage',
  async (currentPage) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false`);
    const currencies = await response.json();
    console.log(currencies);
    return currencies;
  },
);

export const changeVsCurrency = createAsyncThunk(
  'currencies/changeVsCurrency',
  async (object) => {
    const URL = `https://api.coingecko.com/api/v3/coins/${object.ID}/market_chart?vs_currency=${object.CURRENCY_SELECTED}&days=${object.SELECTED_TIME}&interval=daily`;
    const response = await fetch(URL);
    const currency = await response.json();
    return currency;
  },
);

export const changeTemporality = createAsyncThunk(
  'currencies/changeTemporality',
  async (object) => {
    const URL = `https://api.coingecko.com/api/v3/coins/${object.ID}/market_chart?vs_currency=${object.CURRENCY_SELECTED}&days=${object.SELECTED_TIME}&interval=daily`;
    console.log(URL, object);
    const response = await fetch(URL);
    const currency = await response.json();
    return currency;
  },
);

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    currencies: [],
    chart_data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = action.error.message;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.map((currency) => ({
          id: currency.id,
          name: currency.name,
          symbol: currency.symbol,
          price: currency.current_price,
          volume24h: currency.market_cap_change_24h,
          supply: currency.total_supply,
          totalVolume: currency.total_volume,
          image: currency.image,
        }));

        state.currencies = arr;
      })
      .addCase(searchCurrency.rejected, (state, action) => {
        state.status = action.error.message;
      })
      .addCase(searchCurrency.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const data = action.payload;

        const arr = [{
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          price: data.current_price,
          volume24h: data.market_cap_change_24h,
          supply: data.total_supply,
          totalVolume: data.total_volume,
          image: data.image.large,
        }]

        state.currencies = arr;
      })
      .addCase(changePage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.map((currency) => ({
          id: currency.id,
          name: currency.name,
          symbol: currency.symbol,
          price: currency.current_price,
          volume24h: currency.market_cap_change_24h,
          supply: currency.total_supply,
          totalVolume: currency.total_volume,
          image: currency.image,
        }));

        state.currencies = arr;
      })
      .addCase(fetchChart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.prices;

        state.chart_data = arr;
      })
      .addCase(changeVsCurrency.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.prices;

        state.chart_data = arr;
      })
      .addCase(changeTemporality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.prices;

        state.chart_data = arr;
      });
  },
});

const { action, reducer } = currenciesSlice;
export { action };
export default reducer;
