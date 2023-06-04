import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./components/App";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="go-it-test-task">
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
