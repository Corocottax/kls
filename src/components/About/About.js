import "./About.css";
import { cards } from "../../utils/data/aboutContent";
import { Card } from "../Card/Card";
import { language } from "../../lang/variable";

export const About = () => {
    const sectionAbout = document.createElement("section");
    sectionAbout.id = "about"

    sectionAbout.innerHTML = `
        <h2>${language.about_title}</h2>
        <div>
            ${cards(language).map((card) => Card(card)).join().replaceAll(",", "")}
        </div>
    `;

    document.querySelector("#app").append(sectionAbout);
}