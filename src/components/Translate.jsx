import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
	{
		label: 'Norwegian',
		value: 'no',
	},
	{
		label: 'Russsian',
		value: 'ru',
	},
	{
		label: 'Icelandic',
		value: 'is',
	},
	{
		label: 'chinese',
		value: 'zh',
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>

			<Dropdown
				label='select a language'
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
			/>

			<hr />
			<h3 className='ui header'>output</h3>
			<Convert text={text} language={language} />
		</div>
	);
};

export default Translate;
