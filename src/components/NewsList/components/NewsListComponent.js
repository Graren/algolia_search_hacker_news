import React from "react";
import NewsElement from "./NewsElement";

class NewsList extends React.PureComponent {
  render() {
    const { articles } = this.props;
    return (
      <React.Fragment>
        {articles.filter(art => !!art.title).map(hit => (
          <NewsElement key={hit.objectID} {...hit} />
        ))}
      </React.Fragment>
    );
  }
}

export default NewsList;
