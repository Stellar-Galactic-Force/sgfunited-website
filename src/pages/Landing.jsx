import { useState, useEffect, useRef } from "react";

import GLOBE from "vanta/dist/vanta.globe.min";
import Ticker from "react-ticker";
import { Link } from "@reach/router";
import { isMobile } from "react-device-detect";

import Nav from "../components/Nav";

import Spaceship from "../assets/landing/spaceship.svg";

import Alphatron from "../assets/landing/Team-Avatars/alphatron.svg";
import NonFungiblePrime from "../assets/landing/Team-Avatars/nonfungibleprime.svg";
import Kayden from "../assets/landing/Team-Avatars/kayden.svg";
import Greywolf from "../assets/landing/Team-Avatars/greywolf.svg";
import Skywalker from "../assets/landing/Team-Avatars/skywalker.svg";

import LogoImage from "../assets/common/Logo.svg";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

import useScrollToTop from "../lib/useScrollToTop";

function Landing(props) {
  const [effect, setEffect] = useState(null);
  const effectRef = useRef(null);
  const headingRef = useRef(null);
  const headGlow = useRef(null);

  useEffect(() => {
    headingRef.current.classList.remove("opacity-0");
    headingRef.current.classList.remove("-translate-x-6");
    headGlow.current.classList.add("heading-glow");
    if (!effect) {
      if (!isMobile) {
        setEffect(
          GLOBE({
            el: effectRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            scale: 1,
            scaleMobile: 1.0,
            size: 0.65,
            color: 0xadf9ff,
            color2: 0xadf9ff,
            backgroundColor: 0x000,
          })
        );
      }
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [effect]);

  useScrollToTop();

  return (
    <div className="relative overflow-x-hidden">
      <Nav />
      <div
        ref={effectRef}
        className="bg-black text-white w-full h-screen flex items-center px-10 py-14 lg:px-30 lg:py-40 relative"
      >
        <div className="max-w-5xl">
          <div className="relative">
            <div className="bg-black opacity-25 absolute inset-0 filter blur lg:hidden"></div>
            <h1
              className="lg:text-7xl text-4xl font-black italic transform transition-all opacity-0 -translate-x-6 duration-900 ease-out"
              ref={headingRef}
            >
              1st COMMUNITY-OWNED{" "}
              <span
                className="text-primary-light relative delay-700 duration-500"
                ref={headGlow}
              >
                SCI-FI MEDIA HOUSE{" "}
              </span>{" "}
              🔭 BUILT ON SOLANA
            </h1>
          </div>

          <div className="mt-10 lg:space-x-5  space-y-4  lg:space-y-0 font-orb  mx-auto">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-primary-light text-black font-orb">
          <div className="absolute bg-primary-light -inset-1 z-0 opacity-80  rounded filter blur"></div>
          <Ticker>
            {() => (
              <div className="relative z-10  py-3 ml-3 font-medium text-xs lg:text-lg">
                LAUNCHING SOON @ 0.99 SOL *
              </div>
            )}
          </Ticker>
        </div>
      </div>
      <div
        className="h-screen bg-center bg-cover flex items-center lg:px-30 px-10 relative bg-gray-dark"
        id="landing-section-2"
      >
        <div className="w-full">
          <h1 className="text-primary-light lg:text-5xl text-4xl font-black italic glow lg:text-center">
            AHOY SPACE CADETS
          </h1>
          <div className="font-orb font-black lg:text-3xl text-2xl lg:text-center text-white mt-10 space-y-2 uppercase">
            <p>
              Welcome To{" "}
              <span className="text-primary-dark glow">
                SGF’s Mission Control
              </span>{" "}
              room.
            </p>
            <p>
              Here <span className="font-medium">You</span> will{" "}
              <span className="font-medium">find</span> everything to{" "}
              <span className="font-medium">get started</span>.
            </p>
          </div>
        </div>
      </div>
      <div
        className="lg:h-screen bg-center bg-cover relative  lg:pb-28 lg:pt-44 lg:pl-36 lg:pr-0 px-10 pt-20 pb-16"
        id="vision"
      >
        <div className="lg:grid lg:grid-cols-2">
          <div className="text-white">
            <h1 className="text-primary-light glow lg:text-5xl text-4xl font-black italic uppercase">
              SGF's Vision
            </h1>
            <div className="uppercase font-orb lg:text-3xl text-2xl mt-10 font-black">
              <p>
                To build <br />
                the Sci-Fi media house <br />
                21'st century deserves. <br />
                <br />
                Community owned from the start.
              </p>
            </div>
          </div>
          <img
            src={Spaceship}
            alt="spaceship"
            className="justify-self-end w-5/6 hidden lg:block"
          />
        </div>
        <div>
          <p className="mt-10 text-white lg:text-3xl text-2xl font-orb uppercase font-black">
            Intellectual property DROPs planned: <br />
            <span className="text-primary-dark glow">
              GENSIS 10k Gen-1 CYBORG
            </span>
          </p>

          <div className="mt-10 lg:space-x-3 lg:space-y-0 space-y-3 font-orb">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
      <div
        className="lg:h-screen bg-center bg-cover lg:pt-40 px-10  pt-36 pb-16 relative bg-gray-dark"
        id="team"
      >
        <div className="bg-black bg-opacity-40 h-full absolute inset-0 z-0"></div>
        <div className="relative z-10">
          <h1 className="uppercase text-primary-light glow font-black italic lg:text-5xl text-4xl text-center">
            Stellar team
          </h1>
          <div className="max-w-4xl mx-auto hidden lg:block">
            <div className="font-orb text-white mt-20 flex justify-between">
              <div className="space-y-2">
                <img src={Kayden} alt="" className="mx-auto" />
                <p className="text-center">@kayden</p>
              </div>
              <div className="space-y-2">
                <img src={NonFungiblePrime} alt="" className="mx-auto" />
                <p className="text-center">@nonfungibleprime</p>
              </div>
              <div className="space-y-2">
                <img src={Greywolf} alt="" className="mx-auto" />
                <p className="text-center">@greywolf</p>
              </div>
            </div>
            <div className="font-orb text-white mt-16 flex justify-evenly">
              <div className="space-y-2">
                <img src={Alphatron} alt="" className="mx-auto" />
                <p className="text-center">@alphatron</p>
              </div>
              <div className="space-y-2">
                <img src={Skywalker} alt="" className="mx-auto" />
                <p className="text-center">@skywalker</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto lg:hidden block">
            <div className="grid grid-cols-2 font-orb text-white mt-10 gap-5">
              <div className="space-y-2">
                <img
                  src={Kayden}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@kayden</p>
              </div>
              <div className="space-y-2">
                <img
                  src={NonFungiblePrime}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center  whitespace-nowrap truncate">
                  @nonfungibleprime
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src={Greywolf}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@greywolf</p>
              </div>
              <div className="space-y-2">
                <img
                  src={Alphatron}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@alphatron</p>
              </div>
            </div>

            <div className="space-y-2 mt-5 font-orb">
              <img
                src={Skywalker}
                alt=""
                className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
              />
              <p className="text-center text-white">@skywalker</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row justify-between items-center lg:px-24 py-16 px-10 text-white bg-center bg-cover ">
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
            Ready for an On-chain Decentralised Galactic Adventure? Come join
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

export default Landing;
