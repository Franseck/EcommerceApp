import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {store} from './redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
  </Provider>);
