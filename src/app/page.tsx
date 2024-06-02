import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import FindBuddy from "@/components/home/FindBuddy";
import HowtoBook from "@/components/home/HowtoBook";
import TrastedMate from "@/components/home/TrastedMate";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
	return (
		<main className="">
			<Banner />
			<TrastedMate />
			<WhyUs />
			<FindBuddy />
			<HowtoBook />
			<Footer />
		</main>
	);
}
