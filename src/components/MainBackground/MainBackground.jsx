import React from "react";
import {Bg} from "./MainBackground.styled";

export const MainBackground = ({children, center}) => {
	return <Bg center={center}>{children}</Bg>;
};
