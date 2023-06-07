import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserType} from "./userSlice";
import axios from "axios";

axios.defaults.baseURL = "https://644d6936cfdddac970a41176.mockapi.io";

type SubscriptionChangeType = Pick<UserType, "id" | "followers">;

export const getUsers = createAsyncThunk("users/getUsers", async (_, {rejectWithValue}) => {
	try {
		const res = await axios.get("user", {
			params: {
				page: 1,
				limit: 3,
			},
		});
		return res.data as UserType[];
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const moreUsers = createAsyncThunk("users/moreUsers", async (page, {rejectWithValue}) => {
	try {
		const res = await axios.get("user", {
			params: {
				page,
				limit: 3,
			},
		});
		return res.data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const addStatus = createAsyncThunk(
	"users/addStatus",
	async ({id, followers}: SubscriptionChangeType, {rejectWithValue}) => {
		try {
			const res = await axios.put(`user/${id}`, {
				follow: true,
				followers: followers + 1,
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const removeStatus = createAsyncThunk(
	"users/removeStatus",
	async ({id, followers}: SubscriptionChangeType, {rejectWithValue}) => {
		try {
			const res = await axios.put(`user/${id}`, {
				follow: false,
				followers: followers - 1,
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
