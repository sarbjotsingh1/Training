import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CounterContext, CounterProvider } from "../Counter/CounterContext.jsx";
import store from "../redux/store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </Provider>
    <ToastContainer />
  </StrictMode>
);
