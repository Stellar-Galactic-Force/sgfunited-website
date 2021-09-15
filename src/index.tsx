import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
// import App from './App';
import Landing from "./pages/Landing.jsx";
import { Router } from "@reach/router";
import reportWebVitals from "./reportWebVitals";
import NFT from "./pages/NFT";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="font-inter">
      <Router>
        <Landing path="/" />
        <NFT path="/nft" />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
