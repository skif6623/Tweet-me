import React, {useState, useEffect} from "react";
import {Card} from "../components/Card/Card";
import {UserList} from "./TweetPage.styled";

import {getUsers} from "../utils/api";

export const TweetPage = () => {
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const users = await getUsers(page);
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		}
		fetchUsers();
	}, []);
	return (
		<UserList>
			{users.map(({user, tweets, followers, avatar, id}) => {
				return (
					<li key={id}>
						<Card tweets={tweets} followers={followers} avatar={avatar} user={user} />
					</li>
				);
			})}
		</UserList>
	);
};
