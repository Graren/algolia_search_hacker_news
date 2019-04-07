import React, { useState, useEffect } from "react";
import { search } from "../api";

const initialState = [];

const { Provider, Consumer: ArticlesConsumer } = React.createContext();

const ArticlesProvider = ({ text, children }) => {
  const [articles, setArticles] = useState(initialState);

  useEffect(() => {
    const fetchArticles = async (text, tags) => {
      const data = await search(text, tags);
      setArticles(data);
    };
    fetchArticles(text, { tags: [], page: 1 });
  }, [text]);

  const value = {
    articles
  };

  return <Provider value={value}>{children}</Provider>;
};

export { ArticlesProvider, ArticlesConsumer };
