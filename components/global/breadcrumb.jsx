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
					<Link href="/" className="text-xs font-medium text-black underline">
						Home
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link
						href="/collections"
						className="text-xs font-medium text-black underline"
					>
						Collections
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link
						href={`/collection/${link}`}
						className="text-xs font-medium text-black underline capitalize "
					>
						{link}
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium capitalize font-mont text-[#777]">
						{id}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
