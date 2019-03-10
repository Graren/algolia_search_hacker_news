import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class OptionsElement extends React.PureComponent {
  _onChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { selectedOption, options } = this.props;
    return (
      <div className={cs(styles.optionContainer)}>
        <select
          type="select"
          onChange={this._onChange}
          value={selectedOption}
          className={cs(styles.select)}
        >
          {options.map(opt => (
            <option key={opt.key} value={opt.key}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default OptionsElement;
