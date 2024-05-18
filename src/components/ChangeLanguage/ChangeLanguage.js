import { init } from "../../../main";
import { changeLanguage } from "../../lang/variable";
import "./ChangeLanguage.css";

export const ChangeLanguage = () => {
     const div = document.createElement("div");

     div.innerHTML = `<div class="languages">
     <input id="desplegable" type="checkbox" />
     <label for="desplegable">
       <img src="/assets/arrow.png" alt="flecha para desplegar idiomas" />
     </label>
     <ul>
       <li>
         <button class="spanish">
           <img
             src="/assets/spain.png"
             alt="bandera de españa"
             title="Cambiar a idioma español"
           />
         </button>
       </li>
       <li>
         <button class="english">
           <img
             src="/assets/england.png"
             alt="bandera de inglaterra"
             title="Cambiar a idioma inglés"
           />
         </button>
       </li>
       <li>
         <button class="germany">
           <img
             src="/assets/germany.png"
             alt="bandera de alemania"
             title="Cambiar a idioma alemán"
           />
         </button>
       </li>
     </ul>
   </div>`;

    document.body.append(div);
}

export const ChangeLanguageListeners = () => {

    const spanish = document.querySelector(".spanish");
    const english = document.querySelector(".english");
    const germany = document.querySelector(".germany");

    spanish.addEventListener("click", () => {
        changeLanguage("es");
        init();
    })

    english.addEventListener("click", () => {
        changeLanguage("en");
        init();
    })

    germany.addEventListener("click", () => {
        changeLanguage("de");
        init();
    })

}