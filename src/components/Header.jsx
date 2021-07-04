import React from 'react';
import Link from './Link';

const Header = () => {
	// huge downside of this approach is that,
	// it will reload the whole page i.e.index.html

	// to avoid this , we create a Link component,
	// with a onclick handler, which will stop unnecessary reload
	// by executing a logic aka navigation event

	return (
		<div className='ui secondary pointing menu'>
			<Link href='/' className='item'>
				Accordian
			</Link>
			<Link href='/list' className='item'>
				Search
			</Link>
			<Link href='/dropdown' className='item'>
				Dropdown
			</Link>
			<Link href='/translate' className='item'>
				Translate
			</Link>
		</div>
	);
};

export default Header;
