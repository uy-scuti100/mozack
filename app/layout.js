import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: [
		"Luxury fashion",
		"High-end fashion",
		"Exclusive collection",
		"Couture clothing",
		"Designer fashion",
		"Elegant fashion",
		"Fashion collection",
		"Modern luxury",
		"Sophisticated style",
		"Premium clothing",
		"Fashion brand",
		"Timeless elegance",
		"Luxury couture",
		"Fashion for discerning individuals",
		"Exquisite fashion",
	],

	authors: [
		{
			name: "Frikanza",
			url: "https://frikanza.vercel.app",
		},
	],
	creator: "Uy_Scuti",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@hussain_joe",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
