import {Button} from "../Button/Button";
import {AvatarWrap} from "../AvatarWrap/AvatarWrap";
import {TweetCard, Background, Subscribers} from "./Card.styled";

export const Card = () => {
	return (
		<TweetCard>
			<Background></Background>
			<AvatarWrap></AvatarWrap>
			<Subscribers>tweets</Subscribers>
			<Subscribers>followers</Subscribers>
			<Button />
		</TweetCard>
	);
};
