/* eslint-disable array-callback-return */
import { useNavigate, useParams } from "react-router-dom";
import { UseCountryContext } from "../contexts";
import { BiArrowBack } from "react-icons/bi";
import Loading from "./Loading";

function CountryDetails() {
	const currentCountry = useParams();
	const { currentCountries, darkTheme, getNeighbour } = UseCountryContext();
	const navigation = useNavigate();
	const checkCountry = (page) => {
		navigation(page);
	};
	const activeCountry = currentCountries?.find(
		(country) => country?.alpha3Code === currentCountry?.cuntryCode
	);

	if (!activeCountry) return <Loading />;

	const {
		name,
		nativeName,
		region,
		subregion,
		topLevelDomain,
		currencies,
		languages,
		population,
		capital,
		flags,
		borders,
	} = activeCountry;
	const neigbours = [];
	function addNeighbours() {
		if (activeCountry) {
			const countries = borders?.slice(0, 3);
			if (countries?.length > 0) {
				for (let item of countries) {
					neigbours.push(getNeighbour(item));
				}
			} else {
				console.log("");
			}
		}
	}
	if (activeCountry) {
		addNeighbours();
	}
	return (
		<div
			className={darkTheme ? "country-details" : "country-details app-light"}
		>
			<div className='back-btn-container'>
				<div
					onClick={() => navigation("/")}
					className='back-btn-container-contents'
				>
					<BiArrowBack />
					<span> Back</span>
				</div>
			</div>
			<div className='country-details-styles-container'>
				<div className='country-details-image-container'>
					<img src={flags.png} alt='country-flag' />
				</div>
				<div className='country-details-container '>
					<h2>{name}</h2>
					<div className='contry-detail-main'>
						<div className='country-fragment-detail'>
							<p>
								Native Name: <span>{nativeName}</span>
							</p>
							<p>
								Population:{" "}
								<span>{new Intl.NumberFormat().format(population)}</span>
							</p>
							<p>
								Region: <span>{region}</span>
							</p>
							<p>
								Sub Region: <span>{subregion}</span>
							</p>
							<p>
								Capital: <span>{capital}</span>
							</p>
						</div>
						<div className='country-fragment-detail additional'>
							<p>
								Top Level Domain:
								{topLevelDomain?.slice(0, 1)?.map((domain) => {
									return <span key={domain}>{domain}</span>;
								})}
							</p>
							<p>
								Currencies: <span>{currencies[0]?.name}</span>
							</p>
							<p>
								Languages:
								{languages?.map((language, index) =>
									index === languages?.length - 1 ? (
										<span key={language?.iso639_1}>{language?.name}</span>
									) : (
										<span key={language?.iso639_1}>{language?.name},</span>
									)
								)}
							</p>
						</div>
					</div>

					<div className='country-fragment-detail neighbours'>
						<p>Border Countries: </p>
						<p>
							{neigbours?.map((border, index) => (
								<span
									onClick={() =>
										checkCountry(`/country-detail/${border?.alpha3Code}`)
									}
									className='border-country'
									key={border?.alpha3Code + index}
								>
									{border?.name}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryDetails;
