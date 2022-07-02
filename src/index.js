import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
// import theme from './styles';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { theme } from './themes';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
