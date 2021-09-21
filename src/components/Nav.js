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
      <header className="text-white bg-black fixed z-20 top-0 inset-x-0 h-16 justify-between items-center px-16  hidden lg:flex">
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
                    pathname === "/tokenomics" && "text-primary-light nav-glow"
                  }
                >
                  tokenomics
                </Link>
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
      </header>

      <header className="text-white bg-black fixed z-20 top-0 inset-x-0 px-5 lg:hidden">
        <nav className="flex justify-between items-center w-full h-16">
          <Link to="/">
            <Logo />
          </Link>
          <button onClick={() => setMenuOpen((st) => !st)}>
            <MenuIcon />
          </button>
        </nav>
        <nav
          className={`bg-purple-800 mt-5 text-xl font-orb pb-6 font-medium ${
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

const Logo = () => <img src={LogoImage} alt="Logo" />;

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
