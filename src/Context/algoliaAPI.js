import React, { useState, useEffect } from "react";

const initialState = []

const { Provider, Consumer: ArticlesConsumer } = React.createContext();

const ArticlesProvider = ({ text, children }) => {
  const [articles, setArticles] = useState(initialState);

  useEffect(() => {
    setArticles([...articles, text]);
  }, [text]);

  const value = {
      articles,
  }

  return <Provider value={value}>{children}</Provider>;
};

export { ArticlesProvider, ArticlesConsumer };
