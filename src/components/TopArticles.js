import React from "react";
import { Link } from "react-router-dom";
import { storiArticles, pro } from "../data/storiData";
import { logoverseArticles } from "../data/introverseData";
import { qrVerseArticles } from "../data/qrVerseData";
import { useGlobalContext } from "../useContext/globalContext";

function TopArticles() {
  const { articles, setArticles, articlesCategory, setArticlesCategory } =
    useGlobalContext();
  console.log(articles);

  return (
    <section className="max-w-sectionWidth w-full text-[#E8E8E9] mt-10">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <h2 className="font-bold text-[18px] text-center mb-4">Top Articles</h2>

        <div className="flex items-start justify-center gap-8">
          <div>
            <p
              className="mb-[10px] cursor-pointer"
              onClick={() => setArticlesCategory("all")}
            >
              All
            </p>
            <div
              className={`h-[3px] w-[20px] rounded ${
                articlesCategory === "all" && "bg-[#9E77F3]"
              }`}
            ></div>
          </div>
          <div>
            <p
              className="mb-[10px] cursor-pointer"
              onClick={() => setArticlesCategory("pro")}
            >
              pro
            </p>
            <div
              className={`h-[3px] w-[25px] rounded ${
                articlesCategory === "pro" && "bg-[#9E77F3]"
              }`}
            ></div>
          </div>
          <div>
            <p
              className="mb-[10px] cursor-pointer"
              onClick={() => setArticlesCategory("teams")}
            >
              Teams
            </p>
            <div
              className={`h-[3px] w-[45px] rounded ${
                articlesCategory === "teams" && "bg-[#9E77F3]"
              }`}
            ></div>
          </div>
          <div>
            <p
              className="mb-[10px] cursor-pointer"
              onClick={() => setArticlesCategory("Non-Profit")}
            >
              Non Profit
            </p>
            <div
              className={`h-[3px] w-[60px] rounded ${
                articlesCategory === "Non-Profit" && "bg-[#9E77F3]"
              }`}
            ></div>
          </div>
        </div>

        <article className="flex items-center justify-center gap-5 flex-wrap w-full mt-10">
          {articles === "storiArticles" &&
            storiArticles.map((item, index) => {
              const { title, content, page } = item;
              return (
                <Link to={`/article/${page}`} key={index}>
                  <div className="article w-full max-w-[500px] h-auto px-5 py-5 tablet:w-[280px] iPad:w-[220px] iPad2:w-[240px] laptop:w-[290px] laptop2:w-[325px] desktop:w-[370px] tablet:h-[200px] iPad:h-[265px] iPad2:h-[250px] laptop:h-[220px] laptop2:h-[200px] desktop:h-[180px] border border-[#303032] hover:border-[#727374] rounded-lg">
                    <h4 className="text-[#9E77F3] text-[15px] font-bold mb-[10px]">
                      {title}
                    </h4>
                    <p className="text-[15px]">{content}</p>
                  </div>
                </Link>
              );
            })}

          {articles === "logoVerseArticles" &&
            logoverseArticles.map((item, index) => {
              const { title, content, page } = item;
              return (
                <Link to={`/article/${page}`} key={index}>
                  <div className="article w-full max-w-[500px] h-auto px-5 py-5 tablet:w-[280px] iPad:w-[220px] iPad2:w-[240px] laptop:w-[290px] laptop2:w-[325px] desktop:w-[370px] tablet:h-[200px] iPad:h-[265px] iPad2:h-[250px] laptop:h-[220px] laptop2:h-[200px] desktop:h-[180px] border border-[#303032] hover:border-[#727374] rounded-lg">
                    <h4 className="text-[#9E77F3] text-[15px] font-bold mb-[10px]">
                      {title}
                    </h4>
                    <p className="text-[15px]">{content}</p>
                  </div>
                </Link>
              );
            })}

          {articles === "qrVerseArticles" &&
            qrVerseArticles.map((item, index) => {
              const { title, content, page } = item;
              return (
                <Link to={`/article/${page}`} key={index}>
                  <div className="article w-full max-w-[500px] h-auto px-5 py-5 tablet:w-[280px] iPad:w-[220px] iPad2:w-[240px] laptop:w-[290px] laptop2:w-[325px] desktop:w-[370px] tablet:h-[200px] iPad:h-[265px] iPad2:h-[250px] laptop:h-[220px] laptop2:h-[200px] desktop:h-[180px] border border-[#303032] hover:border-[#727374] rounded-lg">
                    <h4 className="text-[#9E77F3] text-[15px] font-bold mb-[10px]">
                      {title}
                    </h4>
                    <p className="text-[15px]">{content}</p>
                  </div>
                </Link>
              );
            })}
        </article>
      </div>
    </section>
  );
}

export default TopArticles;
