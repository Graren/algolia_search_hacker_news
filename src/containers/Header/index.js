import { connectContext } from "react-connect-context";
import Header from "../../components/Header";
import { TextConsumer } from "../../Context/SearchBarTextContext";

const ConnectedHeaderComponent = connectContext(TextConsumer)(Header);

export default ConnectedHeaderComponent