import React from "react";
import { useNavigate } from "react-router-dom";
import { UseCountryContext } from "../contexts";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import { Pagination } from ".";

function CountriesCards() {
	const { loading, currentCountries } = UseCountryContext();
	const navigation = useNavigate();
	const checkCountry = (page) => {
		navigation(page);
	};
	if (loading)
		return (
			<div className='loading-div'>
				<div>
					<Hypnosis color='#FFFF' width='100px' height='100px' duration='3s' />
				</div>
				<h1 style={{ margin: "1vh 0.5vh" }}>Loading...</h1>
			</div>
		);
	if (currentCountries.length < 1) {
		return (
			<div className='unavailable-data'>
				<h1>No Results were Found</h1>
			</div>
		);
	}
	return (
		<>
			<div className='country-main'>
				{currentCountries.map((country) => {
					const { name, alpha3Code, flags, region, population, capital } =
						country;
					return (
						<div
							onClick={() => checkCountry(`/country-detail/${name}`)}
							className='country-container'
							key={alpha3Code}
						>
							<img className='flag' src={flags.png} alt='' />
							<div className='country-details-card'>
								<p>{name}</p>
								<div>
									<ul>
										<li>
											Population:
											<span>{new Intl.NumberFormat().format(population)}</span>
										</li>
										<li>
											Region:<span>{region}</span>
										</li>
										<li>
											Capital:<span>{capital}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Pagination />
		</>
	);
}

export default CountriesCards;
