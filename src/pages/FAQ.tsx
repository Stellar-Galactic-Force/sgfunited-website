import React, { useEffect, useRef } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { Disclosure } from "@headlessui/react";

import Nav from "../components/Nav";
// import CyborgEyeShadow from "../assets/faq/cyborg-eye-shadow.png";

import LogoImage from "../assets/common/Logo.svg";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

import useScrollToTop from "../lib/useScrollToTop";

function FAQ(props: RouteComponentProps) {
  const faqs = [
    {
      question: "What is SGF United?",
      answer:
        "SGF United is building the first community-owned sci-fi media house on Solana. We want to build a media empire that rivals Star Wars! Our first intellectual property (IP) drop is going to be 10k Cyborg Suits NFTs",
    },
    {
      question: "What are SGF Cyborgs?",
      answer:
        "SGF Cyborgs are our first intellectual property (IP) drop. It is going to be algorithmically generated 10,000 NFT Cyborg Suits.",
    },
    {
      question: "How many Cyborgs are available?",
      answer: "10,000",
    },
    {
      question: "Is there a rarity based attribute system?",
      answer: "Yes, please read more about it on our Gen-1 NFT page.",
    },
    {
      question: "On which marketplaces can I buy the Cyborgs?",
      answer: "MagicEden, Solanart, DigitalEyez, and Solsea.",
    },
    {
      question: "How much will be royalties?",
      answer:
        "Royalties will be 7.5%. Plus, the fee of the marketplace which varies between 1.5-2.5%",
    },
    {
      question: "Do you have a long-term roadmap?",
      answer: "Yes, please read more about it on our Roadmap page.",
    },
  ];

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.classList.remove("opacity-0");
  }, []);

  useScrollToTop();

  return (
    <div style={{ background: "#101010" }} className="min-h-screen">
      <Nav />
      <main className="pt-44">
        <h1
          className="text-center text-primary-light glow text-5xl font-black italic transition-all opacity-0 duration-700"
          ref={headingRef}
        >
          FAQS
        </h1>
        <section className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-10 px-10 lg:px-52 mt-16">
          <div className="flex flex-col justify-center items-center">
            <iframe
              width="auto"
              height="auto"
              className="rounded-md overflow-hidden"
              src="https://www.youtube.com/embed/WpL3lAnVejg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="text-white mt-3">
              What is SGF United and what is a sci-fi media house?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <iframe
              width="auto"
              height="auto"
              className="rounded-md overflow-hidden"
              src="https://www.youtube.com/embed/UxMLHigzmcM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="text-white mt-3">
              What is the rarity system like for Gen-1 Cyborgs?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <iframe
              width="auto"
              height="auto"
              className="rounded-md overflow-hidden"
              src="https://www.youtube.com/embed/_cX52G2dgCg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="text-white mt-3">
              Why should I hold a Gen-1 NFT Cyborg - Part 1
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <iframe
              width="auto"
              height="auto"
              className="rounded-md overflow-hidden"
              src="https://www.youtube.com/embed/1eVSDpNuRvg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="text-white mt-3">
              Why should I hold a Gen-1 NFT Cyborg - Part 2
            </p>
          </div>
        </section>
        <section className="relative mt-10  lg:px-52 px-10">
          <dl className="space-y-5">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="border border-gray-light bg-gray-dark rounded-md p-5"
              >
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-dark focus:outline-none">
                        <span className="font-black italic uppercase text-white text-xl">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${open ? "-rotate-180" : "rotate-0"}
                              h-6 w-6 transform transition-all duration-200`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </section>
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
      </main>
    </div>
  );
}

export default FAQ;
