import { Link, RouteComponentProps } from "@reach/router";

import Nav from "../components/Nav";

import HeroCyborg from "../assets/nft/hero-cyborg.gif";
import Cyborgs from "../assets/nft/cyborgs.svg";
import General from "../assets/nft/general.png";
import Lieutenant from "../assets/nft/lieutenant.png";
import Soldier from "../assets/nft/soldier.png";
import CyborgBreakdown from "../assets/nft/cyborg-breakdown.svg";
import CyborgBreakdownMobile from "../assets/nft/cyborg-breakdown-mobile.svg";

import Mercury from "../assets/nft/bg/mercury-bg.png";
import Venus from "../assets/nft/bg/venus-bg.svg";
import Earth from "../assets/nft/bg/earth-bg.png";
import Mars from "../assets/nft/bg/mars-bg.png";
import Jupiter from "../assets/nft/bg/jupiter-bg.png";
import Saturn from "../assets/nft/bg/saturn-bg.png";
import Uranus from "../assets/nft/bg/uranus-bg.png";
import Neptune from "../assets/nft/bg/neptune-bg.png";

import Aviator from "../assets/nft/cyborgs/aviator.png";
import Brawler from "../assets/nft/cyborgs/brawler.png";
import Marine from "../assets/nft/cyborgs/marine.png";
import Tactician from "../assets/nft/cyborgs/tactician.png";
import Warrior from "../assets/nft/cyborgs/warrior.png";

import AviatorMobile from "../assets/nft/cyborg-mobile/aviator-mobile.svg";
import BrawlerMobile from "../assets/nft/cyborg-mobile/brawler-mobile.svg";
import MarineMobile from "../assets/nft/cyborg-mobile/marine-mobile.svg";
import WarriorMobile from "../assets/nft/cyborg-mobile/warrior-mobile.svg";
import TacticianMobile from "../assets/nft/cyborg-mobile/tactician-mobile.svg";

import PlanetBrown from "../assets/nft/decorative/planet-brown.svg";
import Meteor from "../assets/nft/decorative/meteor.svg";
import PlanetBlue from "../assets/nft/decorative/planet-blue.svg";
import Satellite from "../assets/nft/decorative/satelite.svg";
import StoneGrey from "../assets/nft/decorative/stone-grey.svg";
import WhiteSpaceship from "../assets/nft/decorative/white-spaceship.png";

import LogoImage from "../assets/common/Logo.svg";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

import { useEffect, useRef } from "react";
import useScrollToTop from "../lib/useScrollToTop";

