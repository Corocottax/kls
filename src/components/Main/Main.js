import { language } from "../../lang/variable";
import "./Main.css";

export const Main = () => {
  const main = document.createElement("main");

  console.log(language);

  main.innerHTML = `
        <section id="hero">
          <div>
            <h1>${language.h1}</h1>
            <p>${language.hero_p}</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11747.257203384452!2d-5.57056!3d42.601683300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379b004f0577a7%3A0xb435e807d8be2534!2sparque%2Fde%2FPizarro!5e0!3m2!1ses!2ses!4v1715158415596!5m2!1ses!2ses" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
          </div>
          <img src="/assets/rocket.webp" alt="presentación"/>
        </section>`;

  document.querySelector("#app").append(main);
};
