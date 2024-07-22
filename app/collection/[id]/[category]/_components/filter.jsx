"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetTitle,
} from "../../../../../components/ui/sheet";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../../../../../components/ui/select";
import { Label } from "../../../../../components/ui/label";
import { Input } from "../../../../../components/ui/input";
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
import {
	ScrollArea,
	ScrollBar,
} from "../../../../../components/ui/scroll-area";

import { FilterIcon, Scroll, X } from "lucide-react";
import { DesktopControls, MobileControls } from "./controls/index.js";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "../../../../../lib/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter({
	categoryProducts,
	setMobileView,
	mobileView,
}) {
	const pathname = usePathname();
	const router = useRouter();
	const searchparams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);
	const [currentSort, setCurrentSort] = useState("");
	const { isMobile } = useMediaQuery();
	const handleSort = (value) => {
		router.push(value);
	};

	return (
		<div className="sticky z-[40] mt-10 bg-white top-[80px] ">
			<div className="flex items-center justify-between p-4 mx-auto my-10 border">
				<button className="p-1">
					<FilterIcon
						color="#000"
						enableBackground={"new 0 0 24 24"}
						size={18}
						onClick={() => setIsOpen((prev) => !prev)}
					/>
				</button>

				<h3 className=" text-sm font-semibold font-mont text-[#777]">
					{categoryProducts.length} PRODUCT
					{categoryProducts.length > 1 ? "S" : ""}{" "}
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
			<SortProducts
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				isMobile={isMobile}
				queryProductFilter={handleSort}
				pathname={pathname}
				searchparams={searchparams}
				currentSort={currentSort}
				router={router}
			/>
			.
		</div>
	);
}

const SortProducts = ({
	isOpen,
	setIsOpen,
	isMobile,
	queryProductFilter,
	searchparams,
	pathname,
	currentSort,
	router,
}) => {
	const getDecodedParams = () => {
		const availability = searchparams.get("availability");
		const brand = searchparams.get("brand");
		const price = searchparams.get("price");
		const sort = searchparams.get("sort");

		return {
			availability: availability === "true",
			brand: brand ? decodeURIComponent(brand).split(",") : [],
			price: price ? decodeURIComponent(price) : "",
			sort: sort || "",
		};
	};

	// Use the decoded parameters
	const decodedParams = getDecodedParams();

	const [filterValues, setFilterValues] = useState(decodedParams);
	const sortOptions = [
		{ name: "Date, old to new", value: "date_desc" },
		{ name: "Date, new to old", value: "date_asc" },
		{ name: "Price, low to high", value: "price_asc" },
		{ name: "Price, high to low", value: "price_desc" },
	];

	const brands = [
		{ id: "arteriors", name: "Arteriors" },
		{ id: "bavel", name: "Bavel" },
		{ id: "bridgette", name: "Bridgette" },
		{ id: "charme", name: "Charme" },
		{ id: "conlen", name: "Conlen" },
		{ id: "gropius", name: "Gropius" },
		{ id: "gabriola", name: "Gabriola" },
		{ id: "willow", name: "Willow" },
		{ id: "pinni", name: "Pinni" },
		{ id: "svelti", name: "Svelti" },
	];

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent side={isMobile ? "bottom" : "right"}>
				<ScrollArea className="w-full sm:w-auto h-[450px] md:h-[500px] mx-auto">
					<div className="w-full mx-auto">
						<div className="flex items-center justify-between w-full pb-4 border-b">
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
											<Checkbox
												id="availability"
												onCheckedChange={(checked) =>
													setFilterValues((prev) => ({
														...prev,
														availability: checked,
													}))
												}
												checked={filterValues.availability}
											/>
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

									<AccordionContent className="flex flex-col gap-2">
										{brands.map((brand) => (
											<div key={brand.id} className="flex items-center gap-2">
												<Checkbox
													id={brand.id}
													onCheckedChange={(checked) =>
														setFilterValues((prev) => ({
															...prev,
															brand: checked
																? [...prev.brand, brand.name]
																: prev.brand.filter((b) => b !== brand.name),
														}))
													}
													checked={filterValues.brand.includes(brand.name)}
												/>
												<Label
													htmlFor={brand.id}
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													{brand.name}
												</Label>
											</div>
										))}
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>PRICE</AccordionTrigger>
									<AccordionContent>
										<div className="flex items-center space-x-2">
											<RadioGroup
												onValueChange={(value) =>
													setFilterValues((prev) => ({ ...prev, sort: value }))
												}
												value={filterValues.sort}
											>
												{sortOptions.map((option) => (
													<div
														key={option.value}
														className="flex items-center space-x-2"
													>
														<RadioGroupItem
															value={option.value}
															id={option.value}
														/>
														<Label htmlFor={option.value}>{option.name}</Label>
													</div>
												))}
											</RadioGroup>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>

						<SheetFooter className="flex flex-row items-center justify-between w-full">
							<SheetClose asChild>
								<Button
									variant="secondary"
									onClick={() =>
										setFilterValues({
											availability: undefined,
											brand: [],
											price: "",
											sort: "",
										})
									}
									className="px-8 py-6 text-base text-black uppercase transition-all duration-500 rounded-none"
								>
									Clear All
								</Button>
							</SheetClose>
							<Button
								// onClick={() => {
								// 	const params = new URLSearchParams();
								// 	if (filterValues.availability)
								// 		params.set("availability", "true");
								// 	if (filterValues.brand.length)
								// 		params.set("brand", filterValues.brand.join(","));
								// 	if (filterValues.price)
								// 		params.set("price", filterValues.price);
								// 	if (filterValues.sort) params.set("sort", filterValues.sort);
								// 	router.push(`${pathname}?${params.toString()}`);
								// 	setIsOpen(false);
								// }}
								onClick={console.log(filterValues)}
								className="px-8 py-6 text-base text-white uppercase transition-all duration-500 bg-black rounded-none hover:bg-deep-brown hover:text-white"
							>
								View Results
							</Button>
						</SheetFooter>
					</div>
					<ScrollBar />
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};
