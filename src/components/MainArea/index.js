import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class MainArea extends React.Component {

  componentDidUpdate = prevProps => {
    const { text: searchBarText } = prevProps;
    if (prevProps.searchBarText !== this.props.searchBarText)
      console.log(searchBarText);
  };

  render() {
    const { text: searchBarText } = this.props;
    return (
      <div className={cs(styles.mainContent)}>
        <div className={cs(styles.displayArea)}>
          <p>{searchBarText}</p>
        </div>
      </div>
    );
  }
}

export default MainArea;
