import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DisplayGate, SDKInitOptions, SDKProvider } from "@tma.js/sdk-react";
import { SDKProviderError } from "./features/sdk/SDKError.tsx";
import { SDKProviderLoading } from "./features/sdk/SDKLoading.tsx";
import { SDKInitialState } from "./features/sdk/SDKInit.tsx";
import { BrowserRouter } from 'react-router-dom';
import store from './features/redux/store';
import { Provider } from 'react-redux';

const options: SDKInitOptions = {
  acceptCustomStyles: true,
  cssVars: true,
  async: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <SDKProvider options={options}>
        <DisplayGate error={SDKProviderError} loading={SDKProviderLoading} initial={SDKInitialState}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DisplayGate>
      </SDKProvider>
    </React.StrictMode>
  </Provider>
);
