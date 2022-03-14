import React from "react";
import { UseCountryContext } from "../contexts";

function CountriesCards() {
	const { loading, currentCountries } = UseCountryContext();
	if (loading)
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
					height: "100%",
					color: "white",
				}}
			>
				<h1>Loading.......</h1>
			</div>
		);
	if (currentCountries.length < 1) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
					height: "100%",
					color: "white",
				}}
			>
				<h1>No Results were Found</h1>
			</div>
		);
	}
	return (
		<div className='country-main'>
			{currentCountries.map((country) => {
				const { name, alpha3Code, flags, region, population, capital } =
					country;
				return (
					<div className='country-container' key={alpha3Code}>
						<img className='flag' src={flags.png} alt='' />
						<div className='country-details'>
							<p>{name}</p>
							<div>
								<ul>
									<li>
										Population:
										<span>
											{new Intl.NumberFormat().format(population)}
										</span>{" "}
									</li>
									<li>
										Region:<span>{region}</span>{" "}
									</li>
									<li>
										Capital:<span>{capital}</span>{" "}
									</li>
								</ul>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CountriesCards;
