export class DonateItem {
    #date;
    #donate;
    #donateContainer;

    constructor(date, donate) {
        this.#date = date;
        this.#donate = donate;
        this.#donateContainer = document.querySelector('.donates-container__donates');

    }

    renderDonateItem() {
        const bDonateItem = document.createElement('b');
        bDonateItem.textContent = ` - ${this.#donate}$`;

        const donateItem = document.createElement('div');
        donateItem.className = 'donate-item';
        donateItem.innerText= this.#date;
        donateItem.append(bDonateItem);
        this.#donateContainer.append(donateItem);

        return this.#donateContainer
    }
};



// class DonateForm {
//     #donateForm

//     constructor() {        
//         this.#donateForm = document.querySelector('.donate-form');
//     }

//     renderDonateForm () {
//         const h1Element = document.createElement('h1');
//         h1Element.id = 'total-amount';
//         h1Element.textContent =`$`;

//         const labelElement = document.createElement('label');
//         labelElement.className = 'donate-form__input-label';
//         labelElement.innerText = 'Введите сумму в $';

//         const inputElement = document.createElement('input');
//         inputElement.className = 'donate-form__donate-input';
//         inputElement.name = 'amount';
//         inputElement.type = 'number';
//         inputElement.max = '100';
//         inputElement.min = '1';
//         inputElement.required = '';
//         labelElement.append(inputElement);

//         const buttonElement = document.createElement('button');
//         buttonElement.className = 'donate-form__submit-button';
//         buttonElement.type = 'submit';
//         buttonElement.textContent = 'Пожертвовать';

//         this.#donateForm.append(h1Element, labelElement, buttonElement);

//         return this.#donateForm;
//     };
// };

// export const donateForm = new DonateForm();