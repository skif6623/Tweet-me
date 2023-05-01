import React from "react";
import {SubscribeButton} from "./Button.styled";

export const Button = ({children, action, id, status}) => {
	return (
		<SubscribeButton status={status} onClick={() => action(id)}>
			{children}
		</SubscribeButton>
	);
};
