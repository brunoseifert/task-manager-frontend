import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2500,
    offset: "30px",
    transition: transitions.SCALE,
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
