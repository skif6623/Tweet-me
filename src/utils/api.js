import axios from "axios";

axios.defaults.baseURL = "https://644d6936cfdddac970a41176.mockapi.io";

export const getUsers = async () => {
	const res = await axios.get("user");
	return res.data;
};
