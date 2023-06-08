import {FC} from "react";
import {UserType} from "../../redux/userSlice";
import {Line, Circle, Avatar} from "./AvatarWrap.styled";

type AvatarWrapType = Pick<UserType, "avatar" | "user">;

export const AvatarWrap: FC<AvatarWrapType> = ({avatar, user}) => {
	return (
		<>
			<Line></Line>
			<Circle>
				<Avatar src={avatar} alt={user} />
			</Circle>
		</>
	);
};
