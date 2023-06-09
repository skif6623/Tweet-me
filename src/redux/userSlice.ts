import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addStatus, getUsers, moreUsers, removeStatus} from "./operations";

const isError = (action: AnyAction) => action.type.endsWith("rejected");

export type UserType = {
	avatar: string;
	follow: boolean;
	followers: number;
	id: string;
	tweets: number;
	user: string;
};

type InitialStateType = {
	usersList: UserType[];
	error: boolean;
	loading: boolean;
};

const initialState: InitialStateType = {
	usersList: [],
	error: false,
	loading: false,
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.fulfilled, (state, action) => {
				state.usersList = action.payload;
			})
			.addCase(moreUsers.fulfilled, (state, action) => {
				return {...state, usersList: [...state.usersList, ...action.payload]};
			})
			.addCase(addStatus.fulfilled, (state, action) => {
				const idx = state.usersList.findIndex(user => user.id === action.payload.id);
				state.usersList.splice(idx, 1, action.payload);
			})
			.addCase(removeStatus.fulfilled, (state, action) => {
				const idx = state.usersList.findIndex(user => user.id === action.payload.id);
				state.usersList.splice(idx, 1, action.payload);
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export const userReducer = userSlice.reducer;
