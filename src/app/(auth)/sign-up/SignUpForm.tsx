"use client";
import { signUp } from "@/actions/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpForm() {
	const router = useRouter();
	const handleSignUp = async (value: FormData) => {
		try {
			const response = await signUp(value);
			if (response.statusCode === 201) {
				toast.success("User created successfully");
				router.push("/login");
			} else {
				response?.errorDetails?.map((error: any) =>
					toast.error(error?.message)
				);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<form className="space-y-3 mt-5" action={handleSignUp}>
			<div className="flex flex-col space-y-1">
				<label htmlFor="name" className="text-lg">
					Username
				</label>
				<input type="text" id="name" name="name" className="custom_style" />
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="email" className="text-lg">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="custom_style"
				/>
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="password" className="text-lg">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					className="custom_style"
				/>
			</div>
			<div className="py-4">
				<p>
					Already have an account?
					<Link
						href="/login"
						className="text-pink-500 hover:underline ml-2"
					>
						Login here
					</Link>
				</p>
			</div>

			<button
				className="text-lg bg-pink-500 hover:bg-pink-400 px-3 py-1 text-white rounded-md"
				type="submit"
			>
				Sign up
			</button>
		</form>
	);
}
