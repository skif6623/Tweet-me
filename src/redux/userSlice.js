import {createSlice} from "@reduxjs/toolkit";

import {addStatus, getUsers, moreUsers, removeStatus} from "./operations";

const initialState = {
	users: [],
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getUsers.fulfilled, (state, action) => {
				state.users = action.payload;
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
