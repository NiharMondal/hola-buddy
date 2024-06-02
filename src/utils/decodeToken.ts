import { JwtPayload, jwtDecode } from "jwt-decode";

export const decodeToken = (token: string) => {
	if (!token) return null;
	const data: JwtPayload = jwtDecode(token);
	return data;
};
