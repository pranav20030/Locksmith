import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));  // Create a root

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
