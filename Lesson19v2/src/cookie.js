const fineButton = document.querySelector('.cookie-consent__button');



export function cookieTask  ()  {
    if (localStorage.getItem('cookie')) {
        const cookieConsent = document.querySelector('.cookie-consent');
        cookieConsent.style.display = 'none';
    
    } else if (!localStorage.getItem('cookie')) {
        fineButton.addEventListener('click', () => {
            const cookieConsent = document.querySelector('.cookie-consent');
            cookieConsent.style.display = 'none';
            localStorage.setItem('cookie', 'true')    
        });
    };
};

