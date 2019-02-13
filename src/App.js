import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import './App.sass';

import store from './store';

import Header from './components/header';
import Footer from './components/footer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <div className="body">
        <div className="page">
          <Routes />
        </div>
        <Footer />
      </div>
    </div>
  </Provider>
);

export default App;
