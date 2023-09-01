import "./styles.css";
import React from "react";
import SearcBar from "./SearchBar/SearchBar";
import Body from "./body/body";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./SearchBar/searchBarReducer.js";
export default function App() {
  const store = configureStore({ reducer: searchBarReducer });
  return (
    <Provider store={store}>
      <div className="App">
        <SearcBar />
        <Body />
      </div>
    </Provider>
  );
}
