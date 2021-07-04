import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 1800);

		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				// using https will give cors error
				'http://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);

			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation();
		// anytime we get new language and text,
		// this use effect will run
	}, [language, debouncedText]);

	return <div className='ui header'>{translated}</div>;
};

export default Convert;
