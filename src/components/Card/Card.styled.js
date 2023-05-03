import styled from "styled-components";
import main_bg from "../../images/main-bg.png";
import logo from "../../images/logo.png";

export const TweetCard = styled.div`
	position: relative;

	width: 380px;
	height: 460px;
	padding-top: 28px;
	padding-bottom: 36px;
	padding-left: 36px;
	padding-right: 36px;

	background-image: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
	background-repeat: no-repeat;
	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;
`;

export const Logo = styled.div`
	position: absolute;
	left: 20px;
	top: 20px;

	width: 76px;
	height: 22px;

	background-image: url(${logo});
`;

export const Background = styled.div`
	width: 308px;
	height: 168px;
	margin-bottom: 88px;

	background-image: url(${main_bg});
	background-size: cover;
`;

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

	background-color: #ebd8ff;
	border-radius: 50%;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
		inset 0px 4.39163px 3.29372px #fbf8ff;

	transform: translate(-50%);
`;

export const Activity = styled.div`
	margin-bottom: 16px;

	font-family: "Montserrat";
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;
	text-align: center;

	color: #ebd8ff;
`;

export const Tweets = styled.p`
	margin-bottom: 16px;
`;

export const Followers = styled.p`
	margin-bottom: 26px;
`;
