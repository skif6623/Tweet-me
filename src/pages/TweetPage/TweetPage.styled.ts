import {Link} from "react-router-dom";
import styled from "styled-components";

export const UserList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 50px;
	margin-bottom: 50px;
`;

export const GetBackButton = styled(Link)`
	display: flex;
	align-items: center;

	width: 60px;
	height: 60px;

	text-align: center;
	text-decoration: none;
	color: #ffffff;

	background-color: #5cd3a8;
	border-radius: 50px;
`;
