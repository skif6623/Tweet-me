import React, {FC, ReactNode} from "react";
import {Bg} from "./MainBackground.styled";

type MainBgType = {
	children: ReactNode;
	center?: boolean;
};

export const MainBackground: FC<MainBgType> = ({children, center}) => {
	return <Bg center={center}>{children}</Bg>;
};
