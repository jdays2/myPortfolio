import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
	const [match, setMatch] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== match) {
			setMatch(media.matches);
		}
		const lisneter = () => {
			setMatch(media.matches);
		};
		window.addEventListener('resize', lisneter);

		return () => {
			window.removeEventListener('resize', lisneter);
		};
	}, [match, query]);
	return match;
};
