import React, { Component } from "react";
import Drawer from "./navigation/Drawer";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}

export default App;
