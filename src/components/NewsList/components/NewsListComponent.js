import React from "react";
import NewsElement from "./NewsElement";
import { hits } from '../../../data/dummyHits'

class NewsList extends React.PureComponent {
  componentDidMount = () => {
    const { text: searchBarText } = this.props;
    console.log(searchBarText);
  };

  componentDidUpdate = prevProps => {
    const { text: searchBarText } = prevProps;
    if (prevProps.searchBarText !== this.props.searchBarText)
      console.log(searchBarText);
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {hits.map(hit => (
          <NewsElement key={hit.objectID} {...hit} />
        ))}
      </React.Fragment>
    );
  }
}

export default NewsList;
