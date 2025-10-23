// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

import 'virtual:uno.css'
import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';

const JSON_BIN_KEY = '$2a$10$/SrHvk.tZZIb5jKD.nSGtOD2TxmVj21lkmpTMTCK2361wJEl6a0NO';
const JSON_BIN_ID = '68fa134a43b1c97be97a67e7';

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
	// console.log(colors, lightsColors);
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
showButton.addEventListener('click', async () => {
	try {
		// Fetch current data from JSONBIN
		const response = await fetch(`https://api.jsonbin.io/v3/b/${JSON_BIN_ID}?meta=false`, {
			method: 'GET',
			headers: {
				'X-Access-Key': JSON_BIN_KEY,
				'X-Bin-Meta': 'false'
			}
		});

		if (!response.ok) {
			console.log(new Error(`HTTP error! status: ${response.status}`));
		}

		const data = await response.json();
		const currentClicks = data.clicks || 0;

		// Update the rickroll-count span
		const rickrollCountSpan = document.getElementById('rickroll-count');
		if (rickrollCountSpan) {
			rickrollCountSpan.textContent = currentClicks;
		}

		// Increment the counter and update the bin
		const newData = { ...data, clicks: currentClicks + 1 };

		const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'X-Access-Key': JSON_BIN_KEY
			},
			body: JSON.stringify(newData)
		});

		if (!updateResponse.ok) {
			console.log(new Error(`Update failed! status: ${updateResponse.status}`));
		}

		console.log('Click counter updated successfully');
	} catch (error) {
		console.error('Error fetching/updating click counter:', error);
	}

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
