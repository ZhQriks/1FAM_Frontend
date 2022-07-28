import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./Application";
import { setupStore } from "./store/store";

import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = setupStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>
);
