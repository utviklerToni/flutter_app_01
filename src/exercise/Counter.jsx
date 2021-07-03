import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const onButtonClick = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>Counter app </h1>
			<button onClick={onButtonClick}>Click here</button>
			<h1>{counter}</h1>
		</div>
	);
};

export default Counter;
