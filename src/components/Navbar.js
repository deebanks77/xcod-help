import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { storiLogo } from "../images/storiImages";
import xcodLogo from "../images/xcodLogos/xcodLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

// import { useGlobalContext } from "../useContext/globalContext";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("closeHamburgerNav")) {
      setShow(false);
      return;
    }
  });

  const handleHamburger = () => {
    setShow(true);
  };

  //   console.log(useGlobalContext());

  return (
    <section className="section max-w-sectionWidth w-full px-0 text-[#E8E8E9] border-b-[1px] border-b-[#3f4041]">
      <nav className="nav flex items-center justify-between w-[90%] max-w-[1200px] my-0 mx-auto">
        <div className="flex items-center justify-between gap-7 py-4">
          <Link to="/">
            <div className="flex items-center gap-0 ml-[-28px]">
              <img
                src={xcodLogo}
                alt="xcod"
                className="w-[100px] h-[30px] object-contain"
              />
              <span className="text-[18px] font-bold ml-[-30px]">COD</span>
            </div>
          </Link>

          <ul className="nav-list hidden iPad:flex items-center justify-between gap-7 transition ease-in-out">
            <Link to="/article">
              <li className="px-[10px] py-[5px] border border-transparent hover:bg-[#28292B] rounded-lg transition duration-500 ease-in-out">
                Home
              </li>
            </Link>
            <Link to="/faq">
              <li className="px-[10px] py-[5px] border border-transparent hover:bg-[#28292B] rounded-lg transition-all duration-500 ease-in-out">
                Products
              </li>
            </Link>
            <Link to="/contact-support">
              <li className="px-[10px] py-[5px] border border-transparent hover:bg-[#28292B] rounded-lg transition duration-500 ease-in-out">
                Support
              </li>
            </Link>
          </ul>
        </div>

        <a
          href="https://app.storiapp.io/auth/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden iPad:block"
        >
          <button className="px-5 py-[5px] bg-[#8B3DFF] w-[150px] text-[16px] tablet:text-[18px] border border-transparent cursor-pointer rounded-lg ">
            What's New!
          </button>
        </a>

        <RxHamburgerMenu
          onClick={handleHamburger}
          className={`hamburger block iPad:hidden text-white cursor-pointer ${
            show ? "show" : ""
          }`}
        />
      </nav>

      <div
        className={`closeHamburgerNav fixed top-0  w-[280px] h-full z-10 transition-all bg-[#252627] iPad:hidden ${
          show ? "right-0" : "right-[-100%]"
        } `}
        // onClick={handleClose}
      >
        <FaTimes
          onClick={handleClose}
          className={`absolute top-5 right-5 cursor-pointer text-[20px] hover:text-[crimson] `}
        />

        <div className="hamburgerNav-setting pt-14 px-[20px] flex flex-col items-left gap-5">
          <ul className="hamburgerNavlist list-none flex flex-col items-left gap-5">
            <li
              className="nav-btn px-[10px] py-[5px] border border-transparent hover:bg-[#343536] rounded-lg transition duration-500 ease-in-out"
              onClick={handleClose}
            >
              <Link to="/article">Home</Link>{" "}
            </li>
            <li
              className="nav-btn px-[10px] py-[5px] border border-transparent hover:bg-[#343536] rounded-lg transition duration-500 ease-in-out"
              onClick={handleClose}
            >
              <Link to="/faq">Products</Link>{" "}
            </li>
            <li
              className="nav-btn px-[10px] py-[5px] border border-transparent hover:bg-[#343536] rounded-lg transition duration-500 ease-in-out"
              onClick={handleClose}
            >
              <Link to="/contact-support">Support</Link>{" "}
            </li>
          </ul>

          <a
            href="https://app.storiapp.io/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={handleClose}
              className="button px-5 py-[5px] bg-[#9E77F3] hover:bg-[#1DABEA] w-[150px] text-[16px] tablet:text-[18px] border border-transparent cursor-pointer rounded-lg transition duration-500 ease-in-out"
            >
              What's Next!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
