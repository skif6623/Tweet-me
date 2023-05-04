import React from "react";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Bg} from "./HomePage.styled";

export const HomePage = () => {
	const location = useLocation();

	return (
		<Bg>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/tweets" state={{from: location}}>
				Tweets
			</NavLink>
			<div>Welcome to Tweet me</div>
		</Bg>
	);
};
