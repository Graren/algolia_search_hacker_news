import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";
import OptionsElement from "./OptionElement";

class OptionsBar extends React.PureComponent {
  render() {
    const { search, sort, date, selectedOptions } = this.props;
    return (
      <div className={cs(styles.optionsBarWrapper)}>
        <div className={cs(styles.optionsBarContainer)}>
          <OptionsElement
            selectedOption={selectedOptions.search}
            options={search.options}
            onChange={search.onSelect}
          />
          <OptionsElement
            selectedOption={selectedOptions.sort}
            options={sort.options}
            onChange={sort.onSelect}
          />
          <OptionsElement
            selectedOption={selectedOptions.date}
            options={date.options}
            onChange={date.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default OptionsBar;
