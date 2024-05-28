import { cn } from "@/lib/utils";
import Link from "next/link";

export const HeadingOne = ({ style, children }) => (
	<h1
		style={{ fontSize: "clamp(2.5rem, 1.8785rem + 2.6519vw, 4rem)" }}
		className={cn("font-mont", style)}
	>
		{children}
	</h1>
);

export const HeadingTwo = ({ style, children }) => (
	<h2
		style={{ fontSize: "clamp(2rem, 1.5856rem + 1.768vw, 3rem)" }}
		className={cn("font-mont", style)}
	>
		{children}
	</h2>
);

export const HeadingThree = ({ style, children }) => (
	<h3
		style={{ fontSize: "clamp(1.125rem, 0.866rem + 1.105vw, 1.75rem)" }}
		className={cn("font-mont", style)}
	>
		{children}
	</h3>
);

export const BodyFont = ({ style, children }) => (
	<p
		style={{ fontSize: "clamp(1rem, 0.9482rem + 0.221vw, 1.125rem)" }}
		className={cn("font-inter", style)}
	>
		{children}
	</p>
);

export const SmallFont = ({ style, children }) => (
	<small
		style={{ fontSize: "clamp(0.875rem, -1.7148rem + 11.0497vw, 7.125rem)" }}
		className={cn("font-inter", style)}
	>
		{children}
	</small>
);

export const LinkComponent = ({ style, children, link }) => (
	<Link href={link} className={cn("font-mont text-sm", style)}>
		{children}
	</Link>
);
