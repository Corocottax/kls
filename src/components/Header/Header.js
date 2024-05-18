import "./Header.css";
import { language } from "../../lang/variable";

export const Header = () => {
  const header = document.createElement("header");

  header.className = "header flex-container";

  header.innerHTML = `
    <img src="/assets/logo.png" alt="logo KLS" />
        <nav>
          <ul class="flex-container">
            <li>
              <a href="#about">${language.header_link_about}</a>
            </li>
            <li>
              <a href="#contact">${language.header_link_contact}</a>
            </li>
          </ul>
        </nav>
    `;

    document.querySelector("#app").append(header);
};
