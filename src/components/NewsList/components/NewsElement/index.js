import React from "react";
import cs from "classnames";
import styles from "./style.module.scss";

class NewsElement extends React.PureComponent {
  render() {
    const { title, url, points, author } = this.props;
    const displayData = [url, points, author];
    return (
      <div className={cs(styles.newsElementContainer)}>
        <div className={cs(styles.newsElementRow)}>
          <h4 className={cs(styles.newsElementRowTitle)}>{title}</h4>
        </div>
        <div className={cs(styles.newsElementRow)}>
          {displayData.map((data, index) => (
            <p
              className={cs([
                styles.newsElementSideData,
                index === 0 ? styles.firstSideData : false,
              ])}
            >
              {data}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsElement;
