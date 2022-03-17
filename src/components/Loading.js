import React from "react";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import { UseCountryContext } from "../contexts";

function Loading() {
	const { darkTheme } = UseCountryContext();
	return (
		<div className='loading-div'>
			<div>
				<Hypnosis
					color={darkTheme ? "#FFFF" : "#000"}
					width='100px'
					height='100px'
					duration='3s'
				/>
			</div>
			<h1 style={{ margin: "1vh 0.5vh", color: darkTheme ? "#FFFF" : "#000" }}>
				Loading...
			</h1>
		</div>
	);
}

export default Loading;
