import {Button} from "../Button/Button";
import {AvatarWrap} from "../AvatarWrap/AvatarWrap";
import {TweetCard, Background, Activity, Tweets, Followers} from "./Card.styled";

import {useDispatch} from "react-redux";
import {addStatus, removeStatus} from "../../redux/operations";

export const Card = ({id, user, tweets, followers, avatar, follow}) => {
	const formatedFollowers = followers.toLocaleString("en-US");
	const formatedTweets = tweets.toLocaleString("en-US");

	const dispatch = useDispatch();

	const subscribe = () => {
		dispatch(addStatus({id, followers}));
	};

	const unsubscribe = () => {
		dispatch(removeStatus({id, followers}));
	};

	return (
		<TweetCard>
			<Background />
			<AvatarWrap avatar={avatar} user={user} />
			<Activity>
				<Tweets>{formatedTweets} tweets</Tweets>
				<Followers>{formatedFollowers} followers</Followers>
			</Activity>
			{follow ? (
				<Button action={unsubscribe} status="active">
					following
				</Button>
			) : (
				<Button action={subscribe}>follow</Button>
			)}
		</TweetCard>
	);
};
