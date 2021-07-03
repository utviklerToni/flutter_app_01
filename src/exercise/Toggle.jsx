import { useState } from 'react';

const Toggle = () => {
	const [toggler, setToggler] = useState(false);

	const onClick = () => {
		setToggler(!toggler);
	};

	return (
		<div>
			<button onClick={onClick}>click</button>
			{toggler ? <Result /> : null}
		</div>
	);
};

const Result = () => {
	return <div>peek a boo</div>;
};

export default Toggle;
