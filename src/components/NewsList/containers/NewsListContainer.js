import { connectContext } from "react-connect-context";
import { compose, mapProps } from "recompose";
import NewsList from "../components/NewsListComponent";
import { TextConsumer } from "../../../Context/SearchBarTextContext";
import { ArticlesConsumer } from "../../../Context/algoliaAPI";

const merge = props => {
  console.log("YES PROPS");
  console.log(props);
  return props;
};

const ConnectedListComponent = compose(
  connectContext(ArticlesConsumer),
  connectContext(TextConsumer),
  mapProps(merge)
)(NewsList);

export default ConnectedListComponent;
