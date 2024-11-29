import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import { Provider } from "react-redux";
import store from "./src/utils/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppLayout />
  </Provider>
);
