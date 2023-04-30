import {Button} from "../Button/Button";
import {AvatarWrap} from "../AvatarWrap/AvatarWrap";
import {TweetCard, Background, Activity, Tweets, Followers} from "./Card.styled";

export const Card = ({user, tweets, followers, avatar}) => {
	return (
		<TweetCard>
			<Background />
			<AvatarWrap avatar={avatar} user={user} />
			<Activity>
				<Tweets>{tweets} tweets</Tweets>
				<Followers>{followers} followers</Followers>
			</Activity>
			<Button>follow</Button>
		</TweetCard>
	);
};
