import React, { Component } from "react";
import Header from "./containers/Header";
import MainArea from "./containers/MainArea";
import { TextProvider } from "./Context/SearchBarTextContext";
import ArticlesProvider from "./containers/ArticlesProviderContainer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TextProvider>
          <Header />
          <ArticlesProvider>
            <MainArea />
          </ArticlesProvider>
        </TextProvider>
      </div>
    );
  }
}

export default App;
