import Image from "next/image";
import SignUpForm from "./SignUpForm";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<section className="flex justify-center items-center h-screen">
			<div className="shadow-lg p-4 rounded-lg">
				<Link href="/">
					<Image
						src="/img/logo.png"
						alt="logo"
						width={80}
						height={80}
						className="w-fit mx-auto"
					/>
				</Link>
				<h3 className="text-3xl font-semibold mt-5">
					Create a Brand New Account
				</h3>

				<SignUpForm />
			</div>
		</section>
	);
}
