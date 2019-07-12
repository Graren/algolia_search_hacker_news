import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class NewsElement extends React.PureComponent {
  render() {
    const { title, url, points, author } = this.props;
    return (
      <div className={cs(styles.newsElementContainer)}>
        <div className={cs(styles.rowOnBig)}>
          <div className={cs(styles.newsElementTitleContainer)}>
            <h4 className={cs(styles.newsElementTitle)}>{title}</h4>
          </div>
          <div
            className={cs(styles.newsElementSubDataContainer, styles.rowOnBig, styles.containerOnBig)}
          >
            <div className={cs(styles.newsElementSubData)}>{author}</div>
            <div className={cs(styles.newsElementSubData)}>{points}</div>
          </div>
        </div>
        <div className={cs(styles.newsElementSubDataContainer, styles.newsElementUrlContainer)}>
          <a href={url} className={cs(styles.newsDataUrl)}>
            {url}
          </a>
        </div>
      </div>
    );
  }
}

export default NewsElement;
