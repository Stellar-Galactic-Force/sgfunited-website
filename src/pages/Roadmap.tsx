import React, { useEffect, useRef } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import Nav from "../components/Nav";

import Ship from "../assets/roadmap/ship.png";
import RoadmapImage from "../assets/roadmap/roadmap.svg";

import LogoImage from "../assets/common/Logo.svg";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

import useScrollToTop from "../lib/useScrollToTop";

function Roadmap(props: RouteComponentProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingSpan = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    headingRef.current?.classList.remove("opacity-0");

    headingSpan.current?.classList.add("glow");
  }, []);

  useScrollToTop();
  return (
    <div style={{ background: "#101010" }}>
      <Nav />
      <div
        id="roadmap-hero"
        className="w-full h-screen py-44 relative bg-center bg-cover"
      >
        <h1
          className="text-primary-light text-6xl uppercase font-black italic text-center duration-700 transition-all ease-out opacity-0"
          ref={headingRef}
        >
          <span ref={headingSpan} className="transition-all delay-700">
            Roadmap
          </span>
        </h1>
        <img src={Ship} alt="Super Cool Spaceship" className="mt-10 mx-auto" />
      </div>
      <div className="text-white ml-5 mr-10 lg:mx-48 -mt-48 relative z-10">
        <div className="flex">
          <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full flex-shrink-0 mt-1 lg:mr-10 mr-5 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="lg:h-4 lg:w-4 h-3 w-3 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div className="w-full">
            <h3 className="font-orb lg:text-2xl text-xl font-medium uppercase">
              Q3 2021 - Force Formation
            </h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    Gen-1 Cyborg NFT drop (2000)
                  </h4>
                  <div className="flex flex-wrap text-sm">
                    <p className="mr-3">Mint: 0.42069 SOL</p>
                    <p className="mr-3">Supply: 2k</p>
                    <p className="mr-3">Date: 30th September, 6PM UTC</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  The first enlistment into the 5 forces starts.
                  <p className="mt-5">
                    Only the bravest souls are granted passage and take their
                    rightful place. <br />
                    Everything that may go wrong will go wrong.
                  </p>
                  <p className="mt-5">
                    Still, they believe that all is not lost and want to give
                    humanity a fighting chance.
                  </p>
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    Gen-1 Cyborg NFT drop (8000)
                  </h4>
                  <div className="flex flex-wrap text-sm">
                    <p className="mr-3">Mint: 0.99 SOL</p>
                    <p className="mr-3">Supply: 8k</p>
                    <p className="mr-3">Date: 7th October, 6PM UTC</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p>
                    The second enlistment into the 5 forces starts. <br />
                    Each force finally gets there 100 generals, 400 lieutenants,
                    1500 soldiers.
                  </p>
                  <p className="mt-5">
                    Generals start to coordinate to build out their factions
                    while lieutenants and soldiers work together to set up
                    barracks and weapon machinery factories.{" "}
                  </p>
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    GEN-1 SECONDARY MARKETPLACE LISTING LAUNCHED
                  </h4>
                  <div className="text-sm">
                    <p>Date: 7th October, 6PM UTC</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p className="mt-5">
                    SGF Media House partners with most of the leading
                    marketplaces to launch secondary marketplace listing.
                  </p>
                  <p className="mt-5">
                    Cyborgs are available on four marketplaces currently -
                    <ul className="mt-5 list-disc list-inside space-y-2">
                      <li>
                        <a
                          href="http://bit.ly/3BjI8GO"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary-light glow underline"
                        >
                          MagicEden
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://bit.ly/3oMQByP"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary-light glow underline"
                        >
                          Solanart
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://solsea.io/collection/616038fd6d3154c2fc608fff"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary-light glow underline"
                        >
                          Solsea
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://digitaleyes.market/collections/SGF%20United"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary-light glow underline"
                        >
                          DigitalEyez
                        </a>
                      </li>
                    </ul>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:mt-30 mt-16">
          <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full flex-shrink-0 mt-1 lg:mr-10 mr-5 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="h-3 w-3 lg:h-4 lg:w-4 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div>
            <h3 className="font-orb lg:text-2xl text-xl font-medium uppercase">
              Q4 2021 - SGF TRIDENT DEPLOYED
            </h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    SGF ECOSYSTEM FUND ROLLS OUT GRANTS PROGRAM
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p>Having blueprints from the future is not enough.</p>
                  <p className="mt-5">
                    SGF requires a healthy functioning economy to rapidly
                    accelerate humanity’s technological progress.
                  </p>
                  <p className="mt-5">
                    A rolling grants program is initialized to fund
                    entrepreneurs and builders.
                  </p>
                  <br /> <br />
                  Grant’s mandate: build out the media network layer of the
                  media house. <br />
                  <br />
                  Grant levels planned: <br />
                  <br />
                  Level 1 proposals - {"<="} $1000 worth SOL, SPL-USDC <br />
                  Level 2 proposals - {"<="} $5000 worth SOL, SPL-USDC <br />
                  Level 3 proposals - {">="} $10,000 worth SOL, SPL-USDC
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    FLOOR SWEEPING 📈
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p>
                    SGF Media House starts sweeping Gen-1 NFT Cyborg collection
                    floor due to routine maintenance.
                  </p>
                  <p className="mt-5">
                    After enough stress testing has been done, these are then
                    brought back into the economy in the form of giveaways to
                    the most committed soldiers/factions in SGF.
                  </p>
                  <p className="mt-5">
                    This creates deflation in the short term as circulating
                    supply is reduced.
                  </p>
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    DONATION FOR DISABLED VETERANS
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p>
                    True Cyborgs = the people who served their country + had to
                    become a cyborg due to injuries from the war.
                  </p>
                  <p className="mt-5">
                    After all legal paperwork is finished, the first tranche of
                    the donation will be processed.
                  </p>
                  <p className="mt-5">
                    Veterans join us on our galactic podcast to share their
                    stories.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-30 mt-16 flex">
          <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full flex-shrink-0 mt-1 lg:mr-10 mr-5 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="h-3 w-3 lg:h-4 lg:w-4 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div>
            <h3 className="font-orb lg:text-2xl text-xl font-medium uppercase">
              Q1 2022
            </h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    GEN-2 AR COMPATIBLE 3D CYBORGS NFT LAUNCH
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  <p>
                    After rapid progress over the last quarter, it’s time to
                    scale the force with more troops.{" "}
                  </p>
                  <p className="mt-5">
                    20k (subject to change) badass 3D Cyborgs will join SGF’s
                    media house.{" "}
                  </p>
                  <p className="mt-5">
                    The owner of the NFT gets access to the assets -
                    high-resolution renders and a T Pose OBJ file that can be
                    imported into standard 3D modeling/animation software.
                  </p>
                  <p className="mt-5">
                    Imagine your Cyborg blazing guns in Augmented Reality. This
                    is it.
                  </p>
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    GEN-2 3D CYBORGS MARKETPLACE LISTING
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-7 font-medium text-gray">
                  3.5% of secondary royalties are disbursed pro-rata to Gen 1
                  holders.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    NEURAL FUSION OF CYBORGS NFT
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  Fusing 2 Cyborgs together create 1 Special Cyborg which
                  inherit traits from both.
                  <br />
                  Fusing 2 Special Cyborgs create 1 Super Special Cyborg.
                  <br /> Fusing 2 Super Special Cyborg create 1 Cyborg.
                  <br />
                  <br />
                  You catch the drift.
                  <br /> Combined with floor sweeping, this measure further
                  creates deflationary pressures on the circulating supply.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline flex-col lg:flex-row">
                  <h4 className="font-black italic uppercase text-xl">
                    SGF FLAGSHIP FIGHTER GAME DEMO LAUNCH
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  After first and third-party NFT drops, SGF Media House starts
                  arming itself with another IP drop.
                  <br />
                  <br /> What would a Tekken meets Aliens vs Predators game look
                  like? <br />
                  Come find out.
                  <br />
                  <br /> Pst. 0.05% of take rate of the game is pooled for
                  staking rewards for Gen 1 Cyborg holders. Read tokenomics page
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1 lg:mx-2.5 mx-1.5 mt-2 rounded-full absolute top-0 left-0 bg-primary-light"
          style={{ height: `calc(100% + 111px)` }}
        ></div>
      </div>
      <div className="mt-30">
        <img src={RoadmapImage} alt="roadmap" className="w-full" />
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
              to="/tokenomics"
              className="footer-btn-primary font-black mt-4 lg:mr-3 w-full lg:w-auto"
            >
              TOKENOMICS
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

export default Roadmap;
