import { X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({ open, setOpen }) {
	return (
		<nav
			className={`${
				open ? "translate-x-0" : "-translate-x-full"
			} lg:hidden fixed inset-0 h-[100dvh] bg-black custom-easing pt-5 overflow-auto  pb-10 `}
		>
			<div className="relative flex items-center justify-between w-full px-5 ">
				<div></div>
				<Link href={"/"} onClick={() => setOpen((prev) => !prev)}>
					{" "}
					<img src="/logo.svg" alt="" className={`w-[120px]`} />
				</Link>
				<button onClick={() => setOpen((prev) => !prev)} className="text-white">
					<X />
				</button>
			</div>

			<div className="flex flex-col gap-6 px-5 mt-10 text-lg text-white">
				<Link
					href={"/collection/seats"}
					className="font-medium transition-opacity duration-300 ease-in-out font-mont hover:opacity-70 w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Seats
				</Link>
				<Link
					href={"/collection/tables"}
					className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-70 font-mont w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Tables
				</Link>
				<Link
					href={"/collection/lighting"}
					className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-70 font-mont w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Lighting
				</Link>
				<Link
					href={"/collection/storage"}
					className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-70 font-mont w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Storage
				</Link>
				<Link
					href={"/collection/outdoor"}
					className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-70 font-mont w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Outdoor
				</Link>
				<Link
					href={"/collection/accessories"}
					className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-70 font-mont w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Accessories
				</Link>
			</div>

			<div className="flex items-center justify-center w-full h-px mt-6 bg-slate-700" />

			<div className="flex flex-col gap-5 px-5 mt-10 text-sm text-white/70">
				<Link
					href={"/login"}
					className="w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Sign In
				</Link>
				<Link
					href={"/signup"}
					className="w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Create Account
				</Link>
				<Link
					href={"/tracking"}
					className="w-fit"
					onClick={() => setOpen((prev) => !prev)}
				>
					Track Order
				</Link>
			</div>

			<div className="flex items-center justify-center w-full h-px mt-6 bg-slate-700" />

			<div className="absolute flex justify-end gap-5 px-5 mt-10 text-sm text-white bottom-3 right-3 ">
				<Link href={"/login"}>Instagram</Link>
				<Link href={"/signup"}>Facebook</Link>
				<Link href={"/tracking"}>Tiktok</Link>
			</div>
		</nav>
	);
}
