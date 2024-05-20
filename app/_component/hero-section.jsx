"use client";
import React, { useEffect, useRef, useState } from "react";

const ResponsiveVideo = () => {
	const videoRef = useRef(null);
	const mobileRef = useRef(null);
	const tabletRef = useRef(null);
	const desktopRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const getDeviceType = () => {
		const width = window.innerWidth;
		if (width < 768) return "Mobile";
		if (width < 1024) return "Tablet";
		return "Desktop";
	};

	const loadVideo = () => {
		const videoElement = videoRef.current;
		const deviceType = getDeviceType();
		let sourceData;

		if (deviceType === "Mobile") {
			sourceData = mobileRef.current.dataset;
		} else if (deviceType === "Tablet") {
			sourceData = tabletRef.current.dataset;
		} else {
			sourceData = desktopRef.current.dataset;
		}

		if (sourceData) {
			videoElement.poster = sourceData.poster;
			videoElement.loop = sourceData.loop === "true";
			videoElement.autoplay = sourceData.autoplay === "true";
			videoElement.muted = sourceData.mute === "true";
			videoElement.defaultMuted = true;
			videoElement.preload = sourceData.preload;

			// Clear existing sources
			while (videoElement.firstChild) {
				videoElement.removeChild(videoElement.firstChild);
			}

			// Append new sources in mobile-first order
			const sources = [
				{ type: "video/mp4", src: sourceData.mp4 },
				{ type: "video/webm", src: sourceData.webm },
				{ type: "video/ogg", src: sourceData.ogg },
			];

			sources.forEach(({ type, src }) => {
				if (src) {
					const sourceElement = document.createElement("source");
					sourceElement.src = src;
					sourceElement.type = type;
					videoElement.appendChild(sourceElement);
				}
			});
		}

		videoElement.load();
		setTimeout(() => {
			if (!videoElement.paused) {
				setIsPlaying(true);
			}
		}, 1000); // Check if the video started playing within 1 second
	};

	useEffect(() => {
		const handleLoad = () => loadVideo();
		window.addEventListener("load", handleLoad);
		window.addEventListener("resize", loadVideo);

		// Call loadVideo immediately for component mount
		loadVideo();

		return () => {
			window.removeEventListener("load", handleLoad);
			window.removeEventListener("resize", loadVideo);
		};
	}, []);

	return (
		<div className="relative w-full h-screen">
			<div
				className="absolute inset-0 z-40"
				style={{
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .8) 100%)",
				}}
			></div>
			<video
				ref={videoRef}
				className="relative inset-0 z-30 object-cover object-center w-full h-screen"
				playsInline
				muted
				loop
				autoPlay
				defaultMuted
				preload="auto"
			>
				Your browser does not support the video tag.
			</video>

			{/* Hidden spans for video source data */}
			<span
				hidden
				ref={mobileRef}
				data-loop="true"
				data-autoplay="true"
				data-mute="true"
				preload="auto"
				data-poster="poster.jpeg"
				data-mp4="https://frikanza.vercel.app/origi.mp4"
				data-webm="https://frikanza.vercel.app/origi.webm"
			></span>
			<span
				hidden
				ref={tabletRef}
				data-loop="true"
				data-autoplay="true"
				data-mute="true"
				preload="auto"
				data-poster="poster.jpeg"
				data-mp4="https://frikanza.vercel.app/origi.mp4"
				data-webm="https://frikanza.vercel.app/origi.webm"
			></span>
			<span
				hidden
				ref={desktopRef}
				data-loop="true"
				data-autoplay="true"
				data-mute="true"
				preload="auto"
				data-poster="poster.jpeg"
				data-mp4="https://frikanza.vercel.app/origi.mp4"
				data-webm="https://frikanza.vercel.app/origi.webm"
			></span>
		</div>
	);
};

export default ResponsiveVideo;
