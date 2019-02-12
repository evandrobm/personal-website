import React, { Component } from "react";
import Routes from "./routes";
import { Provider } from "react-redux";

import "./App.sass";

import store from "./store";

import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="body">
            <Routes />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
