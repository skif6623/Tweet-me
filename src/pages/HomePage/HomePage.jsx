import React from "react";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Bg, NavBg} from "./HomePage.styled";

export const HomePage = () => {
	const location = useLocation();

	return (
		<Bg>
			<NavBg>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/tweets" state={{from: location}}>
					Tweets
				</NavLink>
				<p>Welcome to Tweet me</p>
			</NavBg>
		</Bg>
	);
};
