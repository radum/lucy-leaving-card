// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';

const app = TubesCursor(document.getElementById('canvas'), {
	tubes: {
		colors: ['#f967fb', '#53bc28', '#6958d5'],
		lights: {
			intensity: 200,
			colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5']
		}
	}
});

document.body.addEventListener('click', () => {
	const colors = randomColors(3);
	const lightsColors = randomColors(4);
	console.log(colors, lightsColors);
	app.tubes.setColors(colors);
	app.tubes.setLightsColors(lightsColors);
});

function randomColors(count) {
	return new Array(count).fill(0).map(
		() =>
			'#' +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, '0')
	);
}

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.sparkle-button button');
const closeButton = document.querySelector('dialog button');

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
	dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
	dialog.close();
});

let jhToggle = true;
document.querySelector('img[alt="James Hill"]').addEventListener('click', (event) => {
	event.target.src = jhToggle ? '/images/downbutnotout.png' : '/images/james.jpg';
	jhToggle = !jhToggle;
});
