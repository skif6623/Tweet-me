import styled from "styled-components";
import bg_image from "../../images/social-media-3846597.webp";

export const Bg = styled.main`
	display: ${({center}) => center && "flex"};
	justify-content: ${({center}) => center && "center"};
	align-items: ${({center}) => center && "center"};
	width: 100vw;
	height: 100vh;

	background-image: url(${bg_image});
`;
