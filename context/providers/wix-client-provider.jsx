"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections, inventory } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, useContext } from "react";

const refreshToken = Cookies.get("refreshToken");

const wixClient = createClient({
	modules: {
		products,
		collections,
		inventory,
	},
	auth: OAuthStrategy({
		clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
		tokens: {
			refreshToken: refreshToken ? JSON.parse(refreshToken) : null,
			accessToken: { value: "", expiresAt: 0 },
		},
	}),
});

export const WixClientContext = createContext(wixClient);

export const WixClientContextProvider = ({ children }) => {
	return (
		<WixClientContext.Provider value={wixClient}>
			{children}
		</WixClientContext.Provider>
	);
};

export const useWixClient = () => {
	const client = useContext(WixClientContext);
	if (!client) {
		throw new Error(
			"useWixClient must be used within a WixClientContextProvider"
		);
	}
	return client;
};
