import React from "react";
import { connectContext } from "react-connect-context";
import { ArticlesConsumer } from '../../Context/algoliaAPI'

const Test = props => {
  return null;
};

export default connectContext(ArticlesConsumer)(Test)