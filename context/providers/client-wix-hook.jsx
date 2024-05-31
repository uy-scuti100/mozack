"use client";
import { WixClientContext } from "@/context/providers/wix-client-provider";
import { useContext } from "react";

export const useWixClient = () => {
	const client = useContext(WixClientContext);
	if (!client) {
		throw new Error(
			"useWixClient must be used within a WixClientContextProvider"
		);
	}
	return client;
};
