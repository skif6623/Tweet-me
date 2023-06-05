import {createSlice} from "@reduxjs/toolkit";

import {addStatus, getUsers, moreUsers, removeStatus} from "./operations";

// avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/873.jpg";
// follow: true;
// followers: 100501;
// id: "1";
// tweets: 777;
// user: "Penny Mueller";

const initialState = [];

export const userSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getUsers.fulfilled, (_, action) => {
				return action.payload;
			})
			.addCase(moreUsers.fulfilled, (state, action) => {
				state.users = [...state.users, ...action.payload];
			})
			.addCase(addStatus.fulfilled, (state, action) => {
				const idx = state.users.findIndex(user => user.id === action.payload.id);
				state.users.splice(idx, 1, action.payload);
			})
			.addCase(removeStatus.fulfilled, (state, action) => {
				const idx = state.users.findIndex(user => user.id === action.payload.id);
				state.users.splice(idx, 1, action.payload);
			});
	},
});

export const userReducer = userSlice.reducer;
