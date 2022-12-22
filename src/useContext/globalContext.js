import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [articles, setArticles] = useState("storiArticles");
  const [articlesCategory, setArticlesCategory] = useState("all");

  const datas = {
    articles,
    setArticles,
    articlesCategory,
    setArticlesCategory,
  };
  return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
