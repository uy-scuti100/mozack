"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
	FaPinterest,
	FaInstagram,
	FaFacebook,
	FaYoutube,
	FaTwitter,
	FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "../ui/button";
import { Facebook, Instagram, PointerIcon, Youtube } from "lucide-react";

export default function Footer() {
	// md:flex md:items-center md:justify-between lg:px-8

	const [isMobile, setIsMobile] = useState(true);
	const [email, setEmail] = useState("");

	useEffect(() => {
		const handleChange = () => {
			const screensize = window.innerWidth;
			if (screensize <= 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleChange();

		window.addEventListener("resize", handleChange);
		return () => window.removeEventListener("resize", handleChange);
	}, []);

	return (
		<footer className="py-12 mx-auto bg-black sm:px-6">
			<div className="flex flex-col items-start justify-between gap-8 px-4 pb-4 border-b sm:flex-row border-ash-dark ">
				<p className="text-sm text-ash-dark basis-1/2">
					US: Long Weekend Sale: 30-60% Off. Promotion ends 5.28.24 at 11:59 PM
					PT. Prices are as marked. Exclusions apply. Cannot be combined with
					any other offer. Only valid at mozack.us. Not valid on gift cards or
					previous purchases.
				</p>
				<p className="text-sm text-ash-dark basis-1/2">
					Extra 20% off $100+. Promotion ends 5.28.2024 at 11:59 PM PT. Discount
					in cart. Exclusions apply. Only valid at mozack.us. Not valid on gift
					cards or previous purchases.
				</p>
			</div>

			{isMobile ? <MobileFooter /> : <DesktopFooter />}
		</footer>
	);
}

const MobileFooter = () => {
	return (
		<div>
			<div className="flex flex-col items-start justify-between gap-8 px-4 mt-10">
				{linksThree.map((link, i) => (
					<Link
						key={i}
						href={link.href}
						className={`${
							i === 0 && "border-t border-ash-dark pt-4"
						} w-full pb-2 text-lg text-white border-b border-ash-dark`}
					>
						{link.name}
					</Link>
				))}
			</div>

			<div className="px-4 pt-12">
				<h2 className="pb-4 text-white font-mont">
					Sign Up & Save 10% on Your Purchase
				</h2>
				<p className="text-sm text-balance text-ash-dark">
					Subscribe for news on our latest arrivals, exclusive promotions and
					events.
				</p>

				<Button
					variant="outline"
					className="w-full my-10 text-black bg-white rounded-none"
				>
					Get Your 10% Off
				</Button>

				<div>
					<h3 className="pb-2 text-lg text-white">
						Text JOIN to 12345 to get Free Shipping
					</h3>
					<p className="text-sm text-ash-dark">
						Sign up for mobile texts to receive offer. Never miss out on
						exclusive launches, styles and promotions.{" "}
						<Link href="/" className="underline">
							Details
						</Link>
					</p>
				</div>

				<div className="flex items-center gap-8 pt-12 ">
					<Link href={"/"}>
						<FaInstagram className="text-[#aaaaaa] w-6 h-6" />
					</Link>

					<Link href={"/"}>
						{" "}
						<FaFacebook className="text-[#aaaaaa] w-6 h-6" />
					</Link>

					<Link href={"/"}>
						<FaPinterest className="text-[#aaaaaa] w-6 h-6" />
					</Link>
					<Link href={"/"}>
						<FaYoutube className="text-[#aaaaaa] w-6 h-6" />
					</Link>
					<Link href={"/"}>
						<FaXTwitter className="text-[#aaaaaa] w-6 h-6" />
					</Link>
					<Link href={"/"}>
						<FaTiktok className="text-[#aaaaaa] w-6 h-6" />
					</Link>
				</div>

				<Link href={"/"} className="flex items-center justify-start pt-12 ">
					<img src="/logo.svg" alt="logo" className={`w-[120px] h-[50px]`} />
				</Link>
				<div className="flex flex-wrap gap-8 px-4 pt-12 ">
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">Help</h2>
						{links.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm group text-ash-dark w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">Contact Us</h2>
						{linksTwo.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm text-ash-dark group w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">About</h2>
						{linksFour.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm text-ash-dark group w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
				</div>
				<div className="pt-4 pb-8 text-sm text-ash-dark">
					<Link href={"/"}>
						Mozack Corp. Joint Modern Slavery Act Statement{" "}
					</Link>
					| <Link href={"/"}> Privacy Policy</Link>
					<Link href={"/"}> Interest Based Ads</Link> |{" "}
					<Link href={"/"}> Do Not Sell or Share My Personal Information</Link>{" "}
					| <Link href={"/"}> Terms & Conditions</Link>
				</div>
				<p className="pb-2 text-sm text-ash-dark">Web ID: 1234567890</p>
				<p className="text-sm text-ash-dark">
					Copyright © {new Date().getFullYear()} Mozack. All rights reserved.
				</p>
			</div>
		</div>
	);
};
const DesktopFooter = () => {
	return (
		<div>
			<div>
				<div className="px-4 pt-12">
					<h2 className="pb-4 text-white font-mont">
						Sign Up & Save 10% on Your Purchase
					</h2>
					<p className="text-sm text-balance text-ash-dark">
						Subscribe for news on our latest arrivals, exclusive promotions and
						events.
					</p>

					<Button
						variant="outline"
						className="w-full py-10 my-10 text-xl text-black bg-white rounded-none"
					>
						Get Your 10% Off
					</Button>

					<div>
						<h3 className="pb-2 text-lg text-white">
							Text JOIN to 12345 to get Free Shipping
						</h3>
						<p className="text-sm text-ash-dark">
							Sign up for mobile texts to receive offer. Never miss out on
							exclusive launches, styles and promotions.{" "}
							<Link href="/" className="underline">
								Details
							</Link>
						</p>
					</div>

					<div className="flex items-center gap-8 pt-12 ">
						<Link href={"/"}>
							<FaInstagram className="text-[#aaaaaa] w-6 h-6" />
						</Link>

						<Link href={"/"}>
							{" "}
							<FaFacebook className="text-[#aaaaaa] w-6 h-6" />
						</Link>

						<Link href={"/"}>
							<FaPinterest className="text-[#aaaaaa] w-6 h-6" />
						</Link>
						<Link href={"/"}>
							<FaYoutube className="text-[#aaaaaa] w-6 h-6" />
						</Link>
						<Link href={"/"}>
							<FaXTwitter className="text-[#aaaaaa] w-6 h-6" />
						</Link>
						<Link href={"/"}>
							<FaTiktok className="text-[#aaaaaa] w-6 h-6" />
						</Link>
					</div>
				</div>
				<div className="flex justify-between w-full gap-8 px-4 pt-12 ">
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">About</h2>
						{linksFour.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm text-ash-dark group w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">Help</h2>
						{links.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm group text-ash-dark w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-6">
						<h2 className="text-white font-mont">Contact Us</h2>
						{linksTwo.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="relative text-sm text-ash-dark group w-fit"
							>
								{link.name}
								<div className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-ash " />
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-8 pt-12">
				{linksThree.map((link, i) => {
					return (
						<Link
							key={i}
							href={link.href}
							className="px-4 border-b border-ash-dark"
						>
							<h2 className="pb-4 text-white font-mont">{link.name}</h2>
						</Link>
					);
				})}
			</div>
			<div>
				<div className="flex items-center justify-start pt-12 ">
					<img src="/logo.svg" alt="logo" className={`w-[120px] h-[50px]`} />
				</div>

				<div className="pt-4 pb-8 text-sm text-ash-dark">
					<Link href={"/"}>
						Mozack Corp. Joint Modern Slavery Act Statement{" "}
					</Link>
					| <Link href={"/"}> Privacy Policy</Link>
					<Link href={"/"}> Interest Based Ads</Link> |{" "}
					<Link href={"/"}> Do Not Sell or Share My Personal Information</Link>{" "}
					| <Link href={"/"}> Terms & Conditions</Link>
				</div>
				<p className="pb-2 text-sm text-ash-dark">Web ID: 1234567890</p>
				<p className="text-sm text-ash-dark">
					Copyright © {new Date().getFullYear()} Mozack. All rights reserved.
				</p>
			</div>
		</div>
	);
};

const links = [
	{
		name: "Customer Service",
		href: "/about",
	},
	{
		name: "Track Order",
		href: "/faq",
	},
	{
		name: "Shipping",
		href: "/help",
	},
	{
		name: "Accessibility ",
		href: "/help",
	},
	{
		name: "FAQs",
		href: "/contact",
	},
];

const linksTwo = [
	{
		name: "Call Us: 123.456.7890",
		href: "tel:123.456.7890",
	},
	{
		name: `💬 Chat with us`,
		href: "https://mozack.typeform.com/to/m3z56F",
	},
	{
		name: "Email",
		href: "mailto:info@mozack.com",
	},
];

const linksThree = [
	{
		name: "Promotions",
		href: "/promotions",
	},

	{
		name: "Gift Cards",
		href: "/gift-cards",
	},
	{
		name: "Stores",
		href: "/stores",
	},
	{
		name: "Store Directory",
		href: "/store-directory",
	},
	{
		name: "Preferred Loyalty Program",
		href: "/preferred-loyalty-program",
	},
	{
		name: "Klarna",
		href: "/klarna",
	},
	{
		name: "Afterpay",
		href: "/afterpay",
	},
	{
		name: "20% First Responder Discount",
		href: "/20-first-responder-discount",
	},
	{
		name: "Explore",
		href: "/explore",
	},
];

const linksFour = [
	{
		name: "About Mozack",
		href: "/about",
	},

	{
		name: "Careers",
		href: "/careers",
	},
	{
		name: "Privacy Commitment",
		href: "/privacy-commitment",
	},
	{
		name: "Store Directory",
		href: "/store-directory",
	},
	{
		name: "Sustainability + Inclusivity",
		href: "/sustainability-inclusivity",
	},
];
