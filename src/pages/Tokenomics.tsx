import { Link, RouteComponentProps } from "@reach/router";
import Nav from "../components/Nav";

import RevenueShare from "../assets/tokenomics/revenue-share.svg";
import RoyaltyBreakdwon from "../assets/tokenomics/royalty-breakdown-mobile.svg";
import Summary from "../assets/tokenomics/summary-illustration.svg";
import SummaryMobile from "../assets/tokenomics/summary-mobile.svg";
import { useEffect, useRef } from "react";
import useScrollToTop from "../lib/useScrollToTop";

function Tokenomics(props: RouteComponentProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.classList.remove("opacity-0");
  }, []);

  useScrollToTop();
  return (
    <div className="min-h-screen pb-30" style={{ background: "#101010" }}>
      <Nav />
      <main>
        {/* Hero section */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center lg:pt-56 lg:pb-44 lg:px-0   px-24 py-44"
          id="tokenomics-hero"
        >
          <h1
            className="text-center text-white font-black italic lg:text-7xl text-5xl transition-all opacity-0 duration-700"
            ref={headingRef}
          >
            WHERE NFT ⛓<br />
            MEETS <span className="text-primary-light glow">SCI-FI</span>
          </h1>
        </div>
        <div className="lg:mt-24 mt-10 mx-5">
          <h2 className="lg:text-5xl text-4xl font-black italic text-primary-light glow uppercase text-center px-10">
            Let's get started
          </h2>
          <div>
            <div className="hidden lg:block">
              <p className="text-center text-white font-orb font-black lg:text-3xl text-2xl uppercase mt-20">
                💸 <br />
                30% of
                <br />{" "}
                <span className="text-primary-dark">secondary royalties</span>
                <br /> from GEN 1 CYBORG SALES
                <br /> DIRECTLY INVESTED INTO THE COMMUNITY
              </p>
              <img
                src={RevenueShare}
                alt="Revenue split"
                className="mt-10 mx-auto"
              />
            </div>
            <img
              src={RoyaltyBreakdwon}
              className="block lg:hidden mx-auto mt-16"
              alt=""
            />
            <p className="text-center text-white font-orb font-black lg:text-3xl text-2xl uppercase mt-24">
              💸
              <br /> 3.5% of
              <br />{" "}
              <span className="text-primary-dark">secondary royalties</span>
              <br /> FROM all future NFT drops sales
              <br /> disbursed pro-rata
              <br /> to{" "}
              <span className="text-primary-dark">GEN 1 CYBORG HOLDERS</span>
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 font-orb font-black text-lg text-white uppercase mt-16 max-w-7xl mx-auto">
              <div className="text-center">
                <p>drop 1</p>
                <p className="text-primary-dark">
                  AR compatible gen-2
                  <br /> 3d cyborgs
                </p>
              </div>
              <div className="text-center">
                <p>drop 2</p>
                <p className="text-primary-dark">
                  SGF ECOSYSTEM
                  <br /> FUNDED ARTIST DROP
                </p>
              </div>
              <div className="text-center">
                <p>drop 3</p>
                <p className="text-primary-dark">
                  SGF ECOSYSTEM
                  <br /> FUNDED TEAM DROP
                </p>
              </div>
            </div>
            <p className="text-center mt-36 text-white font-orb font-black lg:text-3xl text-2xl uppercase mx-auto max-w-5xl">
              💸
              <br /> 0.5% of
              <br /> <span className="text-primary-dark">taKE RATE</span> FROM
              <br /> SGF’s FLAGSHIP FIGHTER GENRE GAME
              <br /> IS ALLOCATED TO{" "}
              <span className="text-primary-dark">
                EARLY BELEIVERS STAKE POOL
              </span>
              <br />
              <br /> STAKING{" "}
              <span className="text-primary-dark">GEN-1 CYBORG</span> to the
              above POOL ACCRUES <br />
              <span className="text-primary-dark">
                PRO-RATA STAKING REWARDS
              </span>
            </p>
            <div className="mt-44">
              <h3 className="lg:text-5xl text-4xl text-center lg:text-left font-black italic text-primary-light glow uppercase lg:ml-40">
                Summary
              </h3>
              <img
                src={Summary}
                alt="Summary"
                className="-mt-10 w-full hidden lg:block"
              />
              <img
                src={SummaryMobile}
                alt="Summary"
                className="w-full block lg:hidden mt-10"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="mt-12 font-orb">
        <p className="text-sm font-medium text-gray text-center font-inter mx-10">
          Can’t find an answer to your query? Don’t worry, we’ve got your
          back...
        </p>
        <div className="flex flex-wrap justify-center items-center">
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
    </div>
  );
}

export default Tokenomics;
