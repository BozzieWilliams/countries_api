/* eslint-disable array-callback-return */
import { useNavigate, useParams } from "react-router-dom";
import { UseCountryContext } from "../contexts";
import { BiArrowBack } from "react-icons/bi";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";

function CountryDetails() {
	const currentCountry = useParams();
	const { currentCountries, darkTheme } = UseCountryContext();
	const navigation = useNavigate();
	const activeCountry = currentCountries?.find(
		(country) => country?.name === currentCountry.cuntryName
	);

	if (!activeCountry)
		return (
			<div className='loading-div'>
				<div>
					<Hypnosis color='#FFFF' width='100px' height='100px' duration='3s' />
				</div>
				<h1 style={{ margin: "1vh 0.5vh" }}>Loading...</h1>
			</div>
		);

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

	return (
		<div className={darkTheme ?'country-details':'country-details app-light'}>
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
				<div className='country-details-container'>
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
								Top Level Domain: <span>{topLevelDomain[0]}</span>
							</p>
							<p>
								Currencies: <span>{currencies[0].name}</span>
							</p>
							<p>
								Languages:
								{languages?.map((language) => (
									<span key={language.iso639_1}>{language.name}</span>
								))}
							</p>
						</div>
					</div>

					<div className='country-fragment-detail neighbours'>
						<p>Border Countries: </p>
						<p>
							{borders?.slice(0, 3).map((border, index) => (
								<span className='border-country' key={border + index}>
									{border}
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
