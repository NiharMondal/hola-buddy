import { decodeToken } from "./decodeToken";
import {
	getFromLocalStorage,
	removeFromLocalStorage,
	setToLocalStorage,
} from "./setUserToken";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
	return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
	const authToken = getFromLocalStorage("accessToken");

	if (authToken) {
		const decodedInfo = decodeToken(authToken);
		return decodedInfo;
	}
};

export const isLoggedIn = () => {
	const authToken = getFromLocalStorage("accessToken");
	if (authToken) {
		return !!authToken;
	}
};

export const removeUser = () => {
	return removeFromLocalStorage("accessToken");
};
