import { getRandomColor } from "./utils"

export default function initApp () {
    console.log("Hello world");
    const changeButton = document.createElement('button');
    changeButton.className = 'button';
    changeButton.textContent = 'Изменить цвет страницы';

    document.body.appendChild(changeButton);
    
    changeButton.addEventListener('click', () => {
        const randomColor = getRandomColor();
        document.body.style.background = randomColor;       
    })
};

