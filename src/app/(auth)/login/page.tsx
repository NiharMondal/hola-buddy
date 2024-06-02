import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
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
					Login to your Account
				</h3>

				<LoginForm />
			</div>
		</section>
	);
}
