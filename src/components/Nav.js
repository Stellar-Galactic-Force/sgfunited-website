import { useState } from "react";
import { Link, useLocation } from "@reach/router";

import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

import LogoImage from "../assets/common/Logo.svg";

function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="text-white bg-black fixed z-20 top-0 inset-x-0 hidden lg:flex flex-col">
        <div className="bg-gradient-to-r from-red-600 to-red-800 py-2 text-center px-16 uppercase font-bold italic">
          | Sale 1 • 2k Supply • SOLD OUT IN 4 MINUTES | Sale 2 • 8k Supply •
          SOLD OUT IN 6 MINUTES |
        </div>
        <div className="flex justify-between items-center mt-auto flex-1 px-16 pb-3 pt-4">
          <div className="flex items-center space-x-10">
            <div>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <nav className="font-orb font-medium text-sm uppercase">
              <ul className="flex space-x-7">
                <li>
                  <Link
                    to="/nft"
                    className={
                      pathname === "/nft" && "text-primary-light nav-glow"
                    }
                  >
                    gen-1 nft drop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roadmap"
                    className={
                      pathname === "/roadmap" && "text-primary-light nav-glow"
                    }
                  >
                    roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tokenomics"
                    className={
                      pathname === "/tokenomics" &&
                      "text-primary-light nav-glow"
                    }
                  >
                    tokenomics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/game"
                    className={
                      pathname === "/game" && "text-primary-light nav-glow"
                    }
                  >
                    PvP Game
                  </Link>
                </li>
                <li>
                  <a href={pathname === "/" ? "#team" : "/#team"}>team</a>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className={
                      pathname === "/faq" && "text-primary-light nav-glow"
                    }
                  >
                    faq
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-7 text-2xl">
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
      </header>

      <header className="text-white bg-black fixed z-20 top-0 inset-x-0  lg:hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-800 py-3 text-center uppercase font-bold italic text-xs">
          | Sale 1 • 2k Supply • SOLD OUT IN 4 MINUTES | Sale 2 • 8k Supply •
          SOLD OUT IN 6 MINUTES |
        </div>
        <nav className="flex justify-between items-center w-full h-16 px-5">
          <Link to="/">
            <Logo />
          </Link>
          <button onClick={() => setMenuOpen((st) => !st)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
        <nav
          className={`mt-5 text-xl font-orb pb-6 px-5 font-medium ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-5 uppercase">
            <li>
              <Link
                to="/nft"
                className={pathname === "/nft" && "text-primary-light nav-glow"}
              >
                Gen-1 NFT drop
              </Link>
            </li>
            <li>
              <Link
                to="/roadmap"
                className={
                  pathname === "/roadmap" && "text-primary-light nav-glow"
                }
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="/tokenomics"
                className={
                  pathname === "/tokenomics" && "text-primary-light nav-glow"
                }
              >
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={pathname === "/faq" && "text-primary-light nav-glow"}
              >
                FAQs
              </Link>
            </li>
          </ul>
          <div className="mt-10">
            <div className="flex space-x-5 text-2xl">
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
        </nav>
      </header>
    </>
  );
}

export default Nav;

export const Logo = () => <img src={LogoImage} alt="Logo" />;

const MenuIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.25 8.125H22.75C23.647 8.125 24.375 7.397 24.375 6.5C24.375 5.603 23.647 4.875 22.75 4.875H3.25C2.353 4.875 1.625 5.603 1.625 6.5C1.625 7.397 2.353 8.125 3.25 8.125ZM22.75 11.375H3.25C2.353 11.375 1.625 12.103 1.625 13C1.625 13.897 2.353 14.625 3.25 14.625H22.75C23.647 14.625 24.375 13.897 24.375 13C24.375 12.103 23.647 11.375 22.75 11.375ZM22.75 17.875H3.25C2.353 17.875 1.625 18.603 1.625 19.5C1.625 20.397 2.353 21.125 3.25 21.125H22.75C23.647 21.125 24.375 20.397 24.375 19.5C24.375 18.603 23.647 17.875 22.75 17.875Z"
      fill="white"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1365 13.0004L21.822 6.31492C22.0593 6.07751 22.0593 5.69333 21.822 5.45599L20.5443 4.17776C20.4305 4.06403 20.2761 4 20.1149 4C19.9537 4 19.7993 4.06403 19.6855 4.17776L13 10.8637L6.31457 4.17776C6.20077 4.06403 6.04635 4 5.88513 4C5.72395 4 5.56949 4.06403 5.45573 4.17776L4.17805 5.45599C3.94065 5.69333 3.94065 6.07751 4.17805 6.31492L10.8635 13.0004L4.17871 19.6851C3.94143 19.9225 3.94143 20.3067 4.17871 20.544L5.45648 21.8222C5.57019 21.936 5.72466 22 5.88587 22C6.04709 22 6.20152 21.936 6.31535 21.8222L13 15.1371L19.6846 21.8222C19.7984 21.936 19.9529 22 20.1141 22C20.2753 22 20.4298 21.936 20.5435 21.8222L21.8212 20.544C22.0585 20.3067 22.0585 19.9225 21.8212 19.6851L15.1365 13.0004Z"
      fill="white"
    />
  </svg>
);
