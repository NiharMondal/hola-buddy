import ProfileInfo from "./ProfileInfo";
import UserInfo from "./UserInfo";

export default function Profile() {
	return (
		<div className="p-5 w-full">
			<h1 className="text-3xl font-semibold">Welcome your profile page</h1>
			<p className="text-sm text-gray-400">
				You can update your information from here!
			</p>
			<div className=" grid grid-cols-1 md:grid-cols-2  gap-5 mt-8">
				<UserInfo />
				<ProfileInfo />
			</div>
		</div>
	);
}
