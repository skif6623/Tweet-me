import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
	width: 500px;
	height: 300px;
	padding: 20px;

	background-color: white;
	border: 2px solid #5cd3a8;
	border-radius: 9px;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const LinkBtn = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 196px;
	height: 50px;

	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-decoration: none;
	text-transform: uppercase;
	color: #373737;

	background-color: #ebd8ff;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border: none;
	border-radius: 10.3108px;
	transition: background-color 250ms ease;

	:hover {
		color: white;
		background-color: #5cd3a8;
	}

	&.active {
		color: white;
		background-color: #5cd3a8;

		:hover {
			color: #373737;
			background-color: #ebd8ff;
		}
	}
`;
