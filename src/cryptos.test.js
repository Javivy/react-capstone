import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import App from './App';

describe('Test the Reservations', () => {
  test('Test the App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const cryptosPage = screen.getByText('Cryptos');
    expect(cryptosPage).toBeInTheDocument();
  });

  test('Renders the cryptos page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Cryptos'));
    setTimeout(() => {
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    }, 3000);
  });

  test('Renders Bitcoin details', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    setTimeout(() => {
      fireEvent.click(screen.getByText('Bitcoin'));
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    }, 3000);
  });
});

describe('Test render App', () => {
  test('Test the App component', () => {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
