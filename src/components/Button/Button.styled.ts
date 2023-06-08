import styled from "styled-components";

type SubscribeButtonType = {
	status?: string;
};

export const SubscribeButton = styled.button<SubscribeButtonType>`
	display: block;
	width: 196px;
	height: 50px;
	margin: 0 auto;

	font-family: "Montserrat";
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-transform: uppercase;
	color: #373737;

	background-color: ${({status}) => (status === "active" ? "#5cd3a8" : "#EBD8FF")};
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border: none;
	border-radius: 10.3108px;

	transition: background-color 250ms ease, transform 250ms ease;

	:hover {
		background-color: ${({status}) => (status === "active" ? "#EBD8FF" : "#5cd3a8")};
		transform: scale(1.1);
	}
`;
