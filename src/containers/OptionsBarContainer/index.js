import React from "react";
import { connectContext } from "react-connect-context";
import OptionsBar from "../../components/OptionsBar";
import { OptionsConsumer } from "../../Context/OptionsContext";

class OptionsBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      options,
      setSearchOptions,
      setSortOptions,
      setDateOptions
    } = this.props;
    this.state = {
      search: {
        options: options.search.options,
        onSelect: setSearchOptions,
      },
      sort: {
        options: options.sort.options,
        onSelect: setSortOptions,
      },
      date: {
        options: options.date.options,
        onSelect: setDateOptions,
      }
    };
  }

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
