import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState('');

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	// on double click it closes the toggled item

	const onDoubleClickToggle = () => {
		setActiveIndex(!activeIndex);
	};

	const renderItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';

		return (
			<Fragment key={item.title}>
				<div
					className={`title ${active}`}
					// onDoubleClick={onDoubleClickToggle}
					onClick={() => onTitleClick(index)}
				>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</Fragment>
		);
	});

	return (
		<Fragment>
			<div className='ui styled accordion'>{renderItems}</div>
		</Fragment>
	);
};

export default Accordion;
