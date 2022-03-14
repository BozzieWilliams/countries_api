import "./App.css";
import CountriesCards from "./components/CountriesCards";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

function App() {
	return (
		<div className='App'>
			<Header />
			<CountriesCards />
			<Pagination />
		</div>
	);
}

export default App;
