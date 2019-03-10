import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={cs(styles.footerContainer)}>
        <div className={cs(styles.footer)}>Made by Oscar Colmenares</div>
      </div>
    );
  }
}

export default Footer;
