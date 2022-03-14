import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { UseCountryContext } from "../contexts";

function Header() {
	const { countriesData, handleSearch, countrySearch, handleFilter } =
		UseCountryContext();
	let regionValues = [];
	let ids = 200;
	for (let item of new Set(countriesData?.map((country) => country.region))) {
		regionValues.push({ id: ++ids, value: item });
	}
	const regions = [...regionValues, { id: 1, value: "cleanUp" }];
	return (
		<div className='header'>
			<div className='title-container'>
				<p>Where in the world?</p>
				<p>
					<BsFillMoonFill />
					Dark Mode
				</p>
			</div>
			<div className='input-container'>
				<div className='search'>
					<FaSearch
						style={{ paddingLeft: "2vh", flex: 0.3, alignSelf: "center" }}
					/>
					<input
						onChange={handleSearch}
						value={countrySearch}
						type='text'
						// style={{ flex: 0.7 }}
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
		</div>
	);
}

export default Header;
