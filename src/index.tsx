// React
import React from "react";
import ReactDOM from "react-dom/client";
// React

// CSS
import "./index.css";
// CSS

// Router
import { BrowserRouter as Router } from "react-router-dom";
// Router

// Components
import App from "./App";
// Components

// Redux
import { Provider } from "react-redux";
import { store } from "./StateManagement/RTK/store";
// Redux

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
