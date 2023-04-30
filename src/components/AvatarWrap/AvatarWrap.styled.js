import styled from "styled-components";

export const Line = styled.div`
	position: absolute;
	top: 214px;
	left: 0;

	width: 100%;
	height: 8px;

	background: #ebd8ff;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
		inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circle = styled.div`
	position: absolute;
	top: 178px;
	left: 50%;

	width: 80px;
	height: 80px;
	padding: 9px;

	background-color: #ebd8ff;
	border-radius: 50%;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
		inset 0px 4.39163px 3.29372px #fbf8ff;

	transform: translate(-50%);
`;

export const Avatar = styled.img`
	display: block;
	width: 62px;
	height: 62px;

	border-radius: 50%;
`;
