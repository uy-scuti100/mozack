import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import getBase64 from "../../lib/getBase64";

export default async function page() {
	// base64 funtion for images blurred data

	const image_urlBuffers = await Promise.all(
		data.map(async (item) => {
			const image_urlBuffer = await getBase64(item.image_url);
			return image_urlBuffer;
		})
	);
	// console.log(image_urlBuffers);
	return (
		<main className="px-4 pb-40 pt-28">
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link href="/" className="text-xs font-medium">
								Home
							</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-xs font-medium font-mont">
								Collections
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="mt-5">
					<h2 className="font-semibold">Collections</h2>
				</div>
				<div className="grid grid-cols-2 mt-5 gap-x-3 gap-y-16 lg:grid-cols-3 md:grid-cols-2">
					{data.map((item, index) => {
						return (
							<div className="flex flex-col gap-5" key={index}>
								<Link
									href={item.link}
									className="flex flex-col w-full h-[280px] sm:h-[287px]  md:h-[300px]  lg:h-[500px] gap-2"
								>
									<div className="relative w-full h-full ">
										<Image
											src={item.image_url}
											alt={item.name}
											fill
											placeholder="blur"
											blurDataURL={image_urlBuffers[index]}
											className="w-full h-full object-fit"
										/>
										<div
											className="absolute inset-0 z-20"
											style={{
												background:
													"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5%, rgba(0, 0, 0, .1) 100%)",
											}}
										/>

										<div className="absolute z-50 px-2 py-1 text-[10px] font-medium text-white uppercase bg-ash left-3 font-mont bottom-3 backdrop-blur-2xl">
											{item.name}
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			;
		</main>
	);
}

const data = [
	{
		name: "Sofas",
		image_url:
			"https://i.pinimg.com/564x/67/81/97/67819781a390d838108b4e236307a915.jpg",
		link: "/collection/seats/sofas",
	},
	{
		name: "Lounge Chairs",
		image_url:
			"https://i.pinimg.com/474x/f6/ba/c6/f6bac6cf6c6d42e5e2795494c45dc3cb.jpg",
		link: "/collection/seats/lounge_chairs",
	},
	{
		name: "Dining Chairs",
		image_url:
			"https://i.pinimg.com/564x/39/aa/8b/39aa8bb6ccedb0a7dac04cd47f20999e.jpg",
		link: "/collection/seats/dining_chairs",
	},
	{
		name: "Stools",
		image_url:
			"https://i.pinimg.com/474x/6c/2e/91/6c2e9127c53dd919cc08144810b463b7.jpg",
		link: "/collection/seats/stools",
	},
	{
		name: "Daybeds",
		image_url:
			"https://i.pinimg.com/564x/49/ee/a1/49eea1aa5b26d88b66054c68138ca5a6.jpg",
		link: "/collection/seats/daybeds",
	},
	{
		name: "Benches",
		image_url:
			"https://i.pinimg.com/564x/16/08/21/160821fe5e384d5a8225d8e918d940bb.jpg",
		link: "/collection/seats/benches",
	},

	{
		name: "Dining Tables",
		image_url:
			"https://i.pinimg.com/736x/8d/5e/e6/8d5ee619267413238f92609337c06154.jpg",
		link: "/collection/tables/dining_tables",
	},
	{
		name: "Coffee Tables",
		image_url:
			"https://i.pinimg.com/736x/40/fb/01/40fb01d4b62b7e05ec2609d3e640c2dc.jpg",
		link: "/collection/tables/coffee_tables",
	},
	{
		name: "Desks",
		image_url:
			"https://i.pinimg.com/564x/13/79/9f/13799f0e77d04ce44076743c657a1f7e.jpg",
		link: "/collection/tables/desks",
	},
	{
		name: "Consoles",
		image_url:
			"https://i.pinimg.com/474x/d7/58/b3/d758b3c24aea8d5a3c9c6a676e4abbe8.jpg",
		link: "/collection/tables/consoles",
	},
	{
		name: "Side Tables",
		image_url:
			"https://i.pinimg.com/736x/90/cb/1b/90cb1bdbcd44f3342c527a53a1289285.jpg",
		link: "/collection/tables/side_tables",
	},

	{
		name: "Chandeliers",
		image_url:
			"https://i.pinimg.com/564x/7c/05/9f/7c059f46dfac077d04acd2ba4b1b834e.jpg",
		link: "/collection/lighting/chandeliers",
	},
	{
		name: "Pendants",
		image_url:
			"https://i.pinimg.com/736x/43/00/6e/43006ebc8b9183a675747aae897be6a2.jpg",
		link: "/collection/lighting/pendants",
	},
	{
		name: "Sconces",
		image_url:
			"https://i.pinimg.com/736x/5f/45/3d/5f453d32f2f6b02d4f9e14d4d99bb4d1.jpg",
		link: "/collection/lighting/sconces",
	},
	{
		name: "Floor Lamps",
		image_url:
			"https://i.pinimg.com/564x/ea/87/d3/ea87d34c3cf59f5b699ea56fbf194ff0.jpg",
		link: "/collection/lighting/floor_lamps",
	},
	{
		name: "Table Lamps",
		image_url:
			"https://i.pinimg.com/564x/1b/36/77/1b36771a172e94015b6793b071308c9f.jpg",
		link: "/collection/lighting/table_lamps",
	},

	{
		name: "Dressers",
		image_url:
			"https://i.pinimg.com/474x/b4/59/2d/b4592de947607cebd6e4e3c5831a7358.jpg",
		link: "/collection/storage/dressers",
	},
	{
		name: "Cabinets",
		image_url:
			"https://i.pinimg.com/564x/56/4e/17/564e17f63228c2d5ec563c00ca2a96bb.jpg",
		link: "/collection/storage/cabinets",
	},
	{
		name: "Sideboards",
		image_url:
			"https://i.pinimg.com/474x/96/34/48/963448fe302da44cb096b95702e76602.jpg",
		link: "/collection/storage/sideboards",
	},
	{
		name: "Shelving",
		image_url:
			"https://i.pinimg.com/564x/bd/29/9a/bd299a5f5f2363986e331488f6e0910c.jpg",
		link: "/collection/storage/shelving",
	},

	{
		name: "Outdoor Seating",
		image_url:
			"https://i.pinimg.com/736x/3c/46/9d/3c469d0fb9c3bc8ad61a539373eacdc3.jpg",
		link: "/collection/outdoor/outdoor_seating",
	},
	{
		name: "Outdoor Tables",
		image_url:
			"https://i.pinimg.com/564x/bf/10/ec/bf10ec2cf91192cc69940bfef7b881f7.jpg",
		link: "/collection/outdoor/outdoor_tables",
	},
	{
		name: "Outdoor Lighting",
		image_url:
			"https://i.pinimg.com/564x/f3/66/d7/f366d7465c766f5c8ac22a40ccbadc50.jpg",
		link: "/collection/outdoor/outdoor_lighting",
	},

	{
		name: "Rugs",
		image_url:
			"https://i.pinimg.com/474x/a8/82/67/a882676a08ffdfa705efa5707e5d817c.jpg",
		link: "/collection/accessories/rugs",
	},
	{
		name: "Mirrors",
		image_url:
			"https://i.pinimg.com/736x/0f/8f/bb/0f8fbbffc0b3843d740d6f0202d72584.jpg",
		link: "/collection/accessories/mirrors",
	},
	{
		name: "Sculptures",
		image_url:
			"https://i.pinimg.com/564x/dc/1c/ec/dc1cec125930c1c087215a34e9cc88e6.jpg",
		link: "/collection/accessories/sculptures",
	},
	{
		name: "Bathroom",
		image_url:
			"https://i.pinimg.com/736x/89/25/58/892558226103f52aec7c20ef8750a521.jpg",
		link: "/collection/accessories/bathroom",
	},
	{
		name: "Kitchen",
		image_url:
			"https://i.pinimg.com/564x/65/bc/4b/65bc4b7b01d6b4276d07551be28c286a.jpg",
		link: "/collection/accessories/kitchen",
	},
	{
		name: "Hardware",
		image_url:
			"https://i.pinimg.com/736x/f7/74/d8/f774d803e53fe730587d6fb20b1c8851.jpg",
		link: "/collection/accessories/hardware",
	},
];
