"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadcrumbComponent = ({ id }) => {
	const collectionName = usePathname();
	const link = collectionName.split("/")[2];
	return (
		<Breadcrumb className="px-4">
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/" className="text-xs font-medium">
						Home
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium font-mont">
						Collection
					</BreadcrumbPage>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link
						href={`/collection/${link}`}
						className="text-xs font-medium capitalize "
					>
						{link}
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium capitalize font-mont">
						{id}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
