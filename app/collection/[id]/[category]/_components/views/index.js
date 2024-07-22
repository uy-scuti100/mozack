export const SingleView = ({ setView, view }) => {
	return (
		<button className="p-1">
			<svg
				onClick={setView}
				role="presentation"
				width="20"
				height="20"
				viewBox="0 0 18 18"
				fill="none"
				className={`cursor-pointer ${view === "single" ? "" : "opacity-50"}`}
			>
				<path fill="currentcolor" d="M0 0h18v18H0z"></path>
			</svg>
		</button>
	);
};
export const DoubleView = ({ setView, view }) => {
	return (
		<button className="p-1">
			<svg
				onClick={setView}
				role="presentation"
				width="20"
				height="20"
				viewBox="0 0 18 18"
				fill="none"
				className={`cursor-pointer ${view === "double" ? "" : "opacity-50"}`}
			>
				<path
					fill="currentcolor"
					d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"
				></path>
			</svg>
		</button>
	);
};

export const FourGridView = ({ setView, view }) => {
	return (
		<svg
			onClick={setView}
			role="presentation"
			width="18"
			viewBox="0 0 18 18"
			fill="none"
			className={`cursor-pointer ${
				view === "quadruple" ? "opacity-100" : "opacity-50"
			}`}
		>
			<path
				fill="currentColor"
				d="M0 0h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0z"
			></path>
		</svg>
	);
};

export const ThreeGridView = ({ setView, view }) => {
	return (
		<svg
			role="presentation"
			width="18"
			viewBox="0 0 18 18"
			fill="none"
			onClick={setView}
			className={`cursor-pointer ${
				view === "tripple" ? "opacity-100" : "opacity-50"
			}`}
		>
			<path
				fill="currentColor"
				d="M0 0h4v4H0zM0 7h4v4H0zM0 14h4v4H0zM7 0h4v4H7zM7 7h4v4H7zM7 14h4v4H7zM14 0h4v4h-4zM14 7h4v4h-4zM14 14h4v4h-4z"
			></path>
		</svg>
	);
};

export const TwoGridView = ({ setView, view }) => {
	return (
		<svg
			role="presentation"
			width="18"
			viewBox="0 0 18 18"
			fill="none"
			className={`cursor-pointer ${
				view === "double" ? "opacity-100" : "opacity-50"
			}`}
			onClick={setView}
		>
			<path
				fill="currentColor"
				d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"
			></path>
		</svg>
	);
};
