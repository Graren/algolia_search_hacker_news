import React, { useState } from "react";

export const SEARCH_OPTIONS = {
  ALL: { text: "All", key: "ALL" },
  STORIES: { text: "Stories", key: "STORIES" },
  COMMENTS: { text: "Comments", key: "COMMENTS" }
};

export const SORT_OPTIONS = {
  POPULARITY: { text: "Popularity", key: "POPULARITY" },
  DATE: { text: "Date", key: "DATE" }
};

export const DATE_RANGE_OPTIONS = {
  ALL_TIME: { text: "All time", key: "ALL_TIME" },
  LAST_24_H: { text: "Last 24h", key: "LAST_24_H" },
  PAST_WEEK: { text: "Past week", key: "PAST_WEEK" },
  PAST_MONTH: { text: "Past month", key: "PAST_MONTH" },
  PAST_YEAR: { text: "Past year", key: "PAST_YEAR" },
  CUSTOM: { text: "Custom range", key: "CUSTOM" }
};

const initialContextState = {
  options: {
    search: {
      options: Object.values(SEARCH_OPTIONS).map(opt => opt)
    },
    sort: {
      options: Object.values(SORT_OPTIONS).map(opt => opt)
    },
    date: {
      options: Object.values(DATE_RANGE_OPTIONS).map(opt => opt)
    }
  },
  search: SEARCH_OPTIONS.ALL.key,
  sort: SORT_OPTIONS.POPULARITY.key,
  date: DATE_RANGE_OPTIONS.ALL_TIME.key,
};

const { Provider, Consumer: OptionsConsumer } = React.createContext();

const OptionsProvider = ({ children }) => {
  const [search, setSearchOptions] = useState(initialContextState.search);
  const [sort, setSortOptions] = useState(initialContextState.sort);
  const [date, setDateOptions] = useState(initialContextState.date);

  const value = {
    options: initialContextState.options,
    selectedOptions: {
      search,
      sort,
      date,
    },
    setSearchOptions,
    setSortOptions,
    setDateOptions
  };

  return <Provider value={value}>{children}</Provider>;
};

export { OptionsProvider, OptionsConsumer };
