import { useState, useEffect, useRef } from "react";

import GLOBE from "vanta/dist/vanta.globe.min";
import Marquee from "react-fast-marquee";
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
        className="bg-black text-white w-full h-screen flex items-center px-10 py-16  lg:px-30 lg:py-40 relative"
      >
        <div className="max-w-5xl -mb-10 lg:mb-0">
          <div className="relative">
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
        <div className="absolute bottom-0 inset-x-0 bg-primary-light text-black italic uppercase font-black tracking-wide">
          <div className="absolute bg-primary-light -inset-1 z-0 opacity-80  rounded filter blur"></div>
          <Marquee
            speed={isMobile ? 30 : 75}
            gradient={false}
            pauseOnHover={true}
            pauseOnClick={true}
          >
            <div className="relative z-10  space-x-2  py-3 font-medium text-xs lg:text-lg font-bold">
              | Sale 1 • 2k Supply • SOLD OUT IN 4 MINUTES | Sale 2 • 8k Supply
              • SOLD OUT IN 6 MINUTES |
            </div>
          </Marquee>

          {/* <Ticker>
            {() => (
              <>
                <div className="relative z-10  py-3 ml-3 font-medium text-xs lg:text-lg">
                  <span className="font-black">SALE 1</span>: SUPPLY 2K • MINT
                  PRICE 0.42069 SOL *{" "}
                  <span className="font-black">SALE 2:</span> SUPPLY 8K • MINT
                  PRICE 0.99 SOL *
                </div>
              </>
            )}
          </Ticker> */}
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
              GENESIS 10k Gen-1 CYBORG
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
        className="lg:min-h-screen bg-center bg-cover lg:pt-40 px-10  pt-36 pb-16 relative bg-gray-dark"
        id="team"
      >
        <div className="bg-black bg-opacity-40 h-full absolute inset-0 z-0"></div>
        <div className="relative z-10">
          <h1 className="uppercase text-primary-light glow font-black italic lg:text-5xl text-4xl text-center">
            Stellar team
          </h1>
          <div className="mt-20 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="w-full p-10 text-white">
                <div className="flex flex-col justify-start lg:flex-row lg:items-start lg:space-x-5">
                  <img src={Kayden} alt="" />
                  <div className="mt-5 lg:mt-0">
                    <p className="text-lg font-black">
                      @kayden{" "}
                      <span className="font-normal text-sm">
                        | Smart Contract Lead
                      </span>
                    </p>
                    {/* <p className="mt-1 text-sm font-bold">
                      Lead Smart Contract Developer
                    </p> */}
                    <p className="mt-8 leading-relaxed text-sm lg:text-base">
                      A crypto-native degen who is also a pro-gamer.
                      <br />
                      <br /> Ran an E-Sports Venture in his college days, now
                      finds most days tinkering at the intersection of
                      blockchains and gaming.
                      <br />
                      <br /> 3+ years of functional programming experience
                      through writing JavaScript. Picking up Rust to write our
                      game contracts on Solana.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-10 text-white">
                <div className="flex flex-col justify-start lg:flex-row lg:items-start lg:space-x-5">
                  <img src={Greywolf} alt="" className="" />
                  <div className="mt-5 lg:mt-0">
                    <p className="text-lg font-black">
                      @greywolf{" "}
                      <span className="font-normal text-sm">
                        | Lead Game Designer
                      </span>
                    </p>
                    {/* <p className="mt-1 text-sm font-bold">Lead Game Designer</p> */}
                    <p className="mt-8 leading-relaxed text-sm lg:text-base">
                      A multi-disciplinary designer who believes User Experience
                      (UX) is one of the biggest problems to solve in the crypto
                      industry.
                      <br />
                      <br /> Believes games are the perfect trojan horse to
                      scale blockchain adoption.
                      <br />
                      <br /> Before SGF, built and exited a blockchain ed-tech
                      startup in May 2021 - that scaled upto 6000 users across
                      12 countries within a 6 months period. After that spent 6
                      months tinkering around with game engines (Unity, Unreal)
                      and game mechanics to build the foundation of SGF United.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-10 text-white">
                <div className="flex flex-col justify-start lg:flex-row lg:items-start lg:space-x-5">
                  <img src={NonFungiblePrime} alt="" className="" />
                  <div className="mt-5 lg:mt-0">
                    <p className="text-lg font-black">
                      @nonfungibleprime{" "}
                      <span className="font-normal text-sm">
                        | Tokenomics Engineer
                      </span>
                    </p>
                    {/* <p className="mt-1 text-sm font-bold">
                      Tokenomics Engineer
                    </p> */}
                    <p className="mt-8 leading-relaxed text-sm lg:text-base">
                      A crypto-native entrepreneur building in the blockchain
                      space for the past 2 years. Background in distributed
                      systems and economics.
                      <br />
                      <br /> Before SGF, scaled a crypto product studio clocking
                      $50k MRR/40% margins which spawned a popular DeFi protocol
                      in the Polkadot blockchain space.
                      <br />
                      <br /> Total 5+ years of product-dev experience across
                      leading fintech company in South East Asia/Pacific and
                      stints at a research lab based in Switzerland.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-10 text-white">
                <div className="flex flex-col justify-start lg:flex-row lg:items-start lg:space-x-5">
                  <img src={Alphatron} alt="" className="" />
                  <div className="mt-5 lg:mt-0">
                    <p className="text-lg font-black">
                      @alphatron{" "}
                      <span className="font-normal text-sm">
                        | Community Builder
                      </span>
                    </p>
                    {/* <p className="mt-1 text-sm font-bold">Community Builder</p> */}
                    <p className="mt-8 leading-relaxed text-sm lg:text-base">
                      A product geek that has designed for the biggest brands in
                      Italy, Hong Kong, and Australia. Represented his country
                      in the World User Experience Championship as a top 10
                      finalist.
                      <br />
                      <br /> Before SGF, ran a community of devs and designers
                      that at its peak was 100+ members strong. Now using that
                      experience to help build the SGF community!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-10 text-white">
                <div className="flex flex-col justify-start lg:flex-row lg:items-start lg:space-x-5">
                  <img src={Skywalker} alt="" className="" />
                  <div className="mt-5 lg:mt-0">
                    <p className="text-lg font-black">
                      @skywalker{" "}
                      <span className="font-normal text-sm">
                        | Game Server Engineering/Devops
                      </span>
                    </p>
                    {/* <p className="mt-1 text-sm font-bold">
                      Game Server Engineering/Devops
                    </p> */}
                    <p className="mt-8 leading-relaxed text-sm lg:text-base">
                      A dev that started coding from the age of 15.
                      <br />
                      <br /> Currently writing game server code to wrangle 100k
                      - 1 million game state updates and how to publish these
                      game states on Solana.
                      <br />
                      <br /> Expertise in Golang and GraphQL.
                      <br />
                      <br /> Before SGF, built out crypto staking DApp that
                      currently has over $100k staked through it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="max-w-4xl mx-auto hidden lg:block">
            <div className="font-orb text-white mt-20 flex justify-between">
              <div className="space-y-2 w-1/3">
                <img src={Kayden} alt="" className="mx-auto" />
                <p className="text-center">@kayden</p>
                <p className="mt-2 text-center text-sm">
                  10x developer building across DeFi, NFT & blockchain gaming.
                </p>
              </div>
              <div className="space-y-2 w-1/3">
                <img src={NonFungiblePrime} alt="" className="mx-auto" />
                <p className="text-center">@nonfungibleprime</p>
                <p className="mt-2 text-center text-sm">
                  A crypto-native entrepreneur and an avid consumer of Sci-Fi
                  content.
                </p>
              </div>
              <div className="space-y-2 w-1/3">
                <img src={Greywolf} alt="" className="mx-auto" />
                <p className="text-center">@greywolf</p>
                <p className="mt-2 text-center text-sm">
                  A designer researching and designing for all things Crypto &
                  Web 3.0.
                </p>
              </div>
            </div>
            <div className="font-orb text-white mt-16 flex justify-evenly">
              <div className="space-y-2 w-2/5">
                <img src={Alphatron} alt="" className="mx-auto" />
                <p className="text-center">@alphatron</p>
                <p className="mt-2 text-center text-sm">
                  Product ∩ UX ∩ Blockchain Guy. Often wondering about the
                  'whys' & 'whats' of Web3.0 space.
                </p>
              </div>
              <div className="space-y-2 w-2/5">
                <img src={Skywalker} alt="" className="mx-auto" />
                <p className="text-center">@skywalker</p>
                <p className="mt-2 text-center text-sm">
                  A full-time builder focused on the Web3 space. Building cool
                  products & diving into protocols.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="max-w-4xl mx-auto lg:hidden block">
            <div className="grid grid-cols-2 font-orb text-white mt-10 gap-5">
              <div className="space-y-2">
                <img
                  src={Kayden}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@kayden</p>
                <p className="mt-2 text-center text-xs">
                  10x developer building across DeFi, NFT & blockchain gaming.
                </p>
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
                <p className="mt-2 text-center text-xs">
                  A crypto-native entrepreneur and an avid consumer of Sci-Fi
                  content.
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src={Greywolf}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@greywolf</p>
                <p className="mt-2 text-center text-xs">
                  A designer researching and designing for all things Crypto &
                  Web 3.0.
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src={Alphatron}
                  alt=""
                  className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
                />
                <p className="text-center">@alphatron</p>
                <p className="mt-2 text-center text-xs">
                  Product ∩ UX ∩ Blockchain Guy. Often wondering about the
                  'whys' & 'whats' of Web3.0 space.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-5 font-orb text-white">
              <img
                src={Skywalker}
                alt=""
                className="mx-auto w-30 h-30 lg:w-auto lg:h-auto"
              />
              <p className="text-center ">@skywalker</p>
              <p className="mt-2 text-center text-xs w-2/3 mx-auto">
                A full-time builder focused on the Web3 space. Building cool
                products & diving into protocols.
              </p>
            </div>
          </div> */}
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

export default Landing;
