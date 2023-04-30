import React from "react";
import {SubscribeButton} from "./Button.styled";

export const Button = ({children, incPage}) => {
	return <SubscribeButton onClick={incPage}>{children}</SubscribeButton>;
};
