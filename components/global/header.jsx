"use client";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User2 } from "lucide-react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import MobileNav from "./mobile-nav";
import SearchComponent from "./search-component";
import { usePathname } from "next/navigation";
export default function Header() {
	const [open, setOpen] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);
	const [navColor, setNavColor] = useState("transparent");
	const [navTextColor, setNavTextColor] = useState("white");
	const [logoColor, setLogoColor] = useState(100);
	const [scrollDirection, setScrollDirection] = useState("up");
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (pathname === "/") {
				if (window.scrollY > window.innerHeight / 3) {
					setNavColor("white");
					setNavTextColor("black");
					setLogoColor(0);
				} else {
					setNavColor("transparent");
					setNavTextColor("black");
					setLogoColor(100);
				}
			}
		};

		if (pathname === "/") {
			window.addEventListener("scroll", handleScroll);
			// Initial call to handleScroll to set colors based on initial scroll position
			handleScroll();
		} else {
			setNavColor("white");
			setNavTextColor("black");
			setLogoColor(0);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [pathname, setNavColor, setNavTextColor, setLogoColor]);

	useEffect(() => {
		const updateBodyOverflow = () => {
			if (open || openSearch) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		};

		updateBodyOverflow();

		const handleResize = () => {
			if (window.innerWidth >= 768) {
				document.body.style.overflow = "auto";
			} else {
				updateBodyOverflow();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [open, openSearch]);

	useEffect(() => {
		const threshold = 50;
		let lastScrollYPosition = 0;

		function handleScroll() {
			const currentScrollY = window.scrollY;
			if (currentScrollY < lastScrollYPosition) {
				setScrollDirection("up");
			} else if (currentScrollY - lastScrollYPosition > threshold) {
				setScrollDirection("down");
			}
			lastScrollYPosition = currentScrollY;
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header>
			<nav
				style={{ backgroundColor: `${navColor}` }}
				className={` ${
					scrollDirection === "down"
						? "-translate-y-[180%]"
						: "-translate-y-[30px]"
				} z-[999] fixed w-full top-[30px] left-0 right-0 h-[50px] transition-all duration-500 ease-in-out px-5 flex justify-between items-center py-10`}
			>
				<div
					className="items-center hidden gap-3 text-sm text-white flex-2 lg:flex"
					style={{ filter: `brightness(${logoColor}%)` }}
				>
					<Link
						href={"/collection/seats"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Seats
					</Link>
					<Link
						href={"/collection/tables"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Tables
					</Link>
					<Link
						href={"/collection/lighting"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Lighting
					</Link>
					<Link
						href={"/collection/storage"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Storage
					</Link>
					<Link
						href={"/collection/outdoor"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Outdoor
					</Link>
					<Link
						href={"/collection/accessories"}
						className="transition-opacity duration-300 ease-in-out hover:opacity-70"
					>
						Accessories
					</Link>
				</div>
				<div
					style={{
						color: `${navTextColor}`,
						filter: `brightness(${logoColor}%)`,
					}}
					className="lg:hidden"
				>
					<button onClick={() => setOpen((prev) => !prev)}>
						<HiOutlineMenuAlt4
							size={20}
							style={{
								filter: `${
									pathname === "/" ? `brightness(${logoColor}%)` : ""
								}`,
								color: `${pathname === "/" ? "white" : "black"}`,
							}}
						/>
					</button>
				</div>

				<Link
					href={"/"}
					className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
				>
					<img
						src="/logo.svg"
						alt=""
						className={`w-[120px] h-[100px]`}
						style={{ filter: `brightness(${logoColor}%)` }}
					/>
				</Link>

				<div
					style={{
						color: `${navTextColor}`,
						filter: `brightness(${logoColor}%)`,
					}}
					className="flex items-center gap-4 text-white flex-2"
				>
					<button onClick={() => setOpenSearch((prev) => !prev)}>
						<Search
							size={20}
							style={{
								filter: `${
									pathname === "/" ? `brightness(${logoColor}%)` : ""
								}`,
								color: `${pathname === "/" ? "white" : "black"}`,
							}}
						/>
					</button>
					<button className="hidden md:block">
						<User2
							size={20}
							style={{
								filter: `${
									pathname === "/" ? `brightness(${logoColor}%)` : ""
								}`,
								color: `${pathname === "/" ? "white" : "black"}`,
							}}
						/>
					</button>
					<button>
						<ShoppingBag
							size={20}
							style={{
								filter: `${
									pathname === "/" ? `brightness(${logoColor}%)` : ""
								}`,
								color: `${pathname === "/" ? "white" : "black"}`,
							}}
						/>
					</button>
				</div>

				{/* mobile nav */}
				<MobileNav open={open} setOpen={setOpen} />

				{/* search component */}
				<SearchComponent
					openSearch={openSearch}
					setOpenSearch={setOpenSearch}
				/>
			</nav>
		</header>
	);
}
