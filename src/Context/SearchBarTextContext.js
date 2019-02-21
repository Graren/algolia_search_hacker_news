import React from "react";

const initialContextState = {
  text: "",
  changeText: () => {}
};

const { Provider, Consumer: TextConsumer } = React.createContext(
  initialContextState
);

class TextProvider extends React.PureComponent {
  state = {
    ...initialContextState
  };

  _changeText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <Provider value={{ ...this.state, changeText: this._changeText }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { TextProvider, TextConsumer };
