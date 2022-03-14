/* eslint-disable jsx-a11y/anchor-is-valid */
import { UseCountryContext } from "../contexts";

const Pagination = () => {
	const { filteredData, countriesPerPage, paginate } = UseCountryContext();
	const dataCount = filteredData?.length;
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(dataCount / countriesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='page-numbering'>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a
							style={{ cursor: "pointer" }}
							onClick={() => paginate(number)}
							className='page-link'
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
