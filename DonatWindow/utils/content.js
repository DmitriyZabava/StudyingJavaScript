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
    }
};