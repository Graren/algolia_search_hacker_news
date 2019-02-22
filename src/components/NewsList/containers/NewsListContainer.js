import { connectContext } from "react-connect-context";
import NewsList from "../components/NewsListComponent";
import { TextConsumer } from "../../../Context/SearchBarTextContext";

const ConnectedListComponent = connectContext(TextConsumer)(NewsList);

export default ConnectedListComponent;
