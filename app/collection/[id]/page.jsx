import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function page({ params }) {
	const id = params.id;

	return (
		<section className="">
			<BreadcrumbComponent id={id} />

			<div className="mt-5">
				<h2 className="font-semibold capitalize">{id}</h2>
			</div>

			<div className="mt-5"></div>
		</section>
	);
}

const BreadcrumbComponent = ({ id }) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/" className="text-xs font-medium">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium font-mont">
						Collection
					</BreadcrumbPage>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium font-mont">
						{id.charAt(0).toUpperCase() + id.slice(1)}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
