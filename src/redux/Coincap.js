import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const currencies = await response.json();
    return currencies;
  },
);

export const searchCurrency = createAsyncThunk(
  'currencies/searchCurrency',
  async (term) => {
    const response = await fetch(`https://api.coincap.io/v2/assets/${term}`);
    const currency = await response.json();
    return currency;
  },
);

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    currencies: [],
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
        const { data } = action.payload;

        if (!action.payload.error) {
          const arr = [{
            id: data.rank,
            name: data.name,
            symbol: data.symbol,
            price: data.priceUsd,
            volume24h: data.volumeUsd24Hr,
            supply: data.supply,
            maxSupply: data.maxSupply,
          }];
          state.currencies = arr;
        } else {
          const arr = [{
            name: action.payload.error,
            id: 1,
          }];

          state.currencies = arr;
        }
      });
  },
});

const { action, reducer } = currenciesSlice;
export { action };
export default reducer;
