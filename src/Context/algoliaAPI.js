import React, { useState, useEffect } from "react";
import { search } from "../api";
import { debounce } from "../utils/throttle";

const initialState = [];

const { Provider, Consumer: ArticlesConsumer } = React.createContext();

const _fetchArticles = async (setArticles, text, tags) => {
  const data = await search(text, tags);
  setArticles(data.hits);
};

const fetchArticles = debounce(_fetchArticles, 500);

const ArticlesProvider = ({ text, children }) => {
  const [articles, setArticles] = useState(initialState);

  useEffect(() => {
    fetchArticles(setArticles, text, { tags: [], page: 1 });
  }, [text]);

  const value = {
    articles
  };

  return <Provider value={value}>{children}</Provider>;
};

export { ArticlesProvider, ArticlesConsumer };
