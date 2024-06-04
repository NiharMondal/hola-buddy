import UserTable from "./UserTable";

export default function AdminUsersPage() {
	return (
		<div>
			<h1 className="text-3xl font-semibold">All Users List</h1>
			<p className="text-gray-600 italic">
				From here you can change users role
			</p>
			<div className=" pt-3">
				<UserTable />
			</div>
		</div>
	);
}
