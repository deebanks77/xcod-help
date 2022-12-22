import React from "react";
import logoVerse from "../images/xcodLogos/logoVerse.png";
import qrVerseLogo from "../images/xcodLogos/QRVerseLogo.png";
import storiLogo from "../images/xcodLogos/STORI-LOGO.png";
import { useGlobalContext } from "../useContext/globalContext";

function OurProducts() {
  const { articles, setArticles } = useGlobalContext();
  console.log(articles);

  return (
    <section className="max-w-sectionWidth w-full text-white mt-10">
      <h1 className="font-bold text-[28px] text-center mb-[20px]">
        Our Products
      </h1>

      <div className="products-container w-[90%] max-w-[1200px] mx-auto border border-transparent ipadMini:flex items-center justify-center gap-3">
        <div
          className=" ipadMini:w-[32%] ipadMini:h-[200px] bg-[#308CE3] rounded-lg flex items-center justify-center py-3 mb-[10px]"
          onClick={() => setArticles("logoVerseArticles")}
        >
          <img
            src={logoVerse}
            alt="Introverse Logo"
            className="w-[200px] h-[50px] object-contain"
          />
        </div>

        <div
          className="ipadMini:w-[32%] ipadMini:h-[200px] bg-[#8094EB] rounded-lg flex items-center justify-center py-3 mb-[10px]"
          onClick={() => setArticles("storiArticles")}
        >
          <img
            src={storiLogo}
            alt="stori Logo"
            className="w-[200px] h-[50px] object-contain"
          />
        </div>

        <div
          className="ipadMini:w-[32%] ipadMini:h-[200px] bg-[#0B2F8F] rounded-lg flex items-center justify-center py-3 mb-[10px]"
          onClick={() => setArticles("qrVerseArticles")}
        >
          <img
            src={qrVerseLogo}
            alt="qrVerse Logo"
            className="w-[200px] h-[50px] object-contain"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-[1200px] h-[5px] mx-auto border border-transparent rounded-md ipadMini:flex items-center justify-center gap-3 bg-gray-400 mt-8">
        <div
          className={`ipadMini:w-[32%] h-full ${
            articles === "logoVerseArticles" && "bg-[#0B2F8F]"
          }`}
        ></div>
        <div
          className={`ipadMini:w-[32%] h-full ${
            articles === "storiArticles" && "bg-[#0B2F8F]"
          }`}
        ></div>
        <div
          className={`ipadMini:w-[32%] h-full ${
            articles === "qrVerseArticles" && "bg-[#0B2F8F]"
          }`}
        ></div>
      </div>
    </section>
  );
}

export default OurProducts;

// #308CE3
// #8094EB
// #0B2F8F
