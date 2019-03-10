import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import Counter from "./components/Counter";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
