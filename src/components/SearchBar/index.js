import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class SearchBar extends React.PureComponent {
  _onTextChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { text } = this.props;
    return (
      <div className={cs(styles.searchBarContainer)}>
        <input
          type="text"
          className={cs(styles.searchBar)}
          onChange={this._onTextChange}
          value={text}
        />
      </div>
    );
  }
}

export default SearchBar;
