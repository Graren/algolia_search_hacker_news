import React, { Component } from "react";
import Header from "./containers/Header";
import MainArea from "./containers/MainArea";
import OptionsBar from "./containers/OptionsBarContainer";
import { TextProvider } from "./Context/SearchBarTextContext";
import { OptionsProvider } from "./Context/OptionsContext";
import ArticlesProvider from "./containers/ArticlesProviderContainer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TextProvider>
          <OptionsProvider>
            <Header />
            <OptionsBar />
            <ArticlesProvider>
              <MainArea />
            </ArticlesProvider>
          </OptionsProvider>
        </TextProvider>
      </div>
    );
  }
}

export default App;
