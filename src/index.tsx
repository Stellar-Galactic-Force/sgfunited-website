import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import Landing from "./pages/Landing.jsx";
import { Router } from "@reach/router";
import reportWebVitals from "./reportWebVitals";
import NFT from "./pages/NFT";
import Roadmap from "./pages/Roadmap";
import Tokenomics from "./pages/Tokenomics";
import Mint from "./App";
import FAQ from "./pages/FAQ";
import Game from "./pages/Game";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="font-inter">
      <Router primary={false}>
        <Landing path="/" />
        <Mint path="sale-one-mint" />
        <NFT path="nft" />
        <Roadmap path="roadmap" />
        <Tokenomics path="tokenomics" />
        <FAQ path="faq" />
        <Game path="game" />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
