import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		// the onBodyClick contains the callback events
		// now we can easily manage the removal of our component Dropdown from DOM
		// by removing the add event listener

		// so in the below clean up function , we are removing the "click" event,
		// from the onBodyClick function

		const onBodyClick = (event) => {
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener('click', onBodyClick);

		// clean up function
		// react will call this function whenever the dropdown gets removed from DOM
		// it runs before the next time the above function is called
		// that's why when we remove the dropdown component from DOM,
		// we also remove the event listener avoiding calling methods on null
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className='item'
				onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className='ui form container'>
			<div className='field'>
				<label className='label'>{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className='dropdown icon'></i>
					<div className='text'>{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
