import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const currencies = await response.json();
    return currencies;
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
        const arr = action.payload.data.map((currency) => ({
          id: currency.rank,
          name: currency.name,
          symbol: currency.symbol,
          price: currency.priceUsd,
          volume24h: currency.volumeUsd24Hr,
          supply: currency.supply,
          maxSupply: currency.maxSupply,
        }));

        state.currencies = state.currencies.concat(arr);
      });
  },
});

const { action, reducer } = currenciesSlice;
export { action };
export default reducer;
