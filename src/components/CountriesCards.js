import React from "react";
import { useNavigate } from "react-router-dom";
import { UseCountryContext } from "../contexts";
import { Pagination } from ".";
import Loading from "./Loading";

function CountriesCards() {
	const { loading, currentCountries, darkTheme } = UseCountryContext();
	const navigation = useNavigate();
	const checkCountry = (page) => {
		navigation(page);
	};
	if (loading) return <Loading />;
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
							onClick={() => checkCountry(`/country-detail/${alpha3Code}`)}
							className='country-container'
							key={alpha3Code}
							style={{ background: darkTheme ? "hsl(209, 23%, 22%)" : "white" }}
						>
							<img className='flag' src={flags.png} alt='' />
							<div
								className={
									darkTheme
										? "country-details-card"
										: "country-details-card country-details-card-light"
								}
							>
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
