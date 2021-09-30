import React, { useEffect, useRef } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import Nav from "../components/Nav";
import LogoImage from "../assets/common/Logo.svg";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";
import useScrollToTop from "../lib/useScrollToTop";

function Game(props: RouteComponentProps) {
  useScrollToTop();
  return (
    <div className="min-h-screen" style={{ background: "#101010" }}>
      <Nav />
      <div
        id="game-hero"
        className="w-full pt-44 pb-24 px-10 md:px-36 lg:px-72  relative bg-center bg-cover"
      >
        <h1 className="text-primary-light glow text-6xl uppercase font-black italic text-center">
          FLAGSHIP PVP GAME
        </h1>
        <div className="aspect-w-16 aspect-h-9 mt-16 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yF1mCmnLdkk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <p className="mt-5 text-center text-white">
          What would a Tekken meets Aliens vs Predators game look like? Come
          find out.
          <br /> After first and third party NFT drops, SGF Media House starts
          arming itself with another IP drop.
          <br /> Pst. 0.05% of take rate of the game is pooled for staking
          rewards for Gen 1 Cyborg holders. Read tokenomics page for more
          details.
        </p>
      </div>
      <div
        className="py-16 px-10 md:px-36 lg:px-72"
        style={{ background: "#101010" }}
      >
        <h2 className="text-primary-light glow text-5xl uppercase font-black italic text-center">
          fight mechanics rnd
        </h2>
        <div className="aspect-w-16 aspect-h-9 mt-16 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/szZh00JznG8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row justify-between items-center lg:px-24 py-16 px-10 text-white bg-center bg-cover mt-10">
        <div>
          <img src={LogoImage} alt="Logo" />
          <p className="mt-5 font-orb text-xs hidden lg:block">
            {"</>"} with 🦾 on Solana
          </p>
          <div className="flex space-x-5 text-2xl mt-5 justify-center lg:justify-start">
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Discord} alt="discord-icon" />
            </a>
            <a
              href="https://twitter.com/SGFUnited"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="twitter-icon" />
            </a>
          </div>
        </div>
        <div className="font-orb flex flex-col items-center mx-auto lg:mx-0 mt-10 lg:mt-0 lg:max-w-xs">
          <p className="text-sm font-medium text-gray text-center font-inter">
            Ready for an On-chain Decentralized Galactic Adventure? Come join
            the SGF Community, where Sci-Fi meets NFTs.
          </p>
          <div className="flex flex-wrap justify-end items-center">
            <Link
              to="/nft"
              className="footer-btn-primary font-black mt-4 lg:mr-3 w-full lg:w-auto"
            >
              NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="footer-btn-secondary font-black mt-4 w-full lg:w-auto"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Game;
