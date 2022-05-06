import { useContext } from "react";
import AuthContext from "../../store/steps-context";

const Steps = () => {
	const authCtx = useContext(AuthContext);
	return <p>Steps: {authCtx.steps}</p>;
};

export default Steps;
