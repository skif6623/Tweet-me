import React from "react";
import {NavLink} from "react-router-dom";

export const HomePage = () => {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/tweets">Tweets</NavLink>
			<div>Welcome to Tweet me</div>;
		</>
	);
};
