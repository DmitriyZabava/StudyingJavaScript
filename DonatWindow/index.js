import './index.css';

import { lisnerButton } from './utils/lisner';

lisnerButton();


const inputField = document.querySelector('.donate-form__donate-input');       
const donate = Number(inputField.value);
console.log('donate', donate)