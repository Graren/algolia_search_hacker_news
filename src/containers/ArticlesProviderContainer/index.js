import { connectContext } from "react-connect-context";
import { TextConsumer } from "../../Context/SearchBarTextContext";
import { ArticlesProvider } from '../../Context/algoliaAPI';

const ConnectedArticleComponent = connectContext(TextConsumer)(ArticlesProvider);

export default ConnectedArticleComponent