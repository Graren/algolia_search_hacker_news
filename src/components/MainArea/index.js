import React from "react";
import cs from "classnames";
import NewsList from "../NewsList";
import styles from "./style.module.scss";

class MainArea extends React.Component {
  render() {
    return (
      <div className={cs(styles.mainContent)}>
        <div className={cs(styles.displayArea)}>
          <NewsList />
        </div>
      </div>
    );
  }
}

export default MainArea;
