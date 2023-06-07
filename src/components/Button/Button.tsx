import React from "react";
import {SubscribeButton} from "./Button.styled";

type BtnPropsType = {
	children: React.ReactNode;
	action: (id: string) => void;
	id: string;
	status: string;
};

export const Button: React.FC<BtnPropsType> = ({children, action, id, status}) => {
	return (
		<SubscribeButton status={status} onClick={() => action(id)}>
			{children}
		</SubscribeButton>
	);
};
