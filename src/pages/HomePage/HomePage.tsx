import {FC} from "react";
import {useLocation} from "react-router-dom";

import {MainBackground} from "../../components/MainBackground/MainBackground";

import {NavBg, Title, LinkBtn} from "./HomePage.styled";

export const HomePage: FC = () => {
	const location = useLocation();

	return (
		<MainBackground center>
			<NavBg>
				<Title>Welcome to Tweet me</Title>
				<LinkBtn to="/">Home</LinkBtn>
				<LinkBtn to="/tweets" state={{from: location}}>
					Tweets T
				</LinkBtn>
			</NavBg>
		</MainBackground>
	);
};
