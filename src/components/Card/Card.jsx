import {Button} from "../Button/Button";
import {TweetCard, Background, Line, Circle, Subscribers} from "./Card.styled";

export const Card = () => {
	return (
		<TweetCard>
			<Background></Background>
			<Line></Line>
			<Circle></Circle>
			<Subscribers>tweets</Subscribers>
			<Subscribers>followers</Subscribers>
			<Button />
		</TweetCard>
	);
};
