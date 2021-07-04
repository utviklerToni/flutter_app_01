import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Counter from './exercise/Counter';
// import Toggle from './exercise/Toggle';
import Route from './components/Route';
import Header from './components/Header';
import Translate from './components/Translate';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'stop asking too many question ffs',
	},
	{
		title: 'How do you use React? ',
		content: 'with my damn fingers and me brain',
	},
];

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
			{/* 	<Toggle /> */}
			{/* <Counter /> */}
			{/* <Search /> */}
			{/* <button onClick={() => setShowDropdown(!showDropdown)}> */}
			{/* Toggle DropDown */}
			{/* </button> */}
			{/* {showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null} */}

			<Header />
			<Route path='/'>
				{/* quick reminder: whenever there is a jsx inside another jsx, that inner element is provided to the outer one as a prop called children */}

				{/* hence the prop on route component as path and children prop */}
				<Accordion items={items} />
			</Route>

			<Route path='/dropdown'>
				<Dropdown />
			</Route>
			<Route>
				<Translate path='/translate' />
			</Route>
			<Route path='/search'>
				<Search />
			</Route>
		</div>
	);
};

export default App;
