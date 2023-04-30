import React, {useState, useEffect} from "react";
import {Card} from "../components/Card/Card";
import {Button} from "../components/Button/Button";
import {UserList} from "./TweetPage.styled";

import {getUsers} from "../utils/api";

export const TweetPage = () => {
	const [page, setPage] = useState(1);
	const [currentUsers, setCurrentUsers] = useState([]);

	const totalPages = 4;
	const showLoadMore = page < totalPages;

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const newUsers = await getUsers(page);
				setCurrentUsers(newUsers);
			} catch (error) {
				console.log(error);
			}
		};
		const addUsers = async () => {
			try {
				const newUsers = await getUsers(page);
				setCurrentUsers(prevUsers => [...prevUsers, ...newUsers]);
			} catch (error) {
				console.log(error);
			}
		};
		if (page === 1) {
			fetchUsers();
		} else {
			addUsers();
		}
	}, [page]);

	const incrementPage = () => {
		setPage(prev => prev + 1);
	};

	return (
		<>
			<UserList>
				{currentUsers.map(({user, tweets, followers, avatar, id}) => {
					return (
						<li key={id}>
							<Card tweets={tweets} followers={followers} avatar={avatar} user={user} />
						</li>
					);
				})}
			</UserList>
			{showLoadMore && <Button incPage={incrementPage}>Load More</Button>}
		</>
	);
};
