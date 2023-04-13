import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import counterReducer from "./reddux/countreducer";
import Counter from "./reddux/counter";

const store = legacy_createStore(counterReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
