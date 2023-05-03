import {Route, Routes} from "react-router-dom";
import {Navigation} from "./Navigation/Navigation";
export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />} />
		</Routes>
	);
};
