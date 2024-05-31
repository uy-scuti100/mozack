// "use client";
// import { useState, useContext, createContext } from "react";

// const SearchContext = createContext(null);

// export const SearchContextProvider = ({ children }) => {
// 	const [openSearch, setOpenSearch] = useState(false);

// 	const toggleSearch = () => {
// 		setOpenSearch((prev) => !prev);
// 	};

// 	return (
// 		<SearchContext.Provider value={{ toggleSearch, openSearch, setOpenSearch }}>
// 			{children}
// 		</SearchContext.Provider>
// 	);
// };

// export const useSearchContext = () => {
// 	return useContext(SearchContext);
// };
