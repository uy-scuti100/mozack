"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetTitle,
} from "../../../../../components/ui/sheet";
import { Label } from "../../../../../components/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../../../components/ui/radio-group";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../../../../components/ui/accordion";
import { Checkbox } from "../../../../../components/ui/checkbox";

import { FilterIcon, X } from "lucide-react";
import { DesktopControls, MobileControls } from "./controls/index.js";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "../../../../../lib/hooks";
import { useRouter } from "next/navigation";

const brands = [
	{
		id: "arteriors",
		name: "Arteriors",
	},
	{
		id: "bavel",
		name: "Bavel",
	},
	{
		id: "bridgette",
		name: "Bridgette",
	},
	{
		id: "charme",
		name: "Charme",
	},
	{
		id: "conlen",
		name: "Conlen",
	},
	{
		id: "gropius",
		name: "Gropius",
	},
	{
		id: "gabriola",
		name: "Gabriola",
	},
	{
		id: "willow",
		name: "Willow",
	},
	{
		id: "pinni",
		name: "Pinni",
	},
	{
		id: "svelti",
		name: "Svelti",
	},
];
const sortOptions = [
	{ name: "Date, old to new", value: "/products/?date=desc" },
	{ name: "Date, new to old", value: "/products/?date=asc" },
	{ name: "Price, low to high", value: "/products/?price=asc" },
	{ name: "Price, high to low", value: "/products/?price=desc" },
];
export default function Filter({
	categoryProducts,
	setMobileView,
	mobileView,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useMediaQuery();
	const router = useRouter();

	return (
		<div className="sticky z-[40] mt-10 bg-white top-[80px] ">
			<div className="flex items-center justify-between p-4 mx-auto my-10 border">
				<button className="p-1">
					<FilterIcon size={18} onClick={() => setIsOpen((prev) => !prev)} />
				</button>

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
			<SortProducts setIsOpen={setIsOpen} isOpen={isOpen} isMobile={isMobile} />
			.
		</div>
	);
}

export const SortProducts = ({ isOpen, setIsOpen, isMobile }) => {
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent side={isMobile ? "bottom" : "right"}>
				<div className="w-full mx-auto lg:mt-20">
					<div className="flex items-center justify-between w-full pb-4 border-b ">
						<SheetTitle>FILTER</SheetTitle>
						<SheetClose asChild>
							<X />
						</SheetClose>
					</div>
					<div className="p-4 pb-0"></div>
					<div className="mb-10">
						<Accordion type="multiple" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>AVAILABILITY</AccordionTrigger>
								<AccordionContent>
									<div className="flex items-center space-x-2">
										<Checkbox id="availability" />
										<label
											htmlFor="availability"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											In Stock
										</label>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>BRAND</AccordionTrigger>

								{brands.map((brand) => (
									<AccordionContent key={brand.id}>
										<div className="flex items-center gap-2">
											<Checkbox id={brand.id} />
											<label
												htmlFor={brand.id}
												className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												{brand.name}
											</label>
										</div>
									</AccordionContent>
								))}
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>PRICE</AccordionTrigger>
								<AccordionContent>
									<RadioGroup
										defaultValue={sortOptions[0].value}
										className="flex flex-col space-y-2"
									>
										{sortOptions.map((option, i) => (
											<div key={i}>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value={option.value}
														id={option.name}
													/>
													<Label htmlFor={option.name}>{option.name}</Label>
												</div>
											</div>
										))}
									</RadioGroup>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>

					<SheetFooter className="flex flex-row items-center justify-between w-full ">
						<SheetClose asChild>
							<Button
								variant="secondary"
								className="px-8 py-6 text-base text-black uppercase transition-all duration-500 rounded-none"
							>
								Clear All
							</Button>
						</SheetClose>
						<Button className="px-8 py-6 text-base text-white uppercase transition-all duration-500 bg-black rounded-none hover:bg-deep-brown hover:text-white">
							View Results
						</Button>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
};
