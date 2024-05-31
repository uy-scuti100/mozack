import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections, inventory } from "@wix/stores";
import { dashboard } from "@wix/dashboard";
import { cookies } from "next/headers";

export async function wixClientServer() {
	let refreshToken;
	try {
		const cookieServer = cookies();
		refreshToken = JSON.parse(cookieServer.get("refreshToken").value || "");
	} catch (error) {
		console.error("Error parsing refresh token:", error);
	}

	const wixServer = createClient({
		modules: {
			products,
			collections,
		},

		auth: OAuthStrategy({
			clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
			tokens: {
				refreshToken,
				accessToken: { value: "", expiresAt: 0 },
			},
		}),
	});

	return wixServer;
}
