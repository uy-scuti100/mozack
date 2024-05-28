import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/utils";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});
export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: [
		"Luxury furniture",
		"High-end furnishings",
		"Exclusive furniture collection",
		"Couture home decor",
		"Designer furniture",
		"Elegant home furnishings",
		"Furniture collection",
		"Modern luxury furniture",
		"Sophisticated furniture style",
		"Premium home furnishings",
		"Furniture brand",
		"Timeless furniture elegance",
		"Luxury furniture couture",
		"Furniture for discerning individuals",
		"Exquisite furniture",
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
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${montserrat.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