function NFT(props: RouteComponentProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingGlow = useRef<HTMLSpanElement>(null);
  const cyborgGif = useRef<HTMLDivElement>(null);
  useEffect(() => {
    headingRef.current?.classList.remove("opacity-0");
    headingRef.current?.classList.remove("-translate-x-8");

    headingGlow.current?.classList.add("glow");

    cyborgGif.current?.classList.remove("lg:translate-x-8");
    cyborgGif.current?.classList.remove("opacity-0");
    cyborgGif.current?.classList.remove("scale-90");
  }, []);

  useScrollToTop();

  return (
    <div
      className="relative overflow-x-hidden"
      style={{ background: "#101010" }}
    >
      <Nav />
      <div
        className=" text-white w-full lg:h-screen lg:px-30 lg:py-40 px-10 pt-40 pb-16 relative bg-center bg-cover lg:grid lg:grid-cols-2"
        id="nft-drop-hero"
      >
        <div className="flex flex-col items-start justify-center">
          <h1
            className="font-black italic lg:text-7xl text-5xl uppercase  transform transition-all opacity-0 -translate-x-8 duration-500 ease-out"
            ref={headingRef}
          >
            <span
              className="text-primary-light delay-500 duration-300"
              ref={headingGlow}
            >
              Gen-1 Cyborg
            </span>
            <br /> NFT drop
          </h1>
          <p className="uppercase font-black italic text-xl mt-7  hidden lg:block">
            first ip drop by sgf media house
          </p>
          <div className="mt-8 font-orb flex-wrap hidden lg:flex">
            <Link to="/roadmap" className="btn-primary font-black mt-4 mr-3">
              ROADMAP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black mt-4"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
        <div className="grid items-center justify-center mt-10">
          <div
            className="border-primary-light rounded-md lg:border-8 border-4 lg:w-11/12 mx-auto transition-all  transform duration-500 ease-out opacity-0 lg:translate-x-8 scale-90"
            ref={cyborgGif}
          >
            <img src={HeroCyborg} alt="Cyborg hero" />
          </div>
        </div>
        <div className="mt-8 font-orb flex flex-col items-center lg:hidden">
          <Link to="/roadmap" className="btn-primary font-black mt-4 lg:mr-3">
            ROADMAP
          </Link>
          <a
            href="https://discord.com/invite/bBeHKHHSu5"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary font-black mt-4"
          >
            JOIN DISCORD
          </a>
        </div>
      </div>
      <div className="lg:py-14 lg:px-48  px-10 py-16 uppercase relative">
        <img
          src={PlanetBrown}
          alt="Brown Planet"
          className="absolute top-0 left-0 hidden lg:block"
        />
        <h1 className="lg:text-5xl text-4xl text-primary-light glow font-black italic text-center">
          mint details
        </h1>
        <div className="text-white font-orb font-black text-center mt-16 bg-gray-dark border border-gray-light rounded-md py-10 px-16">
          <h4 className="uppercase text-primary-dark font-orb font-black text-3xl mb-10">
            Sale 1
          </h4>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full">
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-3xl whitespace-nowrap truncate font-inter italic">
                2,000
              </div>
              <div className="text-lg whitespace-nowrap truncate">supply</div>
            </div>
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-3xl whitespace-nowrap truncate font-inter italic">
                0.42069 SOL
              </div>
              <div className="text-lg whitespace-nowrap truncate">
                mint price
              </div>
            </div>
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-2xl whitespace-nowrap truncate font-inter italic">
                30th Sept, 6PM UTC
              </div>
              <div className="text-lg whitespace-nowrap truncate">
                mint date
              </div>
            </div>
          </div>
        </div>
        <div className="text-white font-orb font-black text-center mt-16 bg-gray-dark border border-gray-light rounded-md py-10 px-16">
          <h4 className="uppercase text-primary-dark font-orb font-black text-3xl mb-10">
            Sale 2
          </h4>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full">
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-3xl whitespace-nowrap truncate font-inter italic">
                8,000
              </div>
              <div className="text-lg whitespace-nowrap truncate">supply</div>
            </div>
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-3xl whitespace-nowrap truncate font-inter italic">
                0.99 SOL
              </div>
              <div className="text-lg whitespace-nowrap truncate">
                mint price
              </div>
            </div>
            <div className="grid grid-rows-2 lg:space-y-5 space-y-2">
              <div className="text-2xl whitespace-nowrap truncate font-inter italic">
                <a
                  href="https://bit.ly/2ZXaau9"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  7th Oct, 6PM UTC
                </a>
              </div>
              <div className="text-lg whitespace-nowrap truncate">
                mint date
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 px-10 lg:px-0 mt-24 relative">
        <img
          src={StoneGrey}
          alt="StoneGrey"
          className="absolute top-0 right-0 hidden lg:block"
        />
        <h1 className="text-primary-light lg:text-5xl text-4xl text-center uppercase glow font-black italic">
          Rarities explained
        </h1>
        <p className="text-white uppercase font-orb font-black text-2xl mt-16 text-center">
          sgf cyborgs are divided into{" "}
          <span className="text-primary-dark">5 forces</span>
        </p>
        <img
          src={Cyborgs}
          alt="cyborgs"
          className="mt-14 mx-auto hidden lg:block"
        />
        <div className="mt-14 mx-auto w-5/6 flex flex-col space-y-10 lg:hidden">
          <img src={AviatorMobile} alt="" />
          <img src={BrawlerMobile} alt="" />
          <img src={MarineMobile} alt="" />
          <img src={WarriorMobile} alt="" />
          <img src={TacticianMobile} alt="" />
        </div>
        <div className="text-white font-orb uppercase relative lg:px-48">
          <img
            src={Satellite}
            alt="Satellite"
            className="absolute top-0 left-0 hidden lg:block"
          />
          <p className="text-2xl font-black text-center mt-28">
            further division comes across{" "}
            <span className="text-primary-dark">ranks</span>
          </p>

          <div className="grid lg:grid-cols-3 grid-cols-1 text-center mt-16 max-w-6xl mx-auto gap-12">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <img src={General} alt="" />
              </div>
              <div className="lg:mt-3 lg:text-3xl text-2xl font-inter font-black italic">
                <p>General</p>
              </div>
              <div className="text-lg mt-1">
                <p>Lead from the front</p>
              </div>
              <div className="text-lg mt-0.5 text-yellow-200">
                <p>LEGENDARY (10%)</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center justify-center">
                <img src={Lieutenant} alt="" />
              </div>
              <div className="lg:mt-3 lg:text-3xl text-2xl font-inter font-black italic">
                <p>OFFICER </p>
              </div>
              <div className="text-lg mt-1">
                <p>scale the impact</p>
              </div>
              <div className="text-lg mt-0.5 text-blue-200">
                <p>RARE (40%)</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <img src={Soldier} alt="" />
              </div>
              <div className="lg:mt-3 lg:text-3xl text-2xl font-inter font-black italic">
                <p>Soldier</p>
              </div>
              <div className="text-lg mt-1">
                <p>execute bravely</p>
              </div>
              <div className="text-lg mt-0.5 text-green-200">
                <p>COMMON (50%)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:px-36 relative">
          <img
            src={Meteor}
            alt="Meteor"
            className="absolute right-0 top-0 hidden lg:block"
          />
          <h1 className="font-orb font-black text-white text-2xl mt-36 uppercase">
            Then each cyborg embraces unique set of{" "}
            <span className="text-primary-dark">traits</span>
          </h1>
          <img
            src={CyborgBreakdown}
            alt="cyborg-details"
            className="mx-auto mt-16 hidden lg:block"
          />
          <img
            src={CyborgBreakdownMobile}
            alt="cyborg-details"
            className="mt-16 mx-auto lg:hidden block"
          />
        </div>
        <div className="text-center mt-36 text-white uppercase font-orb lg:px-52 relative">
          <img
            src={WhiteSpaceship}
            alt="WhiteSpaceship"
            className="absolute top-0 left-0 hidden lg:block"
          />
          <h1 className="text-3xl font-black ">
            lastly <span className="text-primary-dark">bg</span> reflects
            cyborg's space base posting
          </h1>
          <div className="mt-16 lg:grid-cols-4 grid-cols-2 gap-10 lg:gap-14 text-lg font-medium max-w-6xl mx-auto grid">
            <div>
              <img src={Mercury} alt="" className="mx-auto" />
              <p className="mt-5">mercurian</p>
            </div>
            <div>
              <img src={Venus} alt="" className="mx-auto" />
              <p className="mt-5">Venusian</p>
            </div>
            <div>
              <img src={Earth} alt="" className="mx-auto" />
              <p className="mt-5">Earthian</p>
            </div>
            <div>
              <img src={Mars} alt="" className="mx-auto" />
              <p className="mt-5">Martian</p>
            </div>
            <div>
              <img src={Jupiter} alt="" className="mx-auto" />
              <p className="mt-5">Jovian</p>
            </div>
            <div>
              <img src={Saturn} alt="" className="mx-auto" />
              <p className="mt-5">Saturnian</p>
            </div>
            <div>
              <img src={Uranus} alt="" className="mx-auto" />
              <p className="mt-5">Uranian</p>
            </div>
            <div>
              <img src={Neptune} alt="" className="mx-auto" />
              <p className="mt-5">Neptunian</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 px-36 mt-24 relative hidden lg:block">
        <img
          src={PlanetBlue}
          alt="PlanetBlue"
          className="absolute top-0 right-0"
        />
        <h1 className="text-primary-light text-5xl text-center uppercase glow font-black italic">
          Forces explained
        </h1>
        <div className="mt-16">
          <div className="bg-gray-dark border border-gray-light rounded-md w-full grid grid-cols-3 gap-5 p-10 pb-0">
            <div className="text-white font-orb font-medium space-y-5 text-xl">
              <p>PILOTS OF SGF???S EM DRIVE WARSHIPS.</p>
              <p>GREAT WINGMEN IN CYBERNETIC RAVES.</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Aviator}
                alt="Shadowy Super Cyborg"
                className="mt-auto w-4/5"
              />
            </div>
            <div>
              <p className="uppercase font-black italic text-2xl text-aviators text-right tracking-wide">
                aviators
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gray-dark border border-gray-light rounded-md w-full grid grid-cols-3 gap-5 p-10 pb-0">
            <div>
              <p className="uppercase font-black italic text-2xl text-warriors text-left tracking-wide">
                warriors
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Warrior}
                alt="Shadowy Super Cyborg"
                className="mt-auto w-4/5"
              />
            </div>
            <div className="text-white text-right font-orb font-medium space-y-5 text-xl">
              <p>IMAGINE HULK???S POWER DIALLED UP BY 10</p>
              <p>YOU BETTER NOT GET INTO A CAGE FIGHT WITH THEM.</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gray-dark border border-gray-light rounded-md w-full grid grid-cols-3 gap-5 p-10 pb-0">
            <div className="text-white font-orb font-medium space-y-5 text-xl uppercase">
              <p>They operate in stealth.</p>
              <p>
                Not much is known AS opponents didn???t live to tell the tale.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Marine}
                alt="Shadowy Super Cyborg"
                className="mt-auto w-4/5"
              />
            </div>
            <div>
              <p className="uppercase font-black italic text-2xl text-marines text-right tracking-wide">
                marines
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gray-dark border border-gray-light rounded-md w-full grid grid-cols-3 gap-5 p-10 pb-0">
            <div>
              <p className="uppercase font-black italic text-2xl text-brawlers text-left tracking-wide">
                brawlers
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={Brawler}
                alt="Shadowy Super Cyborg"
                className="mt-auto w-4/5"
              />
            </div>
            <div className="text-white font-orb font-medium space-y-5 text-xl text-right">
              <p>GALACTIC SCALE WAR REQUIRES GALACTIC LEVEL FORCE.</p>
              <p>YOU CALL THEM WHEN SHIT HAS REALLY HIT THE FAN.</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gray-dark border border-gray-light rounded-md w-full grid grid-cols-3 gap-5 p-10 pb-0">
            <div className="text-white font-orb font-medium space-y-5 text-xl">
              <p>CYBERNETIC MUTATION INCREASED THEIR IQ OVER 9000</p>
              <p>SGF???S NEURAL ENGINE TO POWER STRATEGIC DECISION MAKING.</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Tactician}
                alt="Shadowy Super Cyborg"
                className="mt-auto w-4/5"
              />
            </div>
            <div>
              <p className="uppercase font-black italic text-2xl text-tacticians text-right tracking-wide">
                tacticians
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row justify-between items-center lg:px-24 py-16 px-10 text-white bg-center bg-cover mt-10">
        <div>
          <img src={LogoImage} alt="Logo" />
          <p className="mt-5 font-orb text-xs hidden lg:block">
            {"</>"} with ???? on Solana
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
              to="/roadmap"
              className="footer-btn-primary font-black mt-4 lg:mr-3 w-full lg:w-auto"
            >
              ROADMAP
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

export default NFT;
