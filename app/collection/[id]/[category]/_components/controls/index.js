import {
	DoubleView,
	FourGridView,
	SingleView,
	ThreeGridView,
	TwoGridView,
} from "../views";
export const MobileControls = ({ setMobileView, mobileView }) => {
	return (
		<div className="flex items-center justify-between md:hidden">
			<div className="flex space-x-4">
				<DoubleView setView={() => setMobileView("double")} view={mobileView} />
				<SingleView setView={() => setMobileView("single")} view={mobileView} />
			</div>
		</div>
	);
};
export const DesktopControls = ({ setMobileView, mobileView }) => {
	return (
		<div className="items-center justify-between hidden md:flex ">
			<div className="flex space-x-4">
				<TwoGridView
					setView={() => setMobileView("double")}
					view={mobileView}
				/>

				<ThreeGridView
					setView={() => setMobileView("tripple")}
					view={mobileView}
				/>

				<FourGridView
					setView={() => setMobileView("quadruple")}
					view={mobileView}
				/>
			</div>
		</div>
	);
};
