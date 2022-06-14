import "./index.css";
import JS_LOGO from './assets/jslogo.png';


const jsLogoHTML = document.createElement('img');
jsLogoHTML.className = 'js-logo-img';
jsLogoHTML.src = JS_LOGO;

document.body.append(jsLogoHTML);


console.log("Hello Wrld!")