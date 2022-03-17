import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountriesCards, Header, CountryDetails } from "./components";
import "./App.css";
import { UseCountryContext } from "./contexts";

function App() {
	const { darkTheme } = UseCountryContext();
	return (
		<Router>
			<div className={darkTheme ? "App" : "app-light"}>
				<Header />
				<Routes>
					<Route index element={<CountriesCards />} path='/' />
					<Route
						element={<CountryDetails />}
						path='country-detail/:cuntryCode'
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
