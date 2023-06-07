import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {addStatus, getUsers, moreUsers, removeStatus} from "./operations";

export type UserType = {
	avatar: string;
	follow: boolean;
	followers: number;
	id: string;
	tweets: number;
	user: string;
};

type InitialStateType = UserType[];

const initialState: InitialStateType = [];

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.fulfilled, (_, action: PayloadAction<UserType[]>) => {
				return action.payload;
			})
			.addCase(moreUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
				return [...state, ...action.payload];
			})
			.addCase(addStatus.fulfilled, (state, action: PayloadAction<UserType>) => {
				const idx = state.findIndex(user => user.id === action.payload.id);
				state.splice(idx, 1, action.payload);
			})
			.addCase(removeStatus.fulfilled, (state, action: PayloadAction<UserType>) => {
				const idx = state.findIndex(user => user.id === action.payload.id);
				state.splice(idx, 1, action.payload);
			});
	},
});

export const userReducer = userSlice.reducer;
