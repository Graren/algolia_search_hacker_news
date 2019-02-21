import React from "react";
import cs from "classnames";
import SearchBar from "../SearchBar";
import styles from "./style.module.scss";

const HNL = "https://hn.algolia.com/assets/logo-hn-search.png";

class Header extends React.Component {
  _onChangeSearchBartext = text => {
    const { changeText } = this.props;
    changeText(text);
  };

  render() {
    const { text: searchBarText } = this.props;
    return (
      <div className={cs([styles.container, styles.headerContainer])}>
        <div className={styles.headerRowContainer}>
          <div className={cs(styles.imgContainer)}>
            <img src={HNL} className={cs(styles.img)} alt={"logo"} />
          </div>
          <div className={cs(styles.titleContainer)}>
            <p className={cs(styles.title)}>HackerNews Algolia Search</p>
          </div>
        </div>
        <div className={styles.headerRowContainer}>
          <SearchBar
            onChange={this._onChangeSearchBartext}
            value={searchBarText}
          />
        </div>
      </div>
    );
  }
}

export default Header;
