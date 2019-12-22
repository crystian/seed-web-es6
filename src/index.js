import 'normalize.css';
import './index.scss';
import { dependency } from './dependency';

let response = dependency(true);
console.log('works?:', response);

// init
window.addEventListener('DOMContentLoaded', () => {
	document.getElementById('loadingSection').classList.add('hidden');
	document.getElementById('mainSection').classList.remove('hidden');
});

document.getElementById('works').innerHTML = response;
