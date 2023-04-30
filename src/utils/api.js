import axios from "axios";

axios.defaults.baseURL = "https://644d6936cfdddac970a41176.mockapi.io";

export const getUsers = async page => {
	const res = await axios.get("user", {
		params: {
			page,
			limit: 3,
		},
	});
	return res.data;
};
