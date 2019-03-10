import React from "react";
import { connectContext } from "react-connect-context";
import OptionsBar from "../../components/OptionsBar";
import { OptionsConsumer } from "../../Context/OptionsContext";

class OptionsBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { options } = this.props;
    this.state = {
      search: {
        options: options.search.options,
        onSelect: this._selectSearch
      },
      sort: {
        options: options.sort.options,
        onSelect: this._selectSort
      },
      date: {
        options: options.sort.options,
        onSelect: this._selectSort
      }
    };
  }

  _selectSearch = option => {};

  _selectDate = option => {};

  _selectSort = option => {};

  render() {
    const { search, sort, date } = this.state;
    const { selectedOptions } = this.props;
    return (
      <OptionsBar
        search={search}
        sort={sort}
        date={date}
        selectedOptions={selectedOptions}
      />
    );
  }
}
// use recompose to mapOptions Consumer props
const ConnectedOptionsComponent = connectContext(OptionsConsumer)(
  OptionsBarContainer
);

export default ConnectedOptionsComponent;
