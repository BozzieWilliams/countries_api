/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "../axios";

export const CountryContext = createContext();
export const UseCountryContext = () => useContext(CountryContext);
export default function CountryProvider({ children }) {
	const [countriesData, setCountriesData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [countrySearch, setCountrySearch] = useState("");
	const [countryFilter, setCountryFilter] = useState("");
	const [darkTheme, setDarkTheme] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesPerPage] = useState(12);
	const handleSearch = (e) => setCountrySearch(e.target.value);
	const handleFilter = (e) => setCountryFilter(e.target.value);
	const switchTheme = () => setDarkTheme(!darkTheme);
	const filteredData = countriesData?.filter((country) => {
		const { name, region } = country;
		if (
			name.toLowerCase().indexOf(countrySearch.toLowerCase()) >= 0 &&
			region.toLowerCase().indexOf(countryFilter.toLowerCase()) >= 0
		)
			return country;
	});
	// Get current countries
	const indexOfLastCountries = currentPage * countriesPerPage;
	const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
	const currentCountries = filteredData?.slice(
		indexOfFirstCountries,
		indexOfLastCountries
	);
	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const request = await axios.get();
			setCountriesData(request.data);
			setLoading(false);
			return request;
		}
		fetchData();
	}, []);
	const appData = {
		countriesData,
		loading,
		currentCountries,
		countriesPerPage,
		paginate,
		handleSearch,
		countrySearch,
		handleFilter,
		countryFilter,
		filteredData,
		switchTheme,
		darkTheme,
	};
	return (
		<CountryContext.Provider value={appData}>
			{children}
		</CountryContext.Provider>
	);
}
