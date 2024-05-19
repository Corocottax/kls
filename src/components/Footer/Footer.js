import { language } from "../../lang/variable";
import "./Footer.css";

export const Footer = () => {
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <h3>${language.footer_text}</h3>
        <a href="tel:+34649544083">+34 649 54 40 83</a>
    `;

    document.querySelector("#app").append(footer);
}