import React from "react";
import {Line, Circle, Avatar} from "./AvatarWrap.styled";

export const AvatarWrap = ({avatar, user}) => {
	return (
		<>
			<Line></Line>
			<Circle>
				<Avatar src={avatar} alt={user} />
			</Circle>
		</>
	);
};
