import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

// import Accordion from './components/Accordion';
// import Search from './components/Search';
// counter exercise
// import Counter from './exercise/Counter';
// import Toggle from './exercise/Toggle';

// const items = [
// 	{
// 		title: 'What is React?',
// 		content: 'React is a front end javascript framework',
// 	},
// 	{
// 		title: 'Why use React?',
// 		content: 'stop asking too many question ffs',
// 	},
// 	{
// 		title: 'How do you use React? ',
// 		content: 'with my damn fingers and me brain',
// 	},
// ];

const options = [
	{
		label: 'The color red',
		value: 'red',
	},
	{
		label: 'The color green',
		value: 'green',
	},
	{
		label: 'A shade of blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			{/* <Accordion itemArray={items} /> */}
			{/* <Toggle /> */}
			{/* <Counter /> */}
			{/* <Search /> */}
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle DropDown
			</button>
			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
		</div>
	);
};

export default App;
