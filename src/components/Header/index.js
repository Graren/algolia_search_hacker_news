import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

const HNL =
  "https://hn.algolia.com/assets/logo-hn-search.png";

class Header extends React.Component {
  render() {
    return (
      <div className={cs([styles.container, styles.headerContainer])}>
        <div className={cs(styles.imgContainer)}>
          <img src={HNL} className={cs(styles.img)} alt={'logo'}/>
        </div>
        <div className={cs(styles.titleContainer)}>
          <p className={cs(styles.title)}>HackerNews Algolia Search</p>
        </div>
      </div>
    );
  }
}

export default Header;
