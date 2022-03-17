import React from "react";
import { useLocation } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { UseCountryContext } from "../contexts";

function Header() {
	const {
		countriesData,
		handleSearch,
		countrySearch,
		handleFilter,
		switchTheme,
		darkTheme,
	} = UseCountryContext();
	const location = useLocation();
	let regionValues = [];
	let ids = 200;
	for (let item of new Set(countriesData?.map((country) => country.region))) {
		regionValues.push({ id: ++ids, value: item });
	}
	const regions = [...regionValues, { id: 1, value: "cleanUp" }];
	return (
		<div className={darkTheme ? "header" : "header header-light"}>
			<div className='title-container'>
				<p>Where in the world?</p>
				<div onClick={switchTheme} className='toggle'>
					<BsFillMoonFill />
					<p className='theme'>{darkTheme ? "Light Mode" : "Dark Mode"}</p>
				</div>
			</div>
			{location.pathname === "/" && (
				<div className='input-container'>
					<div className='search'>
						<FaSearch
							style={{
								paddingLeft: "2vh",
								flex: 0.3,
								alignSelf: "center",
								fontSize: "3vh",
							}}
						/>
						<input
							onChange={handleSearch}
							value={countrySearch}
							type='text'
							placeholder='Search for a country...'
						/>
					</div>
					<div>
						<select onChange={handleFilter}>
							{[...regions]?.map((item) => {
								if (item.id === 1) {
									return (
										<option key={item.id} value='' disabled selected hidden>
											Filter by Region
										</option>
									);
								}
								return (
									<option key={item.id} value={item.value}>
										{item.value}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			)}
		</div>
	);
}

export default Header;
