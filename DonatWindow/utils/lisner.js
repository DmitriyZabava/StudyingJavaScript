import { submitButton, date, totalAmout } from './constant';
import { DonateItem } from './content';


export function lisnerButton () {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const inputField = document.querySelector('.donate-form__donate-input');       
        const donate = Number(inputField.value);
        let totalSum = totalAmout.textContent;
        totalSum = Number(totalSum.slice(0,(totalSum.length - 1)))
        
        const donateItem = new DonateItem(date, donate);
        donateItem.renderDonateItem();
        totalAmout.textContent =`${totalSum += donate}$`

        inputField.value = '';
    })
}