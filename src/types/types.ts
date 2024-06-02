export type TLoginResponse = {
	name: string;
	email: string;
	token: string;
};

export type TLoginRequest = {
	email: string;
	password: string;
};
export type TPasswordChangeRequest = {
	oldPassword: string;
	newPassword: string;
	conPassword: string;
};
export type TProfile = {
	bio: string;
	street: string;
	city: string;
	country: string;
};
export type LoggedInUser = {
	email: string;
	name: string;
	id: string;
	role: string;
	avatar: string;
	profile?: TProfile;
};

export type TResponse<T> = {
	success: boolean;
	statusCode: number;
	message: string;
	meta: {
		page: number;
		limit: number;
		totalPages: number;
	};
	data: T;
};

export type TTrip = {
	photo: string;
	title: string;
	destination: string;
	startDate: string;
	endDate: string;
	budget: number;
	description: string;
};

export type TTripResponse = {
	id: string;
	title: string;
	destination: string;
	photo: string;
	startDate: string;
	endDate: string;
	budget: number;
	description: string;
	user: {
		name: string;
		email: string;
		avatar: string;
	};
};

export type TUserUpdate = {
	avatar: string;
	name: string;
	email: string;
	profile: {
		bio: string;
		age: string;
	};
};
