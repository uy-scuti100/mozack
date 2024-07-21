"use client";
import {
	Drawer,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
} from "../../../../../components/ui/drawer";

import { FilterIcon } from "lucide-react";
import { DesktopControls, MobileControls } from "./controls/index.js";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
export default function Filter({
	categoryProducts,
	setMobileView,
	mobileView,
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sticky z-[99] mt-10 bg-white top-[80px] ">
			<div className="flex items-center justify-between p-4 mx-auto my-10 border">
				<div>
					<FilterIcon size={18} onClick={() => setIsOpen((prev) => !prev)} />
				</div>

				<h3 className=" text-sm font-semibold font-mont text-[#777]">
					{categoryProducts.length} PRODUCTS
				</h3>
				<div className="md:hidden">
					<MobileControls
						setMobileView={setMobileView}
						mobileView={mobileView}
					/>
				</div>

				<div className="hidden md:block">
					<DesktopControls
						setMobileView={setMobileView}
						mobileView={mobileView}
					/>
				</div>
			</div>
			<SortProducts setIsOpen={setIsOpen} isOpen={isOpen} />.
		</div>
	);
}

export const SortProducts = ({ isOpen, setIsOpen }) => {
	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen}>
			<DrawerContent>
				<div className="w-full max-w-sm mx-auto">
					<DrawerHeader>
						<DrawerTitle>FILTERS</DrawerTitle>
					</DrawerHeader>
					<div className="p-4 pb-0"></div>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
