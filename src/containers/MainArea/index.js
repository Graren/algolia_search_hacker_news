import { connectContext } from "react-connect-context";
import MainArea from "../../components/MainArea";
import { TextConsumer } from "../../Context/SearchBarTextContext";

const ConnectedMainAreaComponent = connectContext(TextConsumer)(MainArea);

export default ConnectedMainAreaComponent